import React from 'react'
import ContactForm from '../components/ContactForm'
import './ContactsPage.css'

const ContactsPage: React.FC = () => {
  const contactMethods = [
    {
      title: 'Telegram',
      description: 'Самый быстрый способ связи',
      action: '@paymentservice',
      href: 'https://t.me/paymentservice',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    {
      title: 'Email',
      description: 'Ответим в течение часа',
      action: 'support@paymentservice.com',
      href: 'mailto:support@paymentservice.com',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      title: 'WhatsApp',
      description: 'Чат в мессенджере',
      action: '+7 (XXX) XXX-XX-XX',
      href: 'https://wa.me/1234567890',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
      )
    },
    {
      title: 'Работаем 24/7',
      description: 'Поддержка доступна круглосуточно для решения любых вопросов',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      highlight: true
    }
  ]

  const contactStats = [
    { 
      value: '15 мин', 
      label: 'Среднее время ответа',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    { 
      value: '1000+', 
      label: 'Довольных клиентов',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      )
    },
    { 
      value: '98%', 
      label: 'Положительных отзывов',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.22 2.44C11.09 5 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    { 
      value: '24/7', 
      label: 'Поддержка',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
        </svg>
      )
    }
  ]

  return (
    <div className="contacts-page">
      <div className="contacts-hero">
        <div className="contacts-bg">
          <div className="contacts-shape shape-1"></div>
          <div className="contacts-shape shape-2"></div>
        </div>
        
        <div className="container">
          <div className="contacts-hero-content">
            <div className="contacts-hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Ответим в течение 15 минут
            </div>
            <h1 className="contacts-hero-title">
              Свяжитесь с нами любым удобным способом
            </h1>
            <p className="contacts-hero-description">
              Наша команда готова помочь вам настроить прием платежей и ответить на все вопросы
            </p>
          </div>
        </div>
      </div>
      
      <div className="contacts-content">
        <div className="container">
          <div className="contacts-layout">
            <div className="contacts-info">
              <div className="info-card main">
                <h2>Оставьте заявку</h2>
                <p>Заполните форму, и наш менеджер свяжется с вами в течение 15 минут для расчета персональных условий</p>
                
                <ContactForm />
              </div>
            </div>
            
            <div className="contacts-details">
              <div className="contacts-grid">
                {contactMethods.map((method) => (
                  <div
                    className={`info-card contact-card ${method.highlight ? 'highlight' : ''}`}
                    key={method.title}
                  >
                    <div className={`card-icon ${method.highlight ? 'centered' : ''}`}>
                      {method.icon}
                    </div>
                    <div className="contact-card-body">
                      <div>
                        <h3>{method.title}</h3>
                        <p>{method.description}</p>
                      </div>
                      {method.action && method.href && (
                        <a
                          href={method.href}
                          className="contact-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {method.action}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contacts-stats-panel">
                {contactStats.map((stat) => (
                  <div className="contacts-stat" key={stat.label}>
                    <div className="contacts-stat-icon">{stat.icon}</div>
                    <div>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage
