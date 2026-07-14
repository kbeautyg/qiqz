import crypto from 'crypto'
import { Request, Response, NextFunction } from 'express'
import { createRateLimiter } from './rateLimiter'

const SESSION_COOKIE = 'admin_session'
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 дней

const MAX_LOGIN_ATTEMPTS = 10
const LOGIN_WINDOW_MS = 15 * 60 * 1000 // 15 минут

const sessions = new Map<string, number>() // token -> expiresAt (ms)
const loginLimiter = createRateLimiter(MAX_LOGIN_ATTEMPTS, LOGIN_WINDOW_MS)

const sessionSweepTimer = setInterval(() => {
  const now = Date.now()
  for (const [token, expiresAt] of sessions) {
    if (expiresAt < now) sessions.delete(token)
  }
}, SESSION_TTL_MS / 24)
sessionSweepTimer.unref()

function hash(value: string): Buffer {
  return crypto.createHash('sha256').update(value).digest()
}

export function isRateLimited(ip: string): boolean {
  return loginLimiter.isLimited(ip)
}

export function recordFailedLogin(ip: string): void {
  loginLimiter.recordAttempt(ip)
}

export function resetLoginAttempts(ip: string): void {
  loginLimiter.reset(ip)
}

export function verifyPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) {
    throw new Error('ADMIN_PASSWORD не задан в переменных окружения')
  }
  return crypto.timingSafeEqual(hash(password), hash(expected))
}

export function createSession(): string {
  const token = crypto.randomBytes(32).toString('hex')
  sessions.set(token, Date.now() + SESSION_TTL_MS)
  return token
}

export function destroySession(token: string | undefined): void {
  if (token) sessions.delete(token)
}

function isSessionValid(token: string | undefined): boolean {
  if (!token) return false
  const expiresAt = sessions.get(token)
  if (!expiresAt) return false
  if (expiresAt < Date.now()) {
    sessions.delete(token)
    return false
  }
  return true
}

export function getSessionToken(req: Request): string | undefined {
  const header = req.headers.cookie
  if (!header) return undefined
  const match = header
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${SESSION_COOKIE}=`))
  return match ? match.slice(SESSION_COOKIE.length + 1) : undefined
}

export function setSessionCookie(res: Response, token: string): void {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  res.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE}=${token}; HttpOnly; Path=/; Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}; SameSite=Lax${secure}`
  )
}

export function clearSessionCookie(res: Response): void {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${secure}`)
}

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  const token = getSessionToken(req)
  if (!isSessionValid(token)) {
    res.status(401).json({ success: false, error: 'Не авторизовано' })
    return
  }
  next()
}
