import React from 'react'
import './LegalPage.css'

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      title: '1. Какие данные мы собираем',
      paragraphs: [
        'Мы запрашиваем только ту информацию, которая помогает рассчитать условия подключения и поддерживать с вами связь.'
      ],
      list: [
        'Контактные данные: имя, телефон, адрес электронной почты, мессенджеры',
        'Данные о бизнесе: отрасль, ежемесячный оборот, предпочитаемые способы приема платежей',
        'Техническая информация: IP-адрес, данные браузера и устройства для защиты от мошенничества'
      ]
    },
    {
      title: '2. Как мы используем информацию',
      paragraphs: [
        'Данные применяются исключительно для подготовки персонального предложения и улучшения сервиса.',
        'Мы можем связаться с вами через указанные каналы, чтобы уточнить детали и отправить результаты расчета.'
      ]
    },
    {
      title: '3. Передача и хранение',
      paragraphs: [
        'Мы не продаем и не передаем данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ.',
        'Информация хранится на защищенных серверах на территории ЕС и регулярно резервируется.'
      ]
    },
    {
      title: '4. Срок хранения и удаление',
      paragraphs: [
        'Контактные данные удаляются по вашему запросу или автоматически через 24 месяца бездействия.',
        'Чтобы отозвать согласие на обработку, напишите на support@paymentservice.com — мы удалим данные в течение 72 часов.'
      ]
    }
  ]

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <div className="legal-hero-content">
            <span className="legal-badge">Документы</span>
            <h1>Политика конфиденциальности</h1>
            <p>Мы ценим вашу приватность и используем данные только для расчета комиссии и связи с вами.</p>
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
            Если у вас остались вопросы, напишите нам на <a href="mailto:support@paymentservice.com">support@paymentservice.com</a>.
            Мы ответим и обновим документ при изменении законодательства.
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage

