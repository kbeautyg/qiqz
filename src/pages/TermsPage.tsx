import React from 'react'
import './LegalPage.css'

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: '1. Основные понятия',
      paragraphs: [
        'PaymentService — сервис приема платежей и конвертации в USDT. Клиент — юридическое или физическое лицо, направившее заявку на подключение.',
        'Используя сайт, вы подтверждаете, что обладаете правоспособностью заключать соглашения и предоставляете достоверные данные.'
      ]
    },
    {
      title: '2. Услуги и ограничения',
      paragraphs: [
        'Мы предоставляем: прием рублевых платежей, конвертацию в USDT, аналитику и поддержку 24/7.',
        'Запрещено использовать сервис для операций, противоречащих законодательству РФ и международным санкциям.'
      ],
      list: [
        'Мы можем запросить дополнительную верификацию при подозрительных транзакциях.',
        'Ставка комиссии зависит от объема оборота и фиксируется индивидуально после прохождения квиза.'
      ]
    },
    {
      title: '3. Ответственность сторон',
      paragraphs: [
        'Мы гарантируем бесперебойную работу сервиса за исключением форс-мажорных обстоятельств.',
        'Клиент несет ответственность за корректность платежных данных и информирование своих клиентов о правилах возврата.'
      ]
    },
    {
      title: '4. Заключительные положения',
      paragraphs: [
        'Соглашение вступает в силу с момента отправки формы на сайте и действует бессрочно.',
        'Мы уведомляем о существенных изменениях условий минимум за 7 календарных дней.'
      ]
    }
  ]

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <div className="legal-hero-content">
            <span className="legal-badge">Документы</span>
            <h1>Условия использования</h1>
            <p>Определяют правила работы с сервисом PaymentService и обязанности сторон.</p>
          </div>
        </div>
      </div>

      <div className="legal-content">
        <div className="container">
          {sections.map((section) => (
            <section key={section.title} className="legal-section">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="legal-note">
            Используя сайт, вы соглашаетесь с условиями. Если что-то не ясно, напишите нам на
            {' '}
            <a href="mailto:support@paymentservice.com">support@paymentservice.com</a>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage

