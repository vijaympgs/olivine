param(
  [switch]$SkipInvalidation
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$configPath = Join-Path $scriptDir "deploy.config.ps1"

if (-not (Test-Path $configPath)) {
  throw "Missing deploy.config.ps1 in $scriptDir"
}

. $configPath

if ([string]::IsNullOrWhiteSpace($BucketName)) {
  throw "BucketName is required in deploy.config.ps1"
}

if (-not $SkipInvalidation -and (
    [string]::IsNullOrWhiteSpace($DistributionId) -or
    $DistributionId -like "REPLACE_WITH_*"
  )) {
  throw "DistributionId is required in deploy.config.ps1 unless -SkipInvalidation is used"
}

$awsBaseArgs = @()
if (-not [string]::IsNullOrWhiteSpace($AwsProfile)) {
  $awsBaseArgs += @("--profile", $AwsProfile)
}
if (-not [string]::IsNullOrWhiteSpace($Region)) {
  $awsBaseArgs += @("--region", $Region)
}

function Invoke-Aws {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Args
  )

  Write-Host ""
  Write-Host "aws $($Args -join ' ')" -ForegroundColor DarkGray
  & aws @awsBaseArgs @Args
  if ($LASTEXITCODE -ne 0) {
    throw "AWS command failed with exit code $LASTEXITCODE"
  }
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Yellow
Write-Host " Deploying olivine.co.in static site" -ForegroundColor Yellow
Write-Host " Bucket      : $BucketName" -ForegroundColor Yellow
Write-Host " Region      : $Region" -ForegroundColor Yellow
if ($SkipInvalidation) {
  Write-Host " CloudFront  : skipped" -ForegroundColor Yellow
} else {
  Write-Host " Distribution: $DistributionId" -ForegroundColor Yellow
}
Write-Host "=========================================" -ForegroundColor Yellow

$bucketCheckArgs = @("s3api", "head-bucket", "--bucket", $BucketName)
try {
  Invoke-Aws -Args $bucketCheckArgs | Out-Null
} catch {
  throw "S3 bucket '$BucketName' does not exist or is not accessible in the current AWS account/region."
}

$syncArgs = @("s3", "sync", $scriptDir, "s3://$BucketName", "--delete")
foreach ($pattern in $ExcludePatterns) {
  $syncArgs += @("--exclude", $pattern)
}
Invoke-Aws -Args $syncArgs

if (-not $SkipInvalidation) {
  Invoke-Aws -Args @("cloudfront", "create-invalidation", "--distribution-id", $DistributionId, "--paths", "/*")
}

Write-Host ""
Write-Host "Deployment complete." -ForegroundColor Green
