@echo off
setlocal
cd /d "%~dp0"

set "BUCKET=olivine-site-622370466597"
set "REGION=us-east-1"
set "DOMAIN=olivine.co.in"
set "WWW=www.olivine.co.in"
set "S3_ORIGIN=%BUCKET%.s3-website-%REGION%.amazonaws.com"

echo.
echo ============================================================
echo  STEP 1 — Request ACM SSL Certificate (us-east-1 required)
echo ============================================================
for /f "tokens=*" %%i in ('aws acm request-certificate --domain-name %DOMAIN% --subject-alternative-names %WWW% --validation-method DNS --region %REGION% --query CertificateArn --output text') do set "CERT_ARN=%%i"
if "%CERT_ARN%"=="" ( echo [ERROR] Failed to request certificate. & exit /b 1 )
echo Certificate ARN: %CERT_ARN%

echo.
echo ============================================================
echo  IMPORTANT — Validate Certificate in GoDaddy DNS
echo ============================================================
echo Run this to get the CNAME validation records:
echo.
echo   aws acm describe-certificate --certificate-arn %CERT_ARN% --region %REGION% --query "Certificate.DomainValidationOptions"
echo.
echo Add those CNAME records in GoDaddy, then wait 2-5 minutes.
echo Press any key once the certificate shows ISSUED status...
echo.
echo To check status run:
echo   aws acm describe-certificate --certificate-arn %CERT_ARN% --region %REGION% --query "Certificate.Status" --output text
echo.
pause

echo.
echo ============================================================
echo  STEP 2 — Create CloudFront Distribution
echo ============================================================

echo { > cf-config.json
echo   "CallerReference": "olivine-%RANDOM%", >> cf-config.json
echo   "Aliases": { "Quantity": 2, "Items": ["%DOMAIN%", "%WWW%"] }, >> cf-config.json
echo   "DefaultRootObject": "index.html", >> cf-config.json
echo   "Origins": { >> cf-config.json
echo     "Quantity": 1, >> cf-config.json
echo     "Items": [{ >> cf-config.json
echo       "Id": "S3-olivine", >> cf-config.json
echo       "DomainName": "%S3_ORIGIN%", >> cf-config.json
echo       "CustomOriginConfig": { >> cf-config.json
echo         "HTTPPort": 80, "HTTPSPort": 443, >> cf-config.json
echo         "OriginProtocolPolicy": "http-only" >> cf-config.json
echo       } >> cf-config.json
echo     }] >> cf-config.json
echo   }, >> cf-config.json
echo   "DefaultCacheBehavior": { >> cf-config.json
echo     "TargetOriginId": "S3-olivine", >> cf-config.json
echo     "ViewerProtocolPolicy": "redirect-to-https", >> cf-config.json
echo     "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6", >> cf-config.json
echo     "Compress": true, >> cf-config.json
echo     "AllowedMethods": { >> cf-config.json
echo       "Quantity": 2, "Items": ["GET", "HEAD"], >> cf-config.json
echo       "CachedMethods": { "Quantity": 2, "Items": ["GET", "HEAD"] } >> cf-config.json
echo     } >> cf-config.json
echo   }, >> cf-config.json
echo   "PriceClass": "PriceClass_100", >> cf-config.json
echo   "ViewerCertificate": { >> cf-config.json
echo     "ACMCertificateArn": "%CERT_ARN%", >> cf-config.json
echo     "SSLSupportMethod": "sni-only", >> cf-config.json
echo     "MinimumProtocolVersion": "TLSv1.2_2021" >> cf-config.json
echo   }, >> cf-config.json
echo   "Enabled": true, >> cf-config.json
echo   "Comment": "olivine.co.in" >> cf-config.json
echo } >> cf-config.json

for /f "tokens=*" %%i in ('aws cloudfront create-distribution --distribution-config file://cf-config.json --query "Distribution.DomainName" --output text') do set "CF_DOMAIN=%%i"
del cf-config.json

if "%CF_DOMAIN%"=="" ( echo [ERROR] CloudFront distribution creation failed. & exit /b 1 )

echo.
echo ============================================================
echo  DONE — CloudFront Distribution Created
echo.
echo  CloudFront Domain : %CF_DOMAIN%
echo.
echo  Next: Run deploy-dns-guide.bat to see GoDaddy DNS records
echo ============================================================

echo %CF_DOMAIN% > cf-domain.txt
echo Saved CloudFront domain to cf-domain.txt

endlocal
