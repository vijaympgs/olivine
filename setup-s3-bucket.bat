@echo off
setlocal
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File ".\setup-s3-bucket.ps1" %*
endlocal
