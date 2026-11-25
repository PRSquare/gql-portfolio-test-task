# Описание 
Это тестовое задание - GraphQL API для получения данных профиля кандидата (меня)
В данной имплементации подразумевается, что кандидат только один, так что делать какую-либо логику авторизации и запросов я не стал. Сделал всё максимально лаконично и просто. Использовал стек указаный в задании.

## Запуск 
Перед любым из методов скопируйте `env.sample` и сохраните как `.env`
```sh
cp env.sample .env
```

### Запуск через `docker-compose`
``` sh
docker compose -f infra/docker-compose.yaml up --build
```

### Ручной запуск
В `.env` укажите переменные окружения для подключения к базе данных __база данных должна быть запущена__ иначе миграции и seed не пройдут
Установите пакеты
``` sh
npm install
```
Примените миграции и seed
``` sh
npx prisma migrate
npx prisma db seed
```
Запустите приложение
``` sh
npm run start:dev
```

## Доступ к API 
После успешкого запуска graphiql будет доступно по адресу [http://localhost:3000/graphql](http://localhost:3000/graphql)

Полная структура запроса:
``` GraphQL
query {
  profile{
    name
    description
    skills
    projects {
      name
      url
    }
    experience {
      company
      title
      beginTime
      endTime
      achivements
    }
    links {
      label
      url
    }
  }
}
```
