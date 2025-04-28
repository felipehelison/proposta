@echo off
echo ► Subindo containers (db, backend, frontend) ...
docker-compose up --build -d

REM Aguarda alguns segundos p/ dar tempo de iniciar
echo ► Aguardando containers iniciarem ...
timeout /t 8 > nul

echo.
echo ==========================
echo Sistema pronto!
echo Frontend : http://localhost:3000
echo API      : http://localhost:3001
echo Swagger  : http://localhost:3001/api-docs
echo ==========================
pause
