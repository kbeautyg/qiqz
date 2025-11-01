import express, { Request, Response } from 'express'
import { sendContactNotification } from '../services/telegram'
import { saveToDatabase } from '../services/database'

const router = express.Router()

interface ContactRequest {
  name: string
  phone: string
  promoCode?: string
  sourcePage?: string
  timestamp: string
  source: string
  utmParams?: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
  }
}

router.post('/', async (req: Request, res: Response) => {
  try {
    const data: ContactRequest = req.body

    // Сохраняем в БД
    await saveToDatabase('contact', data)

    // Отправляем уведомление в Telegram
    await sendContactNotification(data)

    res.json({ success: true, message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error('Error processing contact form:', error)
    res.status(500).json({ success: false, error: 'Internal server error' })
  }
})

export default router

