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
        setStep(6) // Success step
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
    <div className="quiz">
      <div className="quiz-card">
        {step === 1 && (
          <div className="quiz-step">
            <h1 className="quiz-title">
              🚀 Рассчитаем вашу выгоду от приема платежей с конвертацией в USDT
            </h1>
            <p className="quiz-description">
              Ответьте на 4 вопроса и получите персональный расчет комиссии
            </p>
            <button className="quiz-button primary" onClick={nextStep}>
              Начать расчет
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="quiz-step">
            <h2 className="quiz-question">Какой у вас бизнес?</h2>
            <div className="quiz-options">
              {[
                { value: 'tourism', label: '🛫 Туризм (туры, билеты, экскурсии)' },
                {
                  value: 'consulting',
                  label: '💡 Консультации и образование (услуги, вебинары, коучинг)',
                },
                {
                  value: 'ecommerce',
                  label: '🛒 Интернет-магазин (товары или цифровые продукты)',
                },
                {
                  value: 'freelance',
                  label: '👨‍💻 Фриланс / Услуги (расчеты с заказчиками)',
                },
                {
                  value: 'exchange',
                  label: '💱 Обменник валют (офлайн или онлайн)',
                },
                { value: 'other', label: '🏢 Другое (уточните)' },
              ].map((option) => (
                <label key={option.value} className="quiz-option">
                  <input
                    type="radio"
                    name="businessType"
                    value={option.value}
                    checked={data.businessType === option.value}
                    onChange={() => handleBusinessTypeChange(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {data.businessType === 'other' && (
              <input
                type="text"
                placeholder="Уточните тип вашего бизнеса"
                className="quiz-input"
                value={data.businessTypeOther || ''}
                onChange={(e) =>
                  setData({ ...data, businessTypeOther: e.target.value })
                }
              />
            )}
            <div className="quiz-actions">
              <button className="quiz-button" onClick={prevStep}>
                Назад
              </button>
              <button
                className="quiz-button primary"
                onClick={nextStep}
                disabled={!canProceed()}
              >
                Далее
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="quiz-step">
            <h2 className="quiz-question">
              Как вы сейчас принимаете оплату от клиентов?
            </h2>
            <div className="quiz-options">
              {[
                {
                  value: 'bank_transfer',
                  label: '💳 Банковский перевод (по реквизитам)',
                },
                {
                  value: 'payment_systems',
                  label: '🧾 Платежные системы (Юмани, Киви и т.д.)',
                },
                { value: 'cards', label: '🌐 Карты (онлайн-эквайринг)' },
                { value: 'sbp', label: '📱 СБП (Система быстрых платежей)' },
                { value: 'cash', label: '💰 Наличные' },
                {
                  value: 'crypto',
                  label: '🔄 Криптовалюты (USDT, BTC и др.)',
                },
                {
                  value: 'difficulties',
                  label: '❌ Испытываю трудности с приемом платежей из России',
                },
              ].map((option) => (
                <label key={option.value} className="quiz-option checkbox">
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={data.paymentMethods.includes(option.value)}
                    onChange={() => handlePaymentMethodToggle(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            <div className="quiz-actions">
              <button className="quiz-button" onClick={prevStep}>
                Назад
              </button>
              <button
                className="quiz-button primary"
                onClick={nextStep}
                disabled={!canProceed()}
              >
                Далее
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="quiz-step">
            <h2 className="quiz-question">Какой у вас месячный оборот в рублях?</h2>
            <div className="quiz-options">
              {[
                { value: '0-500k', label: 'До 500 тыс. рублей' },
                { value: '500k-2m', label: '500 тыс. – 2 млн рублей' },
                { value: '2m-5m', label: '2 – 5 млн рублей' },
                { value: '5m+', label: 'Более 5 млн рублей' },
              ].map((option) => (
                <label key={option.value} className="quiz-option">
                  <input
                    type="radio"
                    name="turnover"
                    value={option.value}
                    checked={data.turnover === option.value}
                    onChange={() => handleTurnoverChange(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            <div className="quiz-actions">
              <button className="quiz-button" onClick={prevStep}>
                Назад
              </button>
              <button
                className="quiz-button primary"
                onClick={nextStep}
                disabled={!canProceed()}
              >
                Далее
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="quiz-step">
            <h2 className="quiz-question">
              Спасибо! Мы уже подбираем для вас выгодные условия. Куда прислать расчет?
            </h2>
            <div className="quiz-form">
              <input
                type="text"
                placeholder="Ваше имя *"
                className="quiz-input"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Телефон или Telegram *"
                className="quiz-input"
                value={data.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="E-mail (опционально)"
                className="quiz-input"
                value={data.email || ''}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="quiz-actions">
              <button className="quiz-button" onClick={prevStep}>
                Назад
              </button>
              <button
                className="quiz-button primary"
                onClick={handleSubmit}
                disabled={!canProceed()}
              >
                Получить расчет комиссии
              </button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="quiz-step success">
            <h2 className="quiz-title">✅ Спасибо за заполнение!</h2>
            <p className="quiz-description">
              Мы уже обрабатываем вашу заявку и свяжемся с вами в ближайшее время.
            </p>
          </div>
        )}

        {step <= totalSteps && (
          <div className="quiz-progress">
            <div
              className="quiz-progress-bar"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
            <span className="quiz-progress-text">
              Шаг {step} из {totalSteps}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz

