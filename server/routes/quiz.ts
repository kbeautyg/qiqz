import express, { Request, Response } from 'express'
import { sendQuizNotification } from '../services/telegram'
import { saveToDatabase } from '../services/database'

const router = express.Router()

interface QuizRequest {
  role?: string
  volume?: string
  methods?: string[]
  payout?: string
  urgency?: string
  tariffName?: string
  tariffRate?: string
  name: string
  contact: string
  company?: string
  agreeToTerms?: boolean
  timestamp: string
  source: string
}

router.post('/', async (req: Request, res: Response) => {
  try {
    const data: QuizRequest = req.body

    // Сохраняем в БД
    await saveToDatabase('quiz', data)

    // Отправляем уведомление в Telegram
    await sendQuizNotification(data)

    res.json({ success: true, message: 'Quiz submitted successfully' })
  } catch (error) {
    console.error('Error processing quiz:', error)
    res.status(500).json({ success: false, error: 'Internal server error' })
  }
})

export default router

