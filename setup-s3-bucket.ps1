param(
  [string]$BucketName = "olivine.co.in",
  [string]$Region = "us-east-1",
  [string]$AwsProfile = "",
  [switch]$WebsiteMode
)

$ErrorActionPreference = "Stop"

function Invoke-Aws {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Args,
    [switch]$AllowFailure
  )

  $awsBaseArgs = @()
  if (-not [string]::IsNullOrWhiteSpace($AwsProfile)) {
    $awsBaseArgs += @("--profile", $AwsProfile)
  }
  if (-not [string]::IsNullOrWhiteSpace($Region)) {
    $awsBaseArgs += @("--region", $Region)
  }

  Write-Host ""
  Write-Host "aws $($Args -join ' ')" -ForegroundColor DarkGray
  & aws @awsBaseArgs @Args
  if (-not $AllowFailure -and $LASTEXITCODE -ne 0) {
    throw "AWS command failed with exit code $LASTEXITCODE"
  }
}

function Test-BucketExists {
  try {
    Invoke-Aws -Args @("s3api", "head-bucket", "--bucket", $BucketName) | Out-Null
    return $true
  } catch {
    return $false
  }
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Yellow
Write-Host " S3 bucket setup for olivine.co.in" -ForegroundColor Yellow
Write-Host " Bucket : $BucketName" -ForegroundColor Yellow
Write-Host " Region : $Region" -ForegroundColor Yellow
if ($WebsiteMode) {
  Write-Host " Mode   : static website (public bucket)" -ForegroundColor Yellow
} else {
  Write-Host " Mode   : CloudFront origin (recommended)" -ForegroundColor Yellow
}
Write-Host "=========================================" -ForegroundColor Yellow

if (Test-BucketExists) {
  Write-Host ""
  Write-Host "Bucket already exists and is accessible: $BucketName" -ForegroundColor Green
} else {
  $createArgs = @("s3api", "create-bucket", "--bucket", $BucketName)
  if ($Region -ne "us-east-1") {
    $createArgs += @("--create-bucket-configuration", "LocationConstraint=$Region")
  }
  Invoke-Aws -Args $createArgs
  Write-Host ""
  Write-Host "Bucket created: $BucketName" -ForegroundColor Green
}

Invoke-Aws -Args @("s3api", "put-bucket-versioning", "--bucket", $BucketName, "--versioning-configuration", "Status=Enabled")

Invoke-Aws -Args @(
  "s3api", "put-bucket-tagging",
  "--bucket", $BucketName,
  "--tagging", "TagSet=[{Key=Project,Value=olivine},{Key=ManagedBy,Value=PowerShell}]"
)

if ($WebsiteMode) {
  Invoke-Aws -Args @(
    "s3api", "put-public-access-block",
    "--bucket", $BucketName,
    "--public-access-block-configuration",
    "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
  )

  Invoke-Aws -Args @(
    "s3", "website", "s3://$BucketName",
    "--index-document", "index.html",
    "--error-document", "index.html"
  )

  $policyJson = @"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BucketName/*"
    }
  ]
}
"@

  $tempPolicy = Join-Path $env:TEMP "olivine-s3-policy.json"
  Set-Content -Path $tempPolicy -Value $policyJson -Encoding UTF8
  try {
    Invoke-Aws -Args @("s3api", "put-bucket-policy", "--bucket", $BucketName, "--policy", "file://$tempPolicy")
  } finally {
    Remove-Item -Path $tempPolicy -ErrorAction SilentlyContinue
  }
} else {
  Invoke-Aws -Args @(
    "s3api", "put-public-access-block",
    "--bucket", $BucketName,
    "--public-access-block-configuration",
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
  )
}

Write-Host ""
Write-Host "S3 setup complete." -ForegroundColor Green
if ($WebsiteMode) {
  Write-Host "Bucket is configured for direct static website hosting." -ForegroundColor Green
} else {
  Write-Host "Bucket is private and ready to be used as a CloudFront origin." -ForegroundColor Green
}
