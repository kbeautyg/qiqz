import React from 'react'
import InfoPageTemplate, { InfoPageSection } from './InfoPageTemplate'
import { Link } from 'react-router-dom'

const sections: InfoPageSection[] = [
  {
    title: 'Как работает поддержка',
    paragraphs: [
      'Команда доступна 24/7 через Telegram, email и телефон. Мы разделяем запросы по приоритету и SLA, чтобы критичные вопросы решались моментально.',
    ],
    list: [
      'Телеграм-чат с живыми операторами',
      'Email-канал для юридических и финансовых запросов',
      'Дежурный менеджер для Enterprise-клиентов',
    ],
  },
  {
    title: 'С какими вопросами помогаем',
    paragraphs: ['Поддержка закрывает не только технические задачи, но и бизнес-вопросы.'],
    list: [
      'Подключение новых платёжных каналов',
      'Ускорение выводов и проверка AML-транзакций',
      'Консультации по тарифу и развитию бизнеса',
    ],
  },
  {
    title: 'Время реакции',
    paragraphs: [
      'Среднее время ответа — 15 минут. Для Enterprise действует персональный SLA и выделенный канал связи.',
    ],
    list: [
      'Стандартные обращения — до 30 минут',
      'Приоритетные обращения — до 10 минут',
      'Инциденты уровня P1 — немедленное включение команды',
    ],
  },
]

const SupportPage: React.FC = () => (
  <InfoPageTemplate
    badge="Поддержка"
    title="Поддержка PaymentService"
    description="Мы остаёмся с вами на всех этапах: от подключения до масштабирования оборота."
    sections={sections}
    note={
      <>
        Нужна помощь прямо сейчас? Напишите нам в{' '}
        <Link to="/support/telegram">Telegram</Link> или оставьте заявку на странице{' '}
        <Link to="/contact-support">«Связаться с нами»</Link>.
      </>
    }
  />
)

export default SupportPage

