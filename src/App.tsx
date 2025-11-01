import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactsPage from './pages/ContactsPage'
import QuizPage from './pages/QuizPage'
import Layout from './components/Layout'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Layout>
  )
}

export default App

