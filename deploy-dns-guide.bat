@echo off
setlocal
cd /d "%~dp0"

set "CF_DOMAIN="
if exist cf-domain.txt (
  set /p CF_DOMAIN=<cf-domain.txt
)
if "%CF_DOMAIN%"=="" (
  set /p CF_DOMAIN="Enter your CloudFront domain (e.g. d1234abcd.cloudfront.net): "
)

echo.
echo ============================================================
echo  GoDaddy DNS Records to Add
echo  Login: https://dcc.godaddy.com/manage/olivine.co.in/dns
echo ============================================================
echo.
echo  Record 1 — Root domain (olivine.co.in)
echo  Type  : CNAME
echo  Name  : @
echo  Value : %CF_DOMAIN%
echo  TTL   : 1 Hour
echo.
echo  Record 2 — www subdomain
echo  Type  : CNAME
echo  Name  : www
echo  Value : %CF_DOMAIN%
echo  TTL   : 1 Hour
echo.
echo ============================================================
echo  After adding DNS records, wait 10-30 minutes for propagation
echo.
echo  Then verify with:
echo    nslookup olivine.co.in
echo    nslookup www.olivine.co.in
echo.
echo  Both should resolve to CloudFront IPs.
echo ============================================================
echo.
echo  To re-deploy site files anytime, just run:
echo    deploy-s3.bat
echo ============================================================

endlocal
