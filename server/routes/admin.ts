import express, { Request, Response } from 'express'
import {
  verifyPassword,
  createSession,
  destroySession,
  getSessionToken,
  setSessionCookie,
  clearSessionCookie,
  requireAdmin,
  isRateLimited,
  recordFailedLogin,
  resetLoginAttempts,
} from '../services/adminAuth'
import { listLinks, createLink, deleteLink } from '../services/linksStore'

const router = express.Router()

router.post('/login', (req: Request, res: Response) => {
  const ip = req.ip || 'unknown'

  if (isRateLimited(ip)) {
    res.status(429).json({ success: false, error: 'Слишком много попыток. Попробуйте позже.' })
    return
  }

  const { password } = (req.body ?? {}) as { password?: unknown }

  if (typeof password !== 'string' || !password) {
    res.status(400).json({ success: false, error: 'Пароль обязателен' })
    return
  }

  try {
    if (!verifyPassword(password)) {
      recordFailedLogin(ip)
      res.status(401).json({ success: false, error: 'Неверный пароль' })
      return
    }
  } catch (error) {
    console.error('Admin auth misconfigured:', error)
    res.status(500).json({ success: false, error: 'Внутренняя ошибка сервера' })
    return
  }

  resetLoginAttempts(ip)
  const token = createSession()
  setSessionCookie(res, token)
  res.json({ success: true })
})

router.post('/logout', (req: Request, res: Response) => {
  destroySession(getSessionToken(req))
  clearSessionCookie(res)
  res.json({ success: true })
})

router.get('/links', requireAdmin, (_req: Request, res: Response) => {
  res.json({ success: true, links: listLinks() })
})

router.post('/links', requireAdmin, (req: Request, res: Response) => {
  const { slug } = (req.body ?? {}) as { slug?: unknown }

  if (slug !== undefined && typeof slug !== 'string') {
    res.status(400).json({ success: false, error: 'Ссылка должна быть строкой' })
    return
  }

  try {
    const link = createLink(slug)
    res.json({ success: true, link })
  } catch (error) {
    res.status(400).json({ success: false, error: error instanceof Error ? error.message : 'Не удалось создать ссылку' })
  }
})

router.delete('/links/:slug', requireAdmin, (req: Request, res: Response) => {
  const deleted = deleteLink(req.params.slug)
  if (!deleted) {
    res.status(404).json({ success: false, error: 'Ссылка не найдена' })
    return
  }
  res.json({ success: true })
})

export default router
