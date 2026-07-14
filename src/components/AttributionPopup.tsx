import React, { useEffect, useRef } from 'react'
import './AttributionPopup.css'

interface AttributionPopupProps {
  onClose: () => void
}

const TELEGRAM_HANDLE = '@Pentanst'
const TELEGRAM_URL = 'https://t.me/Pentanst'

const AttributionPopup: React.FC<AttributionPopupProps> = ({ onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="attribution-overlay animate-fade-in" role="presentation" onClick={onClose}>
      <div
        className="attribution-card bracket-frame animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="attribution-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="attribution-close"
          onClick={onClose}
          aria-label="Закрыть уведомление"
        >
          ✕
        </button>

        <span className="section-badge">Уведомление</span>
        <h3 id="attribution-title" className="attribution-title">
          Telegram заказчика
        </h3>
        <a
          className="attribution-link"
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {TELEGRAM_HANDLE}
        </a>
      </div>
    </div>
  )
}

export default AttributionPopup
