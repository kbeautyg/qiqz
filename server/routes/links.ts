import express, { Request, Response } from 'express'
import { getLink, submitUsername, normalizeUsername, isValidUsername } from '../services/linksStore'
import { createRateLimiter } from '../services/rateLimiter'

const router = express.Router()

// Публичные роуты без авторизации — лимиты нужны, иначе перебором по словарю
// можно молча "разрешить" все ссылки мусорными именами раньше их настоящих получателей.
const checkLimiter = createRateLimiter(30, 60 * 1000)
const submitLimiter = createRateLimiter(15, 60 * 1000)

router.get('/:slug/check', (req: Request, res: Response) => {
  const ip = req.ip || 'unknown'

  if (checkLimiter.isLimited(ip)) {
    res.status(429).json({ success: false, exists: false, resolved: false })
    return
  }
  checkLimiter.recordAttempt(ip)

  const record = getLink(req.params.slug.toLowerCase())
  if (!record) {
    res.json({ success: true, exists: false, resolved: false })
    return
  }

  res.json({ success: true, exists: true, resolved: !!record.telegramUsername })
})

router.post('/:slug/submit', (req: Request, res: Response) => {
  const ip = req.ip || 'unknown'

  if (submitLimiter.isLimited(ip)) {
    res.status(429).json({ success: false, error: 'Слишком много попыток. Попробуйте позже.' })
    return
  }
  submitLimiter.recordAttempt(ip)

  const slug = req.params.slug.toLowerCase()
  const record = getLink(slug)
  if (!record) {
    res.status(404).json({ success: false, error: 'Ссылка не найдена' })
    return
  }

  const { username } = (req.body ?? {}) as { username?: unknown }
  if (typeof username !== 'string') {
    res.status(400).json({ success: false, error: 'Юзернейм обязателен' })
    return
  }

  const normalized = normalizeUsername(username)
  if (!isValidUsername(normalized)) {
    res.status(400).json({
      success: false,
      error: 'Юзернейм телеграма: только латинские буквы, цифры и подчёркивание, 5-32 символа',
    })
    return
  }

  const updated = submitUsername(slug, normalized)
  res.json({ success: true, resolved: true, telegramUsername: updated?.telegramUsername })
})

export default router
