import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            💳 Платежный сервис для бизнеса с конвертацией в USDT
          </h1>
          <p className="hero-subtitle">
            Универсальный инструмент для приема платежей в рублях с автоматической
            конвертацией в криптовалюту USD₮ (Tether)
          </p>
          <div className="hero-actions">
            <Link to="/quiz" className="button primary">
              Рассчитать комиссию
            </Link>
            <a href="#consultation" className="button secondary">
              Получить консультацию
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Для кого наш сервис</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛫</div>
              <h3>Туристические компании</h3>
              <p>Продажа туров, билетов, экскурсий</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Консультанты и эксперты</h3>
              <p>Оплата услуг, вебинаров, обучений</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍💻</div>
              <h3>Фрилансеры</h3>
              <p>Расчеты с заказчиками из России</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛒</div>
              <h3>Интернет-магазины</h3>
              <p>Продажа физических и цифровых товаров</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">Как работает сервис</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Прием платежей</h3>
              <p>
                Вы принимаете платежи от клиентов через наш сервис (СБП, карты,
                банковские переводы)
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Накопление рублей</h3>
              <p>Рубли поступают на ваш счет в личном кабинете</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Конвертация в USDT</h3>
              <p>
                В конце дня мы фиксируем курс по grinex.io и конвертируем ваши
                рубли в USDT
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Получение USDT</h3>
              <p>Вы получаете USDT на ваш криптокошелек</p>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="consultation">
        <div className="container">
          <h2 className="section-title">Получите персональное предложение</h2>
          <ContactForm />
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Преимущества для вашего бизнеса</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Все в одном месте — прием платежей, работа с клиентами, конвертация</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Работайте из любой точки мира — все операции удаленно</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Любой сценарий оплаты — онлайн, в чате, при встрече</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Поддержка локальных валют — показывайте цены в валюте страны</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Гибкая комиссия — от 3% до 5% в зависимости от оборота</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <span>Проверенная биржа — работаем с курсом grinex.io</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

