import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactsPage from './pages/ContactsPage'
import QuizPage from './pages/QuizPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import ProductPage from './pages/ProductPage'
import CalculatePage from './pages/CalculatePage'
import ProcessPage from './pages/ProcessPage'
import PricingDetailsPage from './pages/PricingDetailsPage'
import SupportPage from './pages/SupportPage'
import FaqPage from './pages/FaqPage'
import ContactSupportPage from './pages/ContactSupportPage'
import TelegramSupportPage from './pages/TelegramSupportPage'
import EmailSupportPage from './pages/EmailSupportPage'
import SocialPage from './pages/SocialPage'
import AboutPage from './pages/AboutPage'
import Layout from './components/Layout'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/calculate" element={<CalculatePage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/pricing-details" element={<PricingDetailsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact-support" element={<ContactSupportPage />} />
        <Route path="/support/telegram" element={<TelegramSupportPage />} />
        <Route path="/support/email" element={<EmailSupportPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  )
}

export default App

