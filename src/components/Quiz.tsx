import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Quiz.css'

type QuestionType = 'single' | 'multi'

interface QuestionOption {
  value: string
  label: string
  hint?: string
}

interface Question {
  key: 'role' | 'volume' | 'methods' | 'payout' | 'urgency'
  type: QuestionType
  eyebrow: string
  title: string
  subtitle?: string
  options: QuestionOption[]
}

interface QuizAnswers {
  role?: string
  volume?: string
  methods: string[]
  payout?: string
  urgency?: string
}

interface LeadForm {
  name: string
  contact: string
  company: string
}

const QUESTIONS: Question[] = [
  {
    key: 'role',
    type: 'single',
    eyebrow: 'Кто вы',
    title: 'Вы регистрируете счёт как...',
    subtitle: 'Определяет лимиты и список документов',
    options: [
      { value: 'business', label: 'Бизнес / ИП', hint: 'Приём платежей от клиентов' },
      { value: 'individual', label: 'Физическое лицо', hint: 'Личные переводы и вывод дохода' },
    ],
  },
  {
    key: 'volume',
    type: 'single',
    eyebrow: 'Объём',
    title: 'Какой у вас средний объём платежей в месяц?',
    subtitle: 'Главный фактор для ставки комиссии',
    options: [
      { value: 'v1', label: 'До $10 000' },
      { value: 'v2', label: '$10 000 — $250 000' },
      { value: 'v3', label: 'Свыше $250 000', hint: 'Индивидуальные условия' },
    ],
  },
  {
    key: 'methods',
    type: 'multi',
    eyebrow: 'Приём платежей',
    title: 'Как принимаете платежи сейчас?',
    subtitle: 'Можно выбрать несколько вариантов',
    options: [
      { value: 'card', label: 'Банковская карта' },
      { value: 'sbp', label: 'СБП / перевод по счёту' },
      { value: 'crypto', label: 'Крипта напрямую' },
      { value: 'other', label: 'Ещё не принимаю' },
    ],
  },
  {
    key: 'payout',
    type: 'single',
    eyebrow: 'Вывод',
    title: 'Куда нужен вывод средств?',
    options: [
      { value: 'trc20', label: 'USDT · TRC20', hint: 'Минимальная комиссия сети' },
      { value: 'erc20', label: 'USDT · ERC20' },
      { value: 'fiat', label: 'Обратно в фиат', hint: 'На карту или счёт' },
    ],
  },
  {
    key: 'urgency',
    type: 'single',
    eyebrow: 'Сроки',
    title: 'Когда планируете подключение?',
    options: [
      { value: 'now', label: 'Сегодня-завтра' },
      { value: 'week', label: 'На этой неделе' },
      { value: 'research', label: 'Пока изучаю варианты' },
    ],
  },
]

const TARIFF_BY_VOLUME: Record<string, { name: string; rate: string; range: string }> = {
  v1: { name: 'START', rate: '1.2%', range: 'до $10 000 / мес' },
  v2: { name: 'BUSINESS', rate: '0.7%', range: '$10 000–250 000 / мес' },
  v3: { name: 'ENTERPRISE', rate: 'от 0.4%', range: 'свыше $250 000 / мес' },
}

const getLabel = (qKey: Question['key'], value?: string): string => {
  const q = QUESTIONS.find((item) => item.key === qKey)
  const opt = q?.options.find((item) => item.value === value)
  return opt ? opt.label : ''
}

