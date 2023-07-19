# todo-app

1. Создать проект с CRUD-операциями для ToDo списка. Взаимодействие с API:
`https://joldibaev.uz/api/` (GET/POST/PUT/DELETE).
2. Ошибки от сервера должны быть пойманы и показаны пользователю, если таковые
имеются.
3. Страницы проекта должны быть разделены на модули, они не должны. подгружаться
заранее и должны быть защищены если это требуется.
4. Должна быть авторизация, авторизация будет валидной если в header будет поле
Authorization: Token ${token}.
5. Каждая страница должна иметь свой заголовок.
6. Данные, отправляемые на сервер, должны быть проверены на валидность

## Установка

1. Клонируйте репозиторий: `[link-to-repository](https://github.com/alexanderson0708/todo-app.git)`
2. Перейдите в другую ветку: `git checkout dev`
3. Перейдите в директорию проекта: `cd todo-app`
4. Установите зависимости: `npm install`

## Использование

1. Запустите проект: `ng serve` or `npm run start`
2. Откройте приложение в браузере: `http://localhost:4200`

## Функциональность

Авторизация:
https://joldibaev.uz/api/auth/token/login/

### POST
{"
email": "nurlan@payme.uz",
"password": "12345678"
}

Список todo пользователя (token required):
https://joldibaev.uz/api/todo/

### GET
Создать новый todo (token required):
https://joldibaev.uz/api/todo/

### POST
{"
title":"todo1",
"completed": false,
"user":1
} 

Удалить todo по id (token required):
https://joldibaev.uz/api/todo/01d196d6-16a7-4a07-9e26-f7934f20a316/

### DELETE
Детали todo по id (token required):
https://joldibaev.uz/api/todo/01d196d6-16a7-4a07-9e26-f7934f20a316/

### GET
Редактировать todo по id (token required):
https://joldibaev.uz/api/todo/01d196d6-16a7-4a07-9e26-f7934f20a316/

### PUT
{"
title": "Test",
"completed": true,
"user": 1
}

## Технологии

Angular, NgRx

