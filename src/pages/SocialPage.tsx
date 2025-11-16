import React from 'react'
import InfoPageTemplate, { InfoPageSection } from './InfoPageTemplate'

const sections: InfoPageSection[] = [
  {
    title: 'Где мы публикуем новости',
    paragraphs: [
      'Основной канал — Telegram. Там мы делимся обновлениями продукта, рассказываем про тарифы и публикуем кейсы клиентов.',
    ],
  },
  {
    title: 'Зачем подписываться',
    paragraphs: [
      'Подписчики первыми узнают о новых интеграциях, изменениях комиссий и специальных предложениях для партнёров.',
    ],
    list: [
      'Анонсы релизов и дорожная карта',
      'Советы по росту оборота и управлению рисками',
      'Интервью с клиентами и обзоры лучших практик',
    ],
  },
  {
    title: 'Как подключиться',
    paragraphs: [
      'Перейдите на t.me/paymentservice или добавьте нас в WhatsApp. Мы также планируем запустить канал на YouTube с разборами кейсов.',
    ],
  },
]

const SocialPage: React.FC = () => (
  <InfoPageTemplate
    badge="Следите за нами"
    title="Будьте в курсе обновлений"
    description="Присоединяйтесь к сообществу PaymentService, чтобы следить за новостями и бета-запусками."
    sections={sections}
  />
)

export default SocialPage