const Quiz: React.FC = () => {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState<'fwd' | 'back'>('fwd')
  const [answers, setAnswers] = useState<QuizAnswers>({ methods: [] })
  const [leadForm, setLeadForm] = useState<LeadForm>({ name: '', contact: '', company: '' })
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const totalSteps = QUESTIONS.length
  const isResultStep = step >= totalSteps
  const currentQuestion = !isResultStep ? QUESTIONS[step] : null

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current)
    }
  }, [])

  const goNext = () => {
    setDirection('fwd')
    setStep((s) => s + 1)
  }

  const goBack = () => {
    if (step > 0) {
      setDirection('back')
      setStep((s) => s - 1)
    }
  }

  const restart = () => {
    setStep(0)
    setDirection('fwd')
    setAnswers({ methods: [] })
    setLeadForm({ name: '', contact: '', company: '' })
    setAgreeToTerms(false)
    setSubmitting(false)
    setSubmitted(false)
    setSubmitError('')
  }

  const selectSingle = (key: Question['key'], value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
    if (advanceTimer.current) clearTimeout(advanceTimer.current)
    advanceTimer.current = setTimeout(() => {
      setDirection('fwd')
      setStep((s) => s + 1)
    }, 380)
  }

  const toggleMulti = (value: string) => {
    setAnswers((prev) => {
      const current = prev.methods
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, methods: next }
    })
  }

  const canProceedMulti = currentQuestion?.type === 'multi' ? answers.methods.length > 0 : true

  const canSubmitLead =
    leadForm.name.trim() !== '' && leadForm.contact.trim() !== '' && agreeToTerms

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmitLead) return

    setSubmitting(true)
    setSubmitError('')

    const tariff = TARIFF_BY_VOLUME[answers.volume ?? 'v1'] ?? TARIFF_BY_VOLUME.v1

    try {
      const response = await axios.post('/api/quiz', {
        role: answers.role,
        roleLabel: getLabel('role', answers.role),
        volume: answers.volume,
        volumeLabel: getLabel('volume', answers.volume),
        methods: answers.methods,
        methodsLabel: answers.methods.map((v) => getLabel('methods', v)).join(', '),
        payout: answers.payout,
        payoutLabel: getLabel('payout', answers.payout),
        urgency: answers.urgency,
        urgencyLabel: getLabel('urgency', answers.urgency),
        tariffName: tariff.name,
        tariffRate: tariff.rate,
        name: leadForm.name,
        contact: leadForm.contact,
        company: leadForm.company,
        agreeToTerms,
        timestamp: new Date().toISOString(),
        source: 'quiz',
      })

      if (response.data.success) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting quiz:', error)
      setSubmitError('Произошла ошибка. Пожалуйста, попробуйте ещё раз.')
    } finally {
      setSubmitting(false)
    }
  }

  const tariff = TARIFF_BY_VOLUME[answers.volume ?? 'v1'] ?? TARIFF_BY_VOLUME.v1
  const summary = [
    getLabel('role', answers.role),
    getLabel('volume', answers.volume),
    answers.methods.map((v) => getLabel('methods', v)).join(', '),
    getLabel('payout', answers.payout),
    getLabel('urgency', answers.urgency),
  ]
    .filter(Boolean)
    .join(' · ')

  return (
    <div className="quiz-card bracket-frame">
      <div className="quiz-card-head">
        <span className="quiz-step-counter">
          {isResultStep ? 'РЕЗУЛЬТАТ' : `ШАГ ${String(step + 1).padStart(2, '0')} / ${String(totalSteps).padStart(2, '0')}`}
        </span>
        <span className="quiz-restart" onClick={restart}>Заново</span>
      </div>

      <div className="quiz-progress">
        {QUESTIONS.map((q, i) => {
          const filled = i < step || isResultStep
          const active = i === step && !isResultStep
          return (
            <div
              key={q.key}
              className={`quiz-progress-seg ${filled ? 'filled' : ''} ${active ? 'active' : ''}`}
            />
          )
        })}
      </div>

      {currentQuestion && (
        <div key={`q-${step}`} className={`quiz-question ${direction === 'back' ? 'anim-left' : 'anim-right'}`}>
          <div className="quiz-eyebrow">{currentQuestion.eyebrow.toUpperCase()}</div>
          <h3 className="quiz-question-title">{currentQuestion.title}</h3>
          {currentQuestion.subtitle && <p className="quiz-question-subtitle">{currentQuestion.subtitle}</p>}

          <div className="quiz-options">
            {currentQuestion.options.map((opt) => {
              const selected =
                currentQuestion.type === 'multi'
                  ? answers.methods.includes(opt.value)
                  : answers[currentQuestion.key] === opt.value
              const onActivate = () => {
                if (currentQuestion.type === 'multi') toggleMulti(opt.value)
                else selectSingle(currentQuestion.key, opt.value)
              }
              return (
                <div
                  key={opt.value}
                  tabIndex={0}
                  role="button"
                  className={`quiz-option ${selected ? 'selected' : ''}`}
                  onClick={onActivate}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      onActivate()
                    }
                  }}
                >
                  <div>
                    <div className="quiz-option-label">{opt.label}</div>
                    {opt.hint && <div className="quiz-option-hint">{opt.hint}</div>}
                  </div>
                  <div className={`quiz-option-indicator ${currentQuestion.type === 'multi' ? 'square' : 'round'}`}>
                    {selected && <span className="quiz-option-check">✓</span>}
                  </div>
                </div>
              )
            })}
          </div>

          {currentQuestion.type === 'single' && (
            <div className="quiz-auto-hint">Выбор переводит к следующему шагу автоматически</div>
          )}

          <div className="quiz-nav">
            {step > 0 && (
              <span className="quiz-back" onClick={goBack}>← Назад</span>
            )}
            {currentQuestion.type === 'multi' && (
              <button className="quiz-next-btn" onClick={goNext} disabled={!canProceedMulti}>
                Далее →
              </button>
            )}
          </div>
        </div>
      )}

      {isResultStep && (
        <div className="quiz-result">
          <div className="quiz-result-label">Ваш тариф</div>
          <div className="quiz-result-rate">
            <span className="quiz-result-rate-value">{tariff.rate}</span>
            <span className="quiz-result-rate-name">{tariff.name}</span>
          </div>
          <div className="quiz-result-range">{tariff.range}</div>
          <div className="quiz-result-summary">{summary}</div>

          {submitted ? (
            <div className="quiz-success">
              <div className="quiz-success-icon">✓</div>
              <div className="quiz-success-title">Заявка отправлена</div>
              <p className="quiz-success-text">Свяжемся в течение рабочего дня.</p>
              <span className="quiz-restart" onClick={restart}>Пройти квиз заново</span>
            </div>
          ) : (
            <form className="quiz-lead-form" onSubmit={handleSubmitLead}>
              <div className="quiz-field">
                <label>Имя</label>
                <input
                  type="text"
                  placeholder="Как к вам обращаться"
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                />
              </div>
              <div className="quiz-field">
                <label>Telegram, email или телефон</label>
                <input
                  type="text"
                  placeholder="@username или email"
                  value={leadForm.contact}
                  onChange={(e) => setLeadForm({ ...leadForm, contact: e.target.value })}
                />
              </div>
              <div className="quiz-field">
                <label>Компания <span className="quiz-optional">(необязательно)</span></label>
                <input
                  type="text"
                  placeholder="ООО «Ромашка»"
                  value={leadForm.company}
                  onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                />
              </div>

              <label className="quiz-consent">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                />
                <span>
                  Я ознакомлен и согласен с условиями{' '}
                  <Link to="/offer" target="_blank" rel="noopener noreferrer">Публичной оферты</Link>,{' '}
                  <Link to="/terms" target="_blank" rel="noopener noreferrer">Пользовательского соглашения</Link>{' '}
                  и даю согласие на обработку данных согласно{' '}
                  <Link to="/privacy" target="_blank" rel="noopener noreferrer">Политике конфиденциальности</Link>
                </span>
              </label>

              {submitError && <div className="quiz-error">{submitError}</div>}

              <button type="submit" className="quiz-submit-btn" disabled={!canSubmitLead || submitting}>
                {submitting ? 'Отправляем…' : 'Отправить заявку'}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  )
}

export default Quiz
