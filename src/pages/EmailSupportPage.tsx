import React from 'react'
import InfoPageTemplate, { InfoPageSection } from './InfoPageTemplate'

const sections: InfoPageSection[] = [
  {
    title: 'Адрес для связи',
    paragraphs: [
      'Все юридические и операционные вопросы отправляйте на support@paymentservice.com. Мы фиксируем обращения в системе и даём трекинг по номеру заявки.',
    ],
  },
  {
    title: 'Когда выбирать email',
    paragraphs: [
      'Email удобен для передачи документов, счетов, актов и подробных описаний задач. Также через почту удобно согласовывать SLA и юридические вопросы.',
    ],
    list: [
      'Подписание договоров и актов',
      'Запросы на интеграции и доработки',
      'Разбор сложных инцидентов, требующих вложений',
    ],
  },
  {
    title: 'Сроки ответа',
    paragraphs: [
      'Мы отвечаем в течение 30 минут в рабочее время и оперативно подключаем ответственных менеджеров для срочных тем.',
    ],
  },
]

const EmailSupportPage: React.FC = () => (
  <InfoPageTemplate
    badge="Поддержка"
    title="Поддержка по email"
    description="Пишите нам на support@paymentservice.com — это официальный канал для документов и технических задач."
    sections={sections}
  />
)

export default EmailSupportPage

