import fs from 'fs'
import path from 'path'
import { WORD_POOL, RESERVED_SLUGS } from '../data/wordPool'

export interface LinkRecord {
  slug: string
  createdAt: string
  shown: boolean
  shownAt: string | null
}

const DATA_DIR = path.join(__dirname, '../data')
const DATA_FILE = path.join(DATA_DIR, 'links.json')
const SLUG_FORMAT = /^[a-z0-9]+(-[a-z0-9]+)*$/

function loadFromDisk(): LinkRecord[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function persist(records: LinkRecord[]): void {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2), 'utf-8')
}

let links: LinkRecord[] = loadFromDisk()

export function isValidSlugFormat(slug: string): boolean {
  return SLUG_FORMAT.test(slug) && slug.length >= 2 && slug.length <= 40
}

export function listLinks(): LinkRecord[] {
  return [...links].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export function createLink(explicitSlug?: string): LinkRecord {
  const usedSlugs = new Set(links.map((l) => l.slug))
  let slug: string

  if (explicitSlug) {
    const normalized = explicitSlug.trim().toLowerCase()
    if (!isValidSlugFormat(normalized)) {
      throw new Error('Ссылка может содержать только строчные латинские буквы, цифры и дефис (2-40 символов)')
    }
    if (RESERVED_SLUGS.includes(normalized) || usedSlugs.has(normalized)) {
      throw new Error('Такая ссылка уже занята')
    }
    slug = normalized
  } else {
    const available = WORD_POOL.filter(
      (word) => !RESERVED_SLUGS.includes(word) && !usedSlugs.has(word)
    )
    if (available.length === 0) {
      throw new Error('Пул слов исчерпан — добавьте новые слова в server/data/wordPool.ts или укажите ссылку вручную')
    }
    slug = available[Math.floor(Math.random() * available.length)]
  }

  const record: LinkRecord = {
    slug,
    createdAt: new Date().toISOString(),
    shown: false,
    shownAt: null,
  }

  links = [...links, record]
  persist(links)

  return record
}

export function deleteLink(slug: string): boolean {
  const normalized = slug.trim().toLowerCase()
  const existed = links.some((l) => l.slug === normalized)
  if (!existed) return false

  links = links.filter((l) => l.slug !== normalized)
  persist(links)

  return true
}

export function checkAndConsume(slug: string): { exists: boolean; showPopup: boolean } {
  const record = links.find((l) => l.slug === slug)
  if (!record) {
    return { exists: false, showPopup: false }
  }

  if (record.shown) {
    return { exists: true, showPopup: false }
  }

  links = links.map((l) =>
    l.slug === slug ? { ...l, shown: true, shownAt: new Date().toISOString() } : l
  )
  persist(links)

  return { exists: true, showPopup: true }
}
