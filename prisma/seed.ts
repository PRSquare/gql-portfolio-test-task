import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/infra/generated/prisma/client.js';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const data = {
  name: 'Иван Лозница',
  description:
    'Backend-разработчик с опытом проектирования критичных доменов торговых, инвестиционных и SaaS-систем. Специализируюсь на архитектуре микросервисов, синхронизации больших объёмов данных (сотни тысяч записей в час) и адаптации legacy-кода под новые бизнес-требования. Активно использую GitHub Copilot, CodeRabbit и Cursor для ускорения разработки, code review и тестирования. Нацелен на переход на Go для high-load сервисов.',
  links: {
    create: [
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/ivan-loznitsa-100101211/',
      },
      {
        label: 'hh',
        url: 'https://hh.ru/resume/1d1c4936ff10ef076a0039ed1f3635306f5a77',
      },
      { label: 'GitHub', url: 'https://github.com/PRSquare' },
    ],
  },
  skills: [
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Docker',
    'Git',
    'Redis',
    'Golang',
    'GraphQL',
    'Prisma',
    'TypeORM',
  ],
  experience: {
    create: [
      {
        company: 'RYABOV.MARKETING',
        title: 'Backend разработчик',
        beginTime: '2025-10-01T00:00:00.000Z',
        endTime: '2026-08-01T00:00:00.000Z',
        achivements:
          '- Спроектировал архитектуру торгового ядра инвестиционной платформы: управление ордерами, учёт сделок, управление позициями, синхронизация активов\
- Реализовал обработку сотен тысяч маркет-записей в режиме реального времени (market data sync) с консистентностью данных\
- Спроектировал микросервисную архитектуру критичных доменов для масштабирования',
      },
      {
        company: 'Startupfoto',
        title: 'Fullstack разработчик',
        beginTime: '2024-03-01T00:00:00.000Z',
        endTime: '2025-09-01T00:00:00.000Z',
        achivements:
          '- Провёл полный рефакторинг legacy-кода: архитектура -> модульная структура, современные паттерны, адаптация к новым бизнес-процессам\
- Спроектировал и разработал SaaS-решение модульной адаптивной CRM с расширяемой архитектурой для множества клиентов\
- Оптимизировал основной веб-сервис под возросший трафик (порядок сотен активных пользователей в день)\
- Начал вводить Go для high-performance компонентов (миграция с Node.js)',
      },
      {
        company: 'Startupfoto',
        title: 'Fullstack developer',
        beginTime: '2024-03-01T00:00:00.000Z',
        endTime: '2025-09-01T00:00:00.000Z',
        achivements:
          '- Разработал marketplace-платформу с интеграцией в Telegram-экосистему: mini-app, личный кабинет продавца, управление заказами, синхронизация данных\
- Реализовал полную автоматизацию продаж через Telegram-бота с двусторонней синхронизацией заказов\
- Достигнул 1K активных пользователей в пике (режим публичного тестирования)\
- Спроектировал API для масштабирования в будущем',
      },
      {
        company: 'OYE Packaging',
        title: 'Руководитель группы разработки',
        beginTime: '2024-03-01T00:00:00.000Z',
        endTime: '2025-09-01T00:00:00.000Z',
        achivements:
          '- Провёл 10+ встреч с заказчиком: сбор требований, планирование, техническая презентация\
- Спроектировал веб-платформу: архитектура, UI/UX дизайн, техническое техническое задание',
      },
      {
        company: 'Независимая веб‑разработка',
        title: 'Fullstack разработчик',
        beginTime: '2024-03-01T00:00:00.000Z',
        endTime: '2025-09-01T00:00:00.000Z',
        achivements:
          '- Разработка веб-проектов полного цикла: требования -> архитектура -> backend -> frontend -> деплой\
- Работа с клиентами: согласование требований, презентации, итерации\
- Реализовал 10+ проектов: лендинги, сайты, интеграции с внешними API\
- Разработка веб-платформы для управления учебными курсами\
- Прототип системы синхронизации интерфейса между рабочими станциями (удалённая поддержка, help-center)\
- Разработка интернет-магазина (e-commerce)',
      },
    ],
  },
  projects: {
    create: [
      {
        name: 'сервис выгрузки данных через API wildberies в google sheets',
        url: 'https://github.com/PRSquare/wb-to-google-sheets-service',
      },
      {
        name: "утилита позволяющая копировать init data при разработке web-app'ов для telegram",
        url: 'https://github.com/PRSquare/telegram-init-data-copier-npm-package',
      },
      {
        name: 'https://github.com/PRSquare/key-sequence-listener-npm-package',
        url: 'простая утилита которая проверяет нажатую комбинацию клавиш',
      },
      {
        name: 'проверка коллизии 2D объектов на JS',
        url: 'https://github.com/PRSquare/js-collision-detection',
      },
      {
        name: 'тестовое - простая CRUD система',
        url: 'https://github.com/PRSquare/php-crud-test-task',
      },
      {
        name: 'онлайн конструктор календей (вайбкод)',
        url: 'https://github.com/PRSquare/calendar-constructor',
      },
    ],
  },
};

async function main() {
  const profile = await prisma.profile.upsert({
    where: { id: 1 },
    update: {},
    create: data,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
