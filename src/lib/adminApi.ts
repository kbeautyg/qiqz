import axios from 'axios'

export interface AdminLink {
  slug: string
  createdAt: string
  shown: boolean
  shownAt: string | null
}

const client = axios.create({ withCredentials: true })

function extractError(error: unknown, fallback: string): Error {
  if (axios.isAxiosError(error) && typeof error.response?.data?.error === 'string') {
    return new Error(error.response.data.error)
  }
  return new Error(fallback)
}

async function login(password: string): Promise<void> {
  try {
    await client.post('/api/admin/login', { password })
  } catch (error) {
    throw extractError(error, 'Не удалось войти')
  }
}

async function logout(): Promise<void> {
  await client.post('/api/admin/logout')
}

async function listLinks(): Promise<AdminLink[]> {
  const { data } = await client.get('/api/admin/links')
  return data.links
}

async function createLink(slug?: string): Promise<AdminLink> {
  try {
    const { data } = await client.post('/api/admin/links', slug ? { slug } : {})
    return data.link
  } catch (error) {
    throw extractError(error, 'Не удалось создать ссылку')
  }
}

async function deleteLink(slug: string): Promise<void> {
  await client.delete(`/api/admin/links/${encodeURIComponent(slug)}`)
}

export const adminApi = { login, logout, listLinks, createLink, deleteLink }
