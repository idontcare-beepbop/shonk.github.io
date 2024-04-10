@echo off

REM Add all changes
git add --all

REM Commit changes with a default message
git commit -m "Update repository"

REM Push changes to the main branch
git push -u origin main
