import React from 'react'
import InfoPageTemplate, { InfoPageSection } from './InfoPageTemplate'

const sections: InfoPageSection[] = [
  {
    title: 'Почему Telegram',
    paragraphs: [
      'Это самый быстрый способ получить ответ от команды PaymentService. Мы подключаем инженеров, менеджеров и финконтроль в одном чате.',
    ],
    list: [
      'Круглосуточное дежурство',
      'Защищённые каналы и двухфакторная аутентификация',
      'Возможность создать общий чат для всей вашей команды',
    ],
  },
  {
    title: 'Как начать',
    paragraphs: ['Напишите нам в @paymentservice или перейдите по ссылке t.me/paymentservice.'],
    list: [
      'Укажите ID компании или телефон',
      'Опишите задачу и срочность',
      'Приложите файлы или скриншоты при необходимости',
    ],
  },
  {
    title: 'Регламент ответа',
    paragraphs: [
      'Среднее время реакции — до 10 минут. Для Enterprise клиентов подключается выделенная линия и резервный канал.',
    ],
  },
]

const TelegramSupportPage: React.FC = () => (
  <InfoPageTemplate
    badge="Поддержка"
    title="Поддержка в Telegram"
    description="Подключайтесь к нашему Telegram-каналу и получайте ответы быстрее всего."
    sections={sections}
  />
)

export default TelegramSupportPage

