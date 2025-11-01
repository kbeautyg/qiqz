import React from 'react'
import ContactForm from '../components/ContactForm'
import './ContactsPage.css'

const ContactsPage: React.FC = () => {
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
            
            <div className="contacts-sidebar">
              <div className="info-card">
                <div className="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3>Telegram</h3>
                <p>Самый быстрый способ связи</p>
                <a href="https://t.me/paymentservice" className="contact-link" target="_blank" rel="noopener noreferrer">
                  @paymentservice
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
              
              <div className="info-card">
                <div className="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3>Email</h3>
                <p>Напишите нам на почту</p>
                <a href="mailto:support@paymentservice.com" className="contact-link">
                  support@paymentservice.com
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
              
              <div className="info-card">
                <div className="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <h3>WhatsApp</h3>
                <p>Чат в мессенджере</p>
                <a href="https://wa.me/1234567890" className="contact-link" target="_blank" rel="noopener noreferrer">
                  +7 (XXX) XXX-XX-XX
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
              
              <div className="info-card highlight">
                <div className="highlight-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3>Работаем 24/7</h3>
                <p>Поддержка доступна круглосуточно для решения любых вопросов</p>
              </div>
              
              <div className="info-card stats">
                <h3>Наши показатели</h3>
                <div className="stats-grid">
                  <div className="stat">
                    <div className="stat-value">15 мин</div>
                    <div className="stat-label">Среднее время ответа</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">1000+</div>
                    <div className="stat-label">Довольных клиентов</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">98%</div>
                    <div className="stat-label">Положительных отзывов</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">24/7</div>
                    <div className="stat-label">Поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage
