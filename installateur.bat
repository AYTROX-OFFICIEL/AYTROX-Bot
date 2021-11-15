@echo off
title  Copyright AYTROX 2021      AYTROX Bot Installateur V2.1.2.1 -- By AYTROX
echo.
echo   Copyright AYTROX 2021
echo.
echo.
echo.
echo.
timeout /t 5 /nobreak>nul
echo      AYTROX Bot Installateur V2.1.2.1
echo.
echo.
echo.
echo.
echo.
timeout /t 3 /nobreak>nul
echo  Veuiller ecrire oui pour que nous puissions installer le dossier du bot cela n'est pas dangereux
set input=

  set /p input=oui-non   

if %input%==oui echo  OK


if %input%==non exit
echo.
echo.
timeout /t 2 /nobreak>nul
npm i