@echo off
setlocal
cd /d "%~dp0"

set "PAGE=%~1"
if "%PAGE%"=="" set "PAGE=index.html"

if not exist "%PAGE%" (
  echo Frontend file not found: %PAGE%
  exit /b 1
)

echo Opening frontend: %CD%\%PAGE%
start "" "%CD%\%PAGE%"

endlocal
