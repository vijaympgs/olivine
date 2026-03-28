# Olivine Static Deployment

This site is set up for static hosting on `S3 + CloudFront`.

## Files

- `deploy.config.ps1` — environment-specific values
- `deploy-static.ps1` — deploys the site to S3 and invalidates CloudFront
- `deploy-static.bat` — Windows wrapper
- `setup-s3-bucket.ps1` — creates and prepares the S3 bucket
- `setup-s3-bucket.bat` — Windows wrapper for bucket setup

## Create the S3 bucket

Recommended mode for this site:

```powershell
.\setup-s3-bucket.ps1
```

This creates `olivine.co.in` in `us-east-1`, enables versioning, adds basic tags, and keeps the bucket private for CloudFront origin use.

If you want direct S3 website hosting instead of CloudFront:

```powershell
.\setup-s3-bucket.ps1 -WebsiteMode
```

That mode makes the bucket public and configures `index.html` as both index and error document.

## Before first deploy

1. Install and configure AWS CLI.
2. Update `deploy.config.ps1`:
   - `BucketName`
   - `DistributionId`
   - `AwsProfile` if you use a named profile
   - `Region`
3. Ensure the S3 bucket is already created for the site.
4. Ensure CloudFront is already configured with the S3 origin.

## Deploy

### PowerShell

```powershell
.\deploy-static.ps1
```

### Batch

```bat
deploy-static.bat
```

### Skip CloudFront invalidation

```powershell
.\deploy-static.ps1 -SkipInvalidation
```

## Deployment behavior

The script:

1. Syncs the current folder to `s3://<BucketName>`
2. Excludes local-only files such as:
   - `.git`
   - docs/notes files
   - deploy scripts themselves
3. Invalidates CloudFront with `/*` unless `-SkipInvalidation` is used

## Notes

- This deployment path is intentionally static-only.
- It does not reuse the Django / Elastic Beanstalk pattern from `vijim.ai`.
- That is deliberate: `olivine` is currently a static site, so `S3 + CloudFront` is the lighter and cleaner architecture.
