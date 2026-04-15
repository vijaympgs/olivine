@echo off
setlocal
cd /d "%~dp0"

set "BUCKET=olivine-site-622370466597"
set "REGION=us-east-1"

echo.
echo ============================================================
echo  STEP 1 - Create S3 Bucket
echo ============================================================
aws s3 mb s3://%BUCKET% --region %REGION%
echo [OK] Bucket step done (may already exist, that is fine)

echo.
echo ============================================================
echo  STEP 2 - Enable Static Website Hosting
echo ============================================================
aws s3 website s3://%BUCKET% --index-document index.html --error-document index.html
echo [OK] Website hosting enabled

echo.
echo ============================================================
echo  STEP 3 - Remove Public Access Block
echo ============================================================
aws s3api delete-public-access-block --bucket %BUCKET%
echo [OK] Public access block removed

echo.
echo ============================================================
echo  STEP 4 - Apply Bucket Policy (Public Read)
echo ============================================================
powershell -Command "Set-Content -Path bucket-policy.json -Value '{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Principal\":\"*\",\"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::%BUCKET%/*\"}]}'"
aws s3api put-bucket-policy --bucket %BUCKET% --policy file://bucket-policy.json
echo [OK] Bucket policy applied
del bucket-policy.json

echo.
echo ============================================================
echo  STEP 5 - Upload Site Files
echo ============================================================
aws s3 sync . s3://%BUCKET% ^
  --region %REGION% ^
  --exclude "*.md" ^
  --exclude "*.bat" ^
  --exclude "bucket-policy.json" ^
  --exclude "cf-domain.txt" ^
  --exclude "cf-config.json" ^
  --exclude ".git/*" ^
  --delete
echo [OK] Files uploaded

echo.
echo ============================================================
echo  DONE - S3 Website URL (HTTP only, not final):
echo  http://%BUCKET%.s3-website-%REGION%.amazonaws.com
echo.
echo  Next: Run deploy-cloudfront.bat
echo ============================================================
endlocal
