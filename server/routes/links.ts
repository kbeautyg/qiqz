import express, { Request, Response } from 'express'
import { checkAndConsume } from '../services/linksStore'
import { createRateLimiter } from '../services/rateLimiter'

const router = express.Router()

// Публичный роут без авторизации — лимит нужен, иначе перебором по словарю
// можно молча погасить popup на всех ссылках раньше их настоящих получателей.
const MAX_CHECKS_PER_WINDOW = 30
const CHECK_WINDOW_MS = 60 * 1000
const checkLimiter = createRateLimiter(MAX_CHECKS_PER_WINDOW, CHECK_WINDOW_MS)

router.get('/:slug/check', (req: Request, res: Response) => {
  const ip = req.ip || 'unknown'

  if (checkLimiter.isLimited(ip)) {
    res.status(429).json({ success: false, exists: false, showPopup: false })
    return
  }
  checkLimiter.recordAttempt(ip)

  const result = checkAndConsume(req.params.slug.toLowerCase())
  res.json({ success: true, ...result })
})

export default router
