# ЗОНА-40 — версия, совместимая с LORE MANAGER v5

Эта версия объединяет текущий сайт GitHub Pages и локальный LORE MANAGER v5.

Структура:
- `index.html`, `style.css`, `script.js` — основной сайт.
- `lore/` — публикуемый ЛОР.
- `generator/index.html` — локальный генератор.

Генератор не изменяет основной `index.html`, `style.css` или `script.js`.
Экспорт генератора предназначен для содержимого `lore/`.

Для GitHub Pages:
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)
