import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              💳 Платежный сервис
            </Link>
            <nav className="nav">
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
          <p>&copy; 2025 Платежный сервис. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

