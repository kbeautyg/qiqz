# Инструкция по отправке на GitHub

## Шаг 1: Удалите неправильный git репозиторий
В PowerShell выполните:
```powershell
Remove-Item -Path "C:\Users\Sharp\Desktop\.git" -Recurse -Force -ErrorAction SilentlyContinue
```

## Шаг 2: Откройте папку проекта
```powershell
cd "C:\Users\Sharp\Desktop\Новая папка"
```

## Шаг 3: Инициализируйте git в правильной папке
```powershell
git init
```

## Шаг 4: Добавьте файлы проекта
```powershell
git add .
```

## Шаг 5: Создайте первый коммит
```powershell
git commit -m "Initial commit: Payment service landing page with quiz and contact form"
```

## Шаг 6: Создайте репозиторий на GitHub
1. Откройте https://github.com
2. Нажмите "New repository"
3. Введите название репозитория (например: `payment-service-landing`)
4. НЕ добавляйте README, .gitignore или license (они уже есть)
5. Нажмите "Create repository"

## Шаг 7: Подключите удаленный репозиторий
После создания репозитория GitHub покажет команды. Выполните:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Замените `YOUR_USERNAME` и `YOUR_REPO_NAME` на ваши данные.

## Альтернативный способ через GitHub Desktop
Если у вас установлен GitHub Desktop:
1. Откройте GitHub Desktop
2. File → Add Local Repository
3. Выберите папку "C:\Users\Sharp\Desktop\Новая папка"
4. Нажмите "Publish repository"
5. Введите название и описание
6. Нажмите "Publish repository"

