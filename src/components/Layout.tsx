import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <div className="layout">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              KURS<span className="logo-dot">▪</span>
            </Link>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>

            <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
              <Link to="/process" className="nav-link">
                Как это работает
              </Link>
              <Link to="/pricing-details" className="nav-link">
                Тарифы
              </Link>
              <Link to="/about" className="nav-link">
                Безопасность
              </Link>
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
              <Link to="/contacts" className="nav-link">
                Контакты
              </Link>
              <Link to="/quiz" className="nav-link button-link">
                Оставить заявку
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col footer-brand">
              <div className="footer-logo">
                KURS<span className="logo-dot">▪</span>
              </div>
              <p className="footer-description">
                Инфраструктура платежей с расчётами в USDT. Принимаем оплату и конвертируем в криптовалюту — для бизнеса и частных лиц.
              </p>
            </div>

            <div className="footer-col">
              <h4>Продукт</h4>
              <ul className="footer-links">
                <li><Link to="/process">Как это работает</Link></li>
                <li><Link to="/pricing-details">Тарифы</Link></li>
                <li><Link to="/quiz">Рассчитать комиссию</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Правовое</h4>
              <ul className="footer-links">
                <li><Link to="/offer">Публичная оферта</Link></li>
                <li><Link to="/terms">Пользовательское соглашение</Link></li>
                <li><Link to="/privacy">Политика конфиденциальности</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Связь</h4>
              <ul className="footer-links">
                <li><Link to="/support">Поддержка</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><a href="https://t.me/kurs_support" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                <li><a href="mailto:support@kurs.com">support@kurs.com</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">KURS © 2026</span>
            <span className="footer-disclaimer">
              Курс USDT подвержен рыночным колебаниям. Материалы сайта не являются публичной офертой в значении ст. 437 ГК РФ, если иное прямо не указано в тексте оферты, и не являются индивидуальной инвестиционной консультацией.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
