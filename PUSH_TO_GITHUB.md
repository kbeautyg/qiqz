# Инструкция по отправке на GitHub

## Если вы уже создали коммит

Выполните следующие команды из папки проекта:

### 1. Создайте репозиторий на GitHub
- Откройте https://github.com
- Нажмите "New repository"
- Введите название (например: `payment-service-landing`)
- НЕ добавляйте README, .gitignore или license
- Нажмите "Create repository"

### 2. Подключите удаленный репозиторий
После создания репозитория GitHub покажет команды. Выполните:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Замените `YOUR_USERNAME` и `YOUR_REPO_NAME` на ваши данные.

### 3. Если возникли ошибки

Если вы получили ошибку "fatal: unable to create 'C:/Users/Sharp/Desktop/.git/index.lock'":
1. Удалите файл: `Remove-Item "C:\Users\Sharp\Desktop\.git\index.lock" -Force`
2. Удалите репозиторий из Desktop: `Remove-Item "C:\Users\Sharp\Desktop\.git" -Recurse -Force`
3. Перейдите в папку проекта через проводник
4. Откройте PowerShell в этой папке
5. Выполните:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Payment service landing page with quiz and contact form"
   ```

### 4. Альтернативный способ через GitHub Desktop
Если у вас установлен GitHub Desktop:
1. Откройте GitHub Desktop
2. File → Add Local Repository
3. Выберите папку проекта (где находится package.json)
4. Нажмите "Publish repository"
5. Введите название и описание
6. Нажмите "Publish repository"

