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

  return (
    <div className="layout">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <span>PaymentService</span>
            </Link>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
            
            <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
              <Link to="/" className="nav-link">
                Главная
              </Link>
              <Link to="/quiz" className="nav-link">
                Рассчитать комиссию
              </Link>
              <Link to="/contacts" className="nav-link">
                Контакты
              </Link>
              <a href="#consultation" className="nav-link button-link">
                Получить консультацию
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="main-content">{children}</main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <div className="footer-logo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
                <span>PaymentService</span>
              </div>
              <p className="footer-description">
                Платежный сервис для бизнеса с автоматической конвертацией в USDT. Принимайте платежи просто и безопасно.
              </p>
            </div>
            
            <div className="footer-col">
              <h4>Продукт</h4>
              <ul className="footer-links">
                <li><Link to="/quiz">Рассчитать комиссию</Link></li>
                <li><a href="#how-it-works">Как это работает</a></li>
                <li><a href="#pricing">Тарифы</a></li>
                <li><Link to="/contacts">Контакты</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Поддержка</h4>
              <ul className="footer-links">
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#consultation">Связаться с нами</a></li>
                <li><a href="https://t.me/support">Telegram</a></li>
                <li><a href="mailto:support@paymentservice.com">Email</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Следите за нами</h4>
              <div className="social-links">
                <a href="https://t.me/paymentservice" className="social-link" aria-label="Telegram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
                <a href="https://wa.me/1234567890" className="social-link" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 PaymentService. Все права защищены.</p>
            <div className="footer-legal">
              <a href="/privacy">Политика конфиденциальности</a>
              <a href="/terms">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
