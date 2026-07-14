interface AttemptWindow {
  count: number
  windowStartedAt: number
}

export interface RateLimiter {
  isLimited(key: string): boolean
  recordAttempt(key: string): void
  reset(key: string): void
}

export function createRateLimiter(maxAttempts: number, windowMs: number): RateLimiter {
  const attempts = new Map<string, AttemptWindow>()

  function isExpired(entry: AttemptWindow): boolean {
    return Date.now() - entry.windowStartedAt > windowMs
  }

  function isLimited(key: string): boolean {
    const entry = attempts.get(key)
    if (!entry) return false
    if (isExpired(entry)) {
      attempts.delete(key)
      return false
    }
    return entry.count >= maxAttempts
  }

  function recordAttempt(key: string): void {
    const entry = attempts.get(key)
    if (!entry || isExpired(entry)) {
      attempts.set(key, { count: 1, windowStartedAt: Date.now() })
      return
    }
    entry.count += 1
  }

  function reset(key: string): void {
    attempts.delete(key)
  }

  const sweepTimer = setInterval(() => {
    for (const [key, entry] of attempts) {
      if (isExpired(entry)) {
        attempts.delete(key)
      }
    }
  }, windowMs)
  sweepTimer.unref()

  return { isLimited, recordAttempt, reset }
}
