@echo off
setlocal

cd /d "%~dp0"

set "BASH_EXE="

if exist "%ProgramFiles%\Git\bin\bash.exe" set "BASH_EXE=%ProgramFiles%\Git\bin\bash.exe"
if not defined BASH_EXE if exist "%ProgramFiles%\Git\usr\bin\bash.exe" set "BASH_EXE=%ProgramFiles%\Git\usr\bin\bash.exe"
if not defined BASH_EXE if exist "%LocalAppData%\Programs\Git\bin\bash.exe" set "BASH_EXE=%LocalAppData%\Programs\Git\bin\bash.exe"
if not defined BASH_EXE if exist "%LocalAppData%\Programs\Git\usr\bin\bash.exe" set "BASH_EXE=%LocalAppData%\Programs\Git\usr\bin\bash.exe"

if not defined BASH_EXE (
  where bash.exe >nul 2>nul
  if not errorlevel 1 set "BASH_EXE=bash.exe"
)

if not defined BASH_EXE (
  echo Git Bash is required to run onboarding on Windows.
  echo Install Git for Windows, then double-click this file again:
  echo https://git-scm.com/download/win
  echo.
  pause
  exit /b 1
)

"%BASH_EXE%" .bin/onboard.sh
set "STATUS=%ERRORLEVEL%"

echo.
if "%STATUS%"=="0" (
  echo Onboarding finished.
) else (
  echo Onboarding exited with status %STATUS%.
)
echo.
pause
exit /b %STATUS%
