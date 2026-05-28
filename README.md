# Frontend React — Стартовый шаблон для практикантов

Шаблон для изучения React на базе Create React App (JavaScript).

## Стек

- React 18
- JavaScript (ES6+)
- CSS Modules (нативный CSS)
- ESLint + Prettier

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Запуск в режиме разработки

```bash
npm start
```

Откроется браузер на `http://localhost:3000`

### 3. Проверка кода

```bash
npm run lint        # проверка ошибок
npm run lint:fix    # автоматическое исправление
npm run format      # форматирование через Prettier
```

### 4. Сборка для продакшна

```bash
npm run build
```

---

## Структура проекта

```
src/
├── components/         # UI-компоненты
│   ├── Button/         # Переиспользуемая кнопка
│   ├── Counter/        # Счётчик (пример useState)
│   ├── Header/         # Шапка приложения
│   └── UserList/       # Список пользователей (пример useEffect + fetch)
├── hooks/
│   └── useFetch.js     # Кастомный хук для запросов
├── pages/              # Страницы (будущие маршруты)
├── utils/
│   └── formatDate.js   # Вспомогательные функции
├── App.js              # Корневой компонент
└── index.js            # Точка входа
```

---

## Готовые компоненты для изучения

### `Counter` — useState

```jsx
// Показывает работу useState и обработчиков событий
import Counter from './components/Counter/Counter';
```

### `UserList` — useEffect + fetch

```jsx
// Показывает загрузку данных с API, состояния loading/error
import UserList from './components/UserList/UserList';
```

### `useFetch` — кастомный хук

```jsx
// Переиспользуемая логика для HTTP-запросов
import useFetch from './hooks/useFetch';

function MyComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/items');
  // ...
}
```

---

## Правила работы

- Каждый компонент — в отдельной папке с файлами `ComponentName.js` и `ComponentName.css`
- Не изменяй конфигурационные файлы без согласования с ментором
- Перед коммитом запускай `npm run lint`
- Называй ветки в формате: `feature/название-задачи` или `fix/что-починил`

---

## Полезные ссылки

- [Документация React](https://react.dev)
- [Хуки React](https://react.dev/reference/react)
- [MDN — Fetch API](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API)
