import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './ContactForm.css'

interface ContactFormData {
  name: string
  phone: string
  promoCode?: string
  sourcePage?: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    promoCode: '',
    sourcePage: window.location.pathname,
  })
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})

  useEffect(() => {
    // Получаем промокод из URL параметров
    const urlParams = new URLSearchParams(window.location.search)
    const promoParam = urlParams.get('promo')
    if (promoParam) {
      setFormData((prev) => ({ ...prev, promoCode: promoParam }))
    }
  }, [])

  const validatePhone = (phone: string): boolean => {
    // Простая валидация российского номера телефона
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const formatPhone = (value: string): string => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length === 0) return ''
    if (cleaned.length <= 1) return `+7`
    if (cleaned.length <= 4) return `+7 (${cleaned.slice(1)}`
    if (cleaned.length <= 7)
      return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`
    if (cleaned.length <= 9)
      return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData({ ...formData, phone: formatted })
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (!agreeToTerms) {
      return
    }

    try {
      const response = await axios.post('/api/contact', {
        ...formData,
        agreeToTerms,
        timestamp: new Date().toISOString(),
        source: 'contact_form',
        utmParams: {
          utm_source: new URLSearchParams(window.location.search).get('utm_source'),
          utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        },
      })

      if (response.data.success) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', promoCode: '', sourcePage: window.location.pathname })
        setAgreeToTerms(false)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.')
    }
  }

  if (submitted) {
    return (
      <div className="contact-form success">
        <h3>Спасибо за заявку!</h3>
        <p>Наш менеджер свяжется с вами в течение 15 минут.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Получите персональное предложение</h2>
      <p className="form-description">
        Оставьте телефон, и наш менеджер рассчитает для вас комиссию в течение 15 минут
      </p>

      <div className="form-group">
        <input
          type="text"
          placeholder="Имя *"
          className={`form-input ${errors.name ? 'error' : ''}`}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value })
            if (errors.name) {
              setErrors({ ...errors, name: undefined })
            }
          }}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <input
          type="tel"
          placeholder="Телефон *"
          className={`form-input ${errors.phone ? 'error' : ''}`}
          value={formData.phone}
          onChange={handlePhoneChange}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Промокод/Реферальный код (не обязательно)"
          className="form-input"
          value={formData.promoCode}
          onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
        />
        <small className="form-hint">
          Если у вас есть промокод от партнера
        </small>
      </div>

      <label className="form-consent">
        <input
          type="checkbox"
          checked={agreeToTerms}
          onChange={(e) => setAgreeToTerms(e.target.checked)}
        />
        <span>
          Я ознакомлен и согласен с условиями{' '}
          <Link to="/offer" target="_blank" rel="noopener noreferrer">Публичной оферты</Link>{' '}
          и даю согласие на обработку данных согласно{' '}
          <Link to="/privacy" target="_blank" rel="noopener noreferrer">Политике конфиденциальности</Link>
        </span>
      </label>

      <button type="submit" className="form-submit" disabled={!agreeToTerms}>
        Получить расчет комиссии
      </button>
    </form>
  )
}

export default ContactForm

