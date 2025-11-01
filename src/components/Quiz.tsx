import React, { useState } from 'react'
import axios from 'axios'
import './Quiz.css'

interface QuizData {
  businessType: string
  businessTypeOther?: string
  paymentMethods: string[]
  turnover: string
  name: string
  contact: string
  email?: string
}

const Quiz: React.FC = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<QuizData>({
    businessType: '',
    paymentMethods: [],
    turnover: '',
    name: '',
    contact: '',
  })

  const totalSteps = 5

  const businessTypes = [
    { 
      value: 'tourism', 
      label: 'Туризм и путешествия',
      description: 'Туры, билеты, экскурсии',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    { 
      value: 'consulting', 
      label: 'Консультации и обучение',
      description: 'Услуги, вебинары, коучинг',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    { 
      value: 'ecommerce', 
      label: 'Интернет-магазин',
      description: 'Товары, цифровые продукты',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </svg>
      )
    },
    { 
      value: 'freelance', 
      label: 'Фриланс и услуги',
      description: 'Расчеты с заказчиками',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
        </svg>
      )
    },
    { 
      value: 'exchange', 
      label: 'Обменник валют',
      description: 'Офлайн или онлайн',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      )
    },
    { 
      value: 'other', 
      label: 'Другая сфера',
      description: 'Расскажите подробнее',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      )
    }
  ]

  const paymentMethodsOptions = [
    { 
      value: 'bank_transfer', 
      label: 'Банковский перевод',
      description: 'По реквизитам',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      )
    },
    { 
      value: 'payment_systems', 
      label: 'Платежные системы',
      description: 'Юмани, Киви и т.д.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      )
    },
    { 
      value: 'cards', 
      label: 'Карты онлайн',
      description: 'Онлайн-эквайринг',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <line x1="2" y1="10" x2="22" y2="10"/>
        </svg>
      )
    },
    { 
      value: 'sbp', 
      label: 'СБП',
      description: 'Быстрые платежи',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
      )
    },
    { 
      value: 'cash', 
      label: 'Наличные',
      description: 'Офлайн платежи',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      )
    },
    { 
      value: 'crypto', 
      label: 'Криптовалюты',
      description: 'USDT, BTC и др.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    { 
      value: 'difficulties', 
      label: 'Испытываю трудности',
      description: 'С платежами из России',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      )
    }
  ]

  const turnoverOptions = [
    { 
      value: '0-500k', 
      label: 'До 500 тыс. ₽',
      description: 'В месяц',
      badge: '5%',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      )
    },
    { 
      value: '500k-2m', 
      label: '500 тыс. – 2 млн ₽',
      description: 'В месяц',
      badge: '4%',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18 17l-5-5-4 4-6-6"/>
        </svg>
      )
    },
    { 
      value: '2m-5m', 
      label: '2 – 5 млн ₽',
      description: 'В месяц',
      badge: '3.5%',
      popular: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <polyline points="18 7 13 12 9 8 3 14"/>
        </svg>
      )
    },
    { 
      value: '5m+', 
      label: 'Более 5 млн ₽',
      description: 'В месяц',
      badge: '3%',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      )
    }
  ]

  const handleBusinessTypeChange = (value: string) => {
    setData({ ...data, businessType: value })
  }

  const handlePaymentMethodToggle = (value: string) => {
    const methods = data.paymentMethods.includes(value)
      ? data.paymentMethods.filter((m) => m !== value)
      : [...data.paymentMethods, value]
    setData({ ...data, paymentMethods: methods })
  }

  const handleTurnoverChange = (value: string) => {
    setData({ ...data, turnover: value })
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/quiz', {
        ...data,
        timestamp: new Date().toISOString(),
        source: 'quiz',
      })

      if (response.data.success) {
        setStep(6)
      }
    } catch (error) {
      console.error('Error submitting quiz:', error)
      alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.')
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return true
      case 2:
        return data.businessType !== ''
      case 3:
        return data.paymentMethods.length > 0
      case 4:
        return data.turnover !== ''
      case 5:
        return data.name !== '' && data.contact !== ''
      default:
        return false
    }
  }

  const nextStep = () => {
    if (canProceed() && step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card-modern">
        {step === 1 && (
          <div className="quiz-step-modern">
            <div className="step-icon-large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
              </svg>
            </div>
            
            <h1 className="quiz-title-modern">
              Рассчитаем персональную комиссию для вашего бизнеса
            </h1>
            
            <p className="quiz-description-modern">
              Ответьте на 4 вопроса — это займет всего 2 минуты. Мы подберем оптимальные условия с учетом вашего оборота и сферы деятельности.
            </p>
            
            <div className="start-benefits">
              <div className="benefit-item-small">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Займет 2 минуты</span>
              </div>
              <div className="benefit-item-small">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Персональный расчет</span>
              </div>
              <div className="benefit-item-small">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Без обязательств</span>
              </div>
            </div>

            <button className="quiz-button-modern primary large" onClick={nextStep}>
              Начать расчет
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="quiz-step-modern">
            <div className="step-header">
              <div className="step-number">Шаг 1 из 4</div>
              <h2 className="quiz-question-modern">Какой у вас бизнес?</h2>
              <p className="question-hint">Выберите сферу деятельности вашей компании</p>
            </div>

            <div className="options-grid">
              {businessTypes.map((option) => (
                <label key={option.value} className={`option-card ${data.businessType === option.value ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="businessType"
                    value={option.value}
                    checked={data.businessType === option.value}
                    onChange={() => handleBusinessTypeChange(option.value)}
                  />
                  <div className="option-icon">
                    {option.icon}
                  </div>
                  <div className="option-content">
                    <div className="option-label">{option.label}</div>
                    <div className="option-description">{option.description}</div>
                  </div>
                  <div className="option-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </label>
              ))}
            </div>
            
            {data.businessType === 'other' && (
              <div className="other-input-wrapper">
                <input
                  type="text"
                  placeholder="Уточните тип вашего бизнеса"
                  className="quiz-input-modern"
                  value={data.businessTypeOther || ''}
                  onChange={(e) => setData({ ...data, businessTypeOther: e.target.value })}
                />
              </div>
            )}

            <div className="quiz-actions-modern">
              <button className="quiz-button-modern secondary" onClick={prevStep}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
                Назад
              </button>
              <button
                className="quiz-button-modern primary"
                onClick={nextStep}
                disabled={!canProceed()}
              >
                Далее
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="quiz-step-modern">
            <div className="step-header">
              <div className="step-number">Шаг 2 из 4</div>
              <h2 className="quiz-question-modern">Как вы принимаете оплату?</h2>
              <p className="question-hint">Выберите все подходящие варианты</p>
            </div>

            <div className="options-grid">
              {paymentMethodsOptions.map((option) => (
                <label key={option.value} className={`option-card checkbox ${data.paymentMethods.includes(option.value) ? 'selected' : ''}`}>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={data.paymentMethods.includes(option.value)}
                    onChange={() => handlePaymentMethodToggle(option.value)}
                  />
                  <div className="option-icon">
                    {option.icon}
                  </div>
                  <div className="option-content">
                    <div className="option-label">{option.label}</div>
                    <div className="option-description">{option.description}</div>
                  </div>
                  <div className="option-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </label>
              ))}
            </div>

            <div className="quiz-actions-modern">
              <button className="quiz-button-modern secondary" onClick={prevStep}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
                Назад
              </button>
              <button
                className="quiz-button-modern primary"
                onClick={nextStep}
                disabled={!canProceed()}
              >
                Далее
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="quiz-step-modern">
            <div className="step-header">
              <div className="step-number">Шаг 3 из 4</div>
              <h2 className="quiz-question-modern">Какой месячный оборот?</h2>
              <p className="question-hint">От оборота зависит размер комиссии</p>
            </div>

            <div className="options-grid turnover">
              {turnoverOptions.map((option) => (
                <label key={option.value} className={`option-card turnover ${data.turnover === option.value ? 'selected' : ''} ${option.popular ? 'popular' : ''}`}>
                  {option.popular && <div className="popular-badge">Популярный</div>}
                  <input
                    type="radio"
                    name="turnover"
                    value={option.value}
                    checked={data.turnover === option.value}
                    onChange={() => handleTurnoverChange(option.value)}
                  />
                  <div className="option-icon">
                    {option.icon}
                  </div>
                  <div className="turnover-badge">{option.badge}</div>
                  <div className="option-content">
                    <div className="option-label">{option.label}</div>
                    <div className="option-description">{option.description}</div>
                  </div>
                  <div className="option-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </label>
              ))}
            </div>

            <div className="quiz-actions-modern">
              <button className="quiz-button-modern secondary" onClick={prevStep}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
                Назад
              </button>
              <button
                className="quiz-button-modern primary"
                onClick={nextStep}
                disabled={!canProceed()}
              >
                Далее
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="quiz-step-modern">
            <div className="step-header">
              <div className="step-number">Шаг 4 из 4</div>
              <h2 className="quiz-question-modern">Куда отправить расчет?</h2>
              <p className="question-hint">Мы свяжемся с вами в течение 15 минут</p>
            </div>

            <div className="quiz-form-modern">
              <div className="form-group-modern">
                <label>Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="quiz-input-modern"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="form-group-modern">
                <label>Телефон или Telegram</label>
                <input
                  type="text"
                  placeholder="+7 (900) 123-45-67 или @username"
                  className="quiz-input-modern"
                  value={data.contact}
                  onChange={(e) => setData({ ...data, contact: e.target.value })}
                  required
                />
              </div>
              
              <div className="form-group-modern">
                <label>E-mail <span className="optional">(необязательно)</span></label>
                <input
                  type="email"
                  placeholder="ivan@example.com"
                  className="quiz-input-modern"
                  value={data.email || ''}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
            </div>

            <div className="quiz-actions-modern">
              <button className="quiz-button-modern secondary" onClick={prevStep}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
                Назад
              </button>
              <button
                className="quiz-button-modern primary"
                onClick={handleSubmit}
                disabled={!canProceed()}
              >
                Получить расчет
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="quiz-step-modern success">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            
            <h2 className="quiz-title-modern">Спасибо за заявку!</h2>
            
            <p className="quiz-description-modern">
              Мы получили ваши данные и уже подбираем оптимальные условия. Наш менеджер свяжется с вами в течение 15 минут с персональным расчетом комиссии.
            </p>
            
            <div className="success-features">
              <div className="success-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Персональный расчет готовится</span>
              </div>
              <div className="success-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Менеджер свяжется в течение 15 минут</span>
              </div>
              <div className="success-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Подберем лучшие условия</span>
              </div>
            </div>
          </div>
        )}

        {step <= totalSteps && step !== 1 && (
          <div className="quiz-progress-modern">
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${((step - 1) / totalSteps) * 100}%` }}
              />
            </div>
            <div className="progress-text">
              Шаг {step - 1} из {totalSteps}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz
