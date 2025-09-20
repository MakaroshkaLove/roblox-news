# Инструкция по деплою на GitHub Pages

## Шаги для деплоя:

### 1. Создайте репозиторий на GitHub
- Создайте новый репозиторий с именем `roblox-news`
- НЕ инициализируйте с README, .gitignore или лицензией

### 2. Обновите homepage в package.json
Замените `yourusername` на ваш реальный GitHub username:
```json
"homepage": "https://yourusername.github.io/roblox-news"
```

### 3. Инициализируйте Git и загрузите код
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/roblox-news.git
git push -u origin main
```

### 4. Деплой на GitHub Pages
```bash
npm run deploy
```

### 5. Включите GitHub Pages в настройках репозитория
- Перейдите в Settings → Pages
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)
- Нажмите Save

### 6. Ваш сайт будет доступен по адресу:
`https://yourusername.github.io/roblox-news`

## Команды для обновления сайта:
После внесения изменений в код:
```bash
git add .
git commit -m "Update"
git push
npm run deploy
```

## Примечания:
- Убедитесь, что заменили `yourusername` на ваш реальный GitHub username
- После первого деплоя сайт может появиться через несколько минут
- Все последующие обновления будут доступны сразу после `npm run deploy`
