@echo off
setlocal

:: ============================================================
:: CONFIGURATION SECTION
:: Update the commit message here periodically
:: ============================================================
set COMMIT_MSG=20022026-930p-Daily Update: Retail ERP enhancements and session management updates
:: ============================================================

title Olivine Platform - Daily Git Sync
color 0B

echo ============================================================
echo   OLIVINE PLATFORM - DAILY GIT SYNC
echo ============================================================
echo.
echo Current Message: "%COMMIT_MSG%"
echo.

:: Check for .git directory
if not exist ".git" (
    echo [ERROR] This is not a git repository.
    pause
    exit /b 1
)

echo [1/3] Staging all changes...
git add .

echo [2/3] Committing with message...
git commit -m "%COMMIT_MSG%"

echo [3/3] Pushing to remote...
git push origin main

echo.
echo ============================================================
echo   SYNC COMPLETE
echo ============================================================
echo.
pause
