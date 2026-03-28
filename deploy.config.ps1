$BucketName = "olivine.co.in"
$DistributionId = "EZM6CBH3OTKTU"
$AwsProfile = ""
$Region = "us-east-1"

# Files and folders that should not be pushed to the static bucket.
$ExcludePatterns = @(
  'cloudfront-oac.json',
  'cloudfront-distribution.json',
  'bucket-policy.json',
  ".git/*",
  ".git",
  "session-tracker.md",
  "prompt.md",
  "implementation.md",
  "DEPLOYMENT.md",
  "index_backup.html",
  "index_clean.html",
  "onboarding_extracted/*",
  "onboarding_extracted",
  "*.ps1",
  "*.bat"
)
