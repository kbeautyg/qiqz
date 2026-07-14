import React, { useState } from 'react'
import './TelegramGate.css'

interface TelegramGateProps {
  onSubmit: (username: string) => Promise<string | null>
}

const TelegramGate: React.FC<TelegramGateProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setError('')

    const submitError = await onSubmit(username)

    if (submitError) {
      setError(submitError)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="gate-overlay" role="presentation">
      <div
        className="gate-card bracket-frame animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gate-title"
      >
        <span className="section-badge">Доступ к сайту</span>
        <h3 id="gate-title" className="gate-title">
          Введите свой юзернейм телеграма
        </h3>

        <form className="gate-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="gate-input"
            placeholder="@username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isSubmitting}
            autoFocus
          />
          {error && <p className="gate-error">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка…' : 'Продолжить'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default TelegramGate
