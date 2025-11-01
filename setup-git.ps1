# Скрипт для отправки на GitHub
# Запустите этот скрипт из папки проекта

Write-Host "Инициализация git репозитория..." -ForegroundColor Green

# Удаляем старый репозиторий из Desktop если есть
if (Test-Path "C:\Users\Sharp\Desktop\.git") {
    Remove-Item -Path "C:\Users\Sharp\Desktop\.git" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Удален старый репозиторий из Desktop" -ForegroundColor Yellow
}

# Проверяем что мы в правильной папке
if (-not (Test-Path "package.json")) {
    Write-Host "ОШИБКА: package.json не найден!" -ForegroundColor Red
    Write-Host "Убедитесь что вы находитесь в папке проекта" -ForegroundColor Red
    exit 1
}

# Удаляем старый .git если есть
if (Test-Path ".git") {
    Remove-Item -Path ".git" -Recurse -Force
    Write-Host "Удален старый .git" -ForegroundColor Yellow
}

# Инициализируем git
git init
Write-Host "Git репозиторий инициализирован" -ForegroundColor Green

# Добавляем файлы проекта
git add .
Write-Host "Файлы добавлены" -ForegroundColor Green

# Создаем коммит
git commit -m "Initial commit: Payment service landing page with quiz and contact form"
Write-Host "Коммит создан!" -ForegroundColor Green

Write-Host "`nСледующие шаги:" -ForegroundColor Cyan
Write-Host "1. Создайте репозиторий на GitHub" -ForegroundColor Yellow
Write-Host "2. Выполните команды:" -ForegroundColor Yellow
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git" -ForegroundColor White
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White

