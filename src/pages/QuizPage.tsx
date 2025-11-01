import React from 'react'
import Quiz from '../components/Quiz'
import './QuizPage.css'

const QuizPage: React.FC = () => {
  return (
    <div className="quiz-page">
      <div className="quiz-hero">
        <div className="quiz-bg">
          <div className="quiz-shape shape-1"></div>
          <div className="quiz-shape shape-2"></div>
        </div>
        
        <div className="container">
          <div className="quiz-hero-content">
            <div className="quiz-hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
              </svg>
              4 простых вопроса
            </div>
            <h1 className="quiz-hero-title">
              Рассчитаем вашу комиссию за 2 минуты
            </h1>
            <p className="quiz-hero-description">
              Ответьте на несколько вопросов о вашем бизнесе, и мы подберем оптимальные условия с учетом вашего оборота
            </p>
            
            <div className="quiz-features">
              <div className="quiz-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Занимает 2 минуты</span>
              </div>
              <div className="quiz-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Полностью конфиденциально</span>
              </div>
              <div className="quiz-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Персональный расчет</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="quiz-content">
        <div className="container">
          <div className="quiz-layout">
            <div className="quiz-sidebar">
              <div className="sidebar-card">
                <h3>Что вы получите</h3>
                <ul className="sidebar-list">
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Точный расчет комиссии для вашего оборота</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Персональные условия подключения</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Консультация менеджера в течение 15 минут</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Примеры расчетов для вашей сферы</span>
                  </li>
                </ul>
              </div>
              
              <div className="sidebar-card trust">
                <div className="trust-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4>Ваши данные защищены</h4>
                <p>Мы не передаем информацию третьим лицам и используем её только для расчета условий</p>
              </div>
              
              <div className="sidebar-stats">
                <div className="stat-item">
                  <div className="stat-value">1000+</div>
                  <div className="stat-label">Довольных клиентов</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">3-5%</div>
                  <div className="stat-label">Комиссия</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="quiz-main">
              <Quiz />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizPage
