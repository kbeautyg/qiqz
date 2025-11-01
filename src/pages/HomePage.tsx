import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import './HomePage.css'

const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <span className="badge animate-fade-in-down">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Комиссия от 3%
              </span>
              
              <h1 className="hero-title animate-fade-in-up delay-100">
                Платежный сервис с конвертацией в <span className="text-gradient">USDT</span>
              </h1>
              
              <p className="hero-description animate-fade-in-up delay-200">
                Принимайте платежи в рублях от клиентов из России через СБП и карты. Автоматически конвертируйте выручку в USDT по выгодному курсу.
              </p>
              
              <div className="hero-stats animate-fade-in-up delay-300">
                <div className="stat-item">
                  <div className="stat-value">3-5%</div>
                  <div className="stat-label">Комиссия</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Поддержка</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">1000+</div>
                  <div className="stat-label">Клиентов</div>
                </div>
              </div>
              
              <div className="hero-buttons animate-fade-in-up delay-400">
                <Link to="/quiz" className="btn btn-primary btn-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                  Рассчитать комиссию
                </Link>
                <a href="#how-it-works" className="btn btn-secondary btn-large">
                  Как это работает
                </a>
              </div>
              
              <div className="hero-trust animate-fade-in-up delay-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Безопасные платежи через проверенные каналы</span>
              </div>
            </div>
            
            <div className="hero-right animate-fade-in-right delay-300">
              <div className="hero-visual">
                <div className="visual-card card-1">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  </div>
                  <div className="card-content">
                    <div className="card-label">Получено</div>
                    <div className="card-value">₽ 1,250,000</div>
                  </div>
                  <div className="card-status">
                    <span className="status-dot"></span>
                    Активно
                  </div>
                </div>
                
                <div className="visual-card card-2">
                  <div className="card-icon green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div className="card-content">
                    <div className="card-label">Конвертировано</div>
                    <div className="card-value green">₮ 13,245</div>
                  </div>
                  <div className="conversion-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Курс зафиксирован
                  </div>
                </div>
                
                <div className="floating-icon icon-1">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                </div>
                
                <div className="floating-icon icon-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-number">100%</div>
                <div className="stat-text">Защищенные транзакции</div>
              </div>
            </div>
            
            <div className="stat-box">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-number">15 мин</div>
                <div className="stat-text">Среднее время ответа</div>
              </div>
            </div>
            
            <div className="stat-box">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-number">1000+</div>
                <div className="stat-text">Довольных клиентов</div>
              </div>
            </div>
            
            <div className="stat-box">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
              </div>
              <div className="stat-info">
                <div className="stat-number">₽1.5M+</div>
                <div className="stat-text">Обработано ежедневно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="section for-whom">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Решения</span>
            <h2 className="section-title">Для кого наш сервис</h2>
            <p className="section-subtitle">
              Мы помогаем бизнесу любого масштаба принимать платежи и конвертировать их в криптовалюту
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="icon-card">
              <div className="icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Туристические компании</h3>
              <p>Продажа туров, билетов, экскурсий с мгновенной фиксацией курса в любой валюте</p>
            </div>
            
            <div className="icon-card">
              <div className="icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Консультанты и эксперты</h3>
              <p>Оплата услуг, вебинаров, обучений с автоматической генерацией счетов</p>
            </div>
            
            <div className="icon-card">
              <div className="icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 7h20M2 12h20M2 17h20"/>
                </svg>
              </div>
              <h3>Фрилансеры</h3>
              <p>Простые расчеты с заказчиками из России без сложных процедур</p>
            </div>
            
            <div className="icon-card">
              <div className="icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
              </div>
              <h3>Интернет-магазины</h3>
              <p>Продажа физических и цифровых товаров с интеграцией в ваш сайт</p>
            </div>
            
            <div className="icon-card">
              <div className="icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
              </div>
              <h3>Обменники валют</h3>
              <p>Офлайн и онлайн обменные операции с прозрачным курсообразованием</p>
            </div>
            
            <div className="icon-card">
              <div className="icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
              <h3>Любой бизнес</h3>
              <p>Универсальное решение для приема платежей с конвертацией в USDT</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section how-it-works">
        <div className="container-wide">
          <div className="section-header">
            <span className="section-badge">Процесс</span>
            <h2 className="section-title">Как это работает</h2>
            <p className="section-subtitle">
              Простой и прозрачный процесс от приема платежа до получения USDT
            </p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-badge">01</div>
              <div className="step-content">
                <h3>Прием платежей</h3>
                <p>Клиент оплачивает через СБП, карты Visa/Mir/Mastercard или банковский перевод. Деньги поступают на ваш счет в личном кабинете.</p>
              </div>
              <div className="step-visual">
                <svg width="200" height="120" viewBox="0 0 200 120">
                  <rect x="20" y="30" width="160" height="60" rx="8" fill="#f3f4f6" stroke="#10b981" strokeWidth="2"/>
                  <circle cx="50" cy="60" r="15" fill="#10b981"/>
                  <path d="M45 60l5 5 10-10" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-badge">02</div>
              <div className="step-content">
                <h3>Накопление на счете</h3>
                <p>Рубли накапливаются на вашем балансе. Вы видите все транзакции в реальном времени с детальной аналитикой.</p>
              </div>
              <div className="step-visual">
                <svg width="200" height="120" viewBox="0 0 200 120">
                  <rect x="20" y="20" width="160" height="80" rx="8" fill="#f3f4f6"/>
                  <text x="100" y="60" textAnchor="middle" fill="#10b981" fontSize="24" fontWeight="bold">₽ 1.2M</text>
                  <text x="100" y="85" textAnchor="middle" fill="#6b7280" fontSize="12">На балансе</text>
                </svg>
              </div>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-badge">03</div>
              <div className="step-content">
                <h3>Фиксация курса</h3>
                <p>В конце дня мы фиксируем биржевой курс по grinex.io + наша комиссия от 3% до 5% в зависимости от оборота.</p>
              </div>
              <div className="step-visual">
                <svg width="200" height="120" viewBox="0 0 200 120">
                  <circle cx="100" cy="60" r="40" fill="#10b981" opacity="0.1"/>
                  <text x="100" y="65" textAnchor="middle" fill="#10b981" fontSize="20" fontWeight="bold">92.7</text>
                  <text x="100" y="85" textAnchor="middle" fill="#6b7280" fontSize="12">₽/USDT</text>
                </svg>
              </div>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-badge">04</div>
              <div className="step-content">
                <h3>Получение USDT</h3>
                <p>Конвертированные USDT поступают на указанный вами криптокошелек. Прозрачно, быстро, безопасно.</p>
              </div>
              <div className="step-visual">
                <svg width="200" height="120" viewBox="0 0 200 120">
                  <rect x="40" y="30" width="120" height="60" rx="30" fill="#10b981"/>
                  <text x="100" y="65" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">₮ USDT</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Тарифы</span>
            <h2 className="section-title">Прозрачное ценообразование</h2>
            <p className="section-subtitle">
              Комиссия зависит от вашего оборота. Чем больше объем — тем выгоднее условия
            </p>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Стартовый</h3>
                <p>Для начинающих</p>
              </div>
              <div className="pricing-price">
                <span className="price-value">5%</span>
                <span className="price-label">комиссия</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  До 500 тыс. ₽/мес
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Личный кабинет
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  API интеграция
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Email поддержка
                </li>
              </ul>
              <Link to="/quiz" className="btn btn-outline">
                Начать
              </Link>
            </div>
            
            <div className="pricing-card featured">
              <div className="popular-badge">Популярный</div>
              <div className="pricing-header">
                <h3>Бизнес</h3>
                <p>Для растущих компаний</p>
              </div>
              <div className="pricing-price">
                <span className="price-value">4%</span>
                <span className="price-label">комиссия</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  500 тыс. - 2 млн ₽/мес
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Приоритетная поддержка
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Персональный менеджер
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Расширенная аналитика
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Webhook уведомления
                </li>
              </ul>
              <Link to="/quiz" className="btn btn-primary">
                Подключить
              </Link>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Энтерпрайз</h3>
                <p>Для крупного бизнеса</p>
              </div>
              <div className="pricing-price">
                <span className="price-value">3%</span>
                <span className="price-label">комиссия</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  От 2 млн ₽/мес
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Выделенная поддержка 24/7
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Индивидуальные условия
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Кастомная интеграция
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  SLA гарантии
                </li>
              </ul>
              <a href="#consultation" className="btn btn-outline">
                Связаться
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-left">
              <span className="section-badge">FAQ</span>
              <h2>Часто задаваемые вопросы</h2>
              <p>Не нашли ответ? Напишите нам в поддержку</p>
              <a href="#consultation" className="btn btn-primary">
                Задать вопрос
              </a>
            </div>
            
            <div className="faq-right">
              <div className="faq-list">
                {[
                  {
                    q: 'Как быстро проходят платежи?',
                    a: 'Платежи через СБП и карты обрабатываются мгновенно. Рубли поступают на ваш счет в течение нескольких секунд после оплаты клиентом.'
                  },
                  {
                    q: 'Когда происходит конвертация в USDT?',
                    a: 'Конвертация происходит по вашему запросу или автоматически в конце дня. Курс фиксируется на момент конвертации по биржевому курсу grinex.io + наша комиссия.'
                  },
                  {
                    q: 'Какие документы нужны для подключения?',
                    a: 'Для физлиц — паспорт. Для юрлиц — регистрационные документы и ИНН. Верификация занимает 1-2 рабочих дня.'
                  },
                  {
                    q: 'Есть ли лимиты на операции?',
                    a: 'Минимальная сумма платежа — 100 ₽, максимальная зависит от вашего тарифа и истории операций. Для крупных объемов предусмотрены индивидуальные условия.'
                  },
                  {
                    q: 'Как вы рассчитываете комиссию?',
                    a: 'Комиссия составляет от 3% до 5% и добавляется к биржевому курсу grinex.io. Чем больше ваш ежемесячный оборот, тем ниже комиссия.'
                  }
                ].map((item, index) => (
                  <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFaq(index)}>
                      <span>{item.q}</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2>Готовы начать принимать платежи?</h2>
              <p>Подключитесь к сервису за 5 минут и получите первую конвертацию с минимальной комиссией</p>
              <div className="cta-buttons">
                <Link to="/quiz" className="btn btn-primary btn-large">
                  Рассчитать комиссию
                </Link>
                <a href="#consultation" className="btn btn-secondary btn-large">
                  Получить консультацию
                </a>
              </div>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Без скрытых комиссий</span>
              </div>
              <div className="cta-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Быстрая интеграция</span>
              </div>
              <div className="cta-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="consultation" className="section consultation">
        <div className="container">
          <div className="consultation-wrapper">
            <div className="consultation-info">
              <h2>Получите персональное предложение</h2>
              <p>Оставьте заявку, и наш менеджер рассчитает для вас индивидуальные условия в течение 15 минут</p>
              
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Быстрый ответ</h4>
                    <p>Перезвоним в течение 15 минут</p>
                  </div>
                </div>
                
                <div className="contact-benefit">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Конфиденциальность</h4>
                    <p>Не передаем данные третьим лицам</p>
                  </div>
                </div>
                
                <div className="contact-benefit">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Персональный расчет</h4>
                    <p>Подберем оптимальные условия</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="consultation-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
