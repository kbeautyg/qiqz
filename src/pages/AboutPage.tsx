import React from 'react'
import InfoPageTemplate, { InfoPageSection } from './InfoPageTemplate'

const sections: InfoPageSection[] = [
  {
    title: 'О компании',
    paragraphs: [
      'PaymentService — финтех-команда с опытом построения платёжных решений в России и СНГ. Мы помогаем бизнесу принимать платежи в рублях и конвертировать их в стабильные цифровые активы.',
    ],
  },
  {
    title: 'Наши принципы',
    paragraphs: ['Мы строим сервис вокруг прозрачности, безопасности и скорости.'],
    list: [
      'Прозрачная комиссия и понятные условия',
      'Современные протоколы безопасности и шифрования',
      'Круглосуточная поддержка и персональные менеджеры',
    ],
  },
  {
    title: 'Правовая информация',
    paragraphs: [
      '© 2025 PaymentService. Все права защищены. Мы регулярно обновляем юридические документы и уведомляем клиентов об изменениях заранее.',
    ],
  },
]

const AboutPage: React.FC = () => (
  <InfoPageTemplate
    badge="О компании"
    title="PaymentService — прозрачный сервис для приёма платежей"
    description="Узнайте больше о нашей миссии, ценностях и подходе к построению платёжной инфраструктуры."
    sections={sections}
  />
)

export default AboutPage

