import React, { useCallback, useEffect, useState } from 'react'
import { adminApi, AdminLink } from '../../lib/adminApi'
import './AdminPage.css'

type ViewState = 'checking' | 'login' | 'dashboard'

const AdminPage: React.FC = () => {
  const [view, setView] = useState<ViewState>('checking')
  const [links, setLinks] = useState<AdminLink[]>([])
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [customSlug, setCustomSlug] = useState('')
  const [createError, setCreateError] = useState('')
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)

  const loadLinks = useCallback(async () => {
    try {
      const data = await adminApi.listLinks()
      setLinks(data)
      setView('dashboard')
    } catch {
      setView('login')
    }
  }, [])

  useEffect(() => {
    loadLinks()
  }, [loadLinks])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setLoginError('')
    try {
      await adminApi.login(password)
      setPassword('')
      await loadLinks()
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : 'Ошибка входа')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLogout = async () => {
    await adminApi.logout()
    setLinks([])
    setView('login')
  }

  const handleCreate = async (explicitSlug?: string) => {
    setCreateError('')
    try {
      const trimmed = explicitSlug?.trim().toLowerCase()
      await adminApi.createLink(trimmed || undefined)
      setCustomSlug('')
      await loadLinks()
    } catch (error) {
      setCreateError(error instanceof Error ? error.message : 'Не удалось создать ссылку')
    }
  }

  const handleDelete = async (slug: string) => {
    await adminApi.deleteLink(slug)
    await loadLinks()
  }

  const handleCopy = async (slug: string) => {
    const url = `${window.location.origin}/${slug}`
    await navigator.clipboard.writeText(url)
    setCopiedSlug(slug)
    setTimeout(() => {
      setCopiedSlug((current) => (current === slug ? null : current))
    }, 1500)
  }

  if (view === 'checking') {
    return (
      <div className="admin-page">
        <div className="container admin-container">
          <p className="admin-loading">Загрузка…</p>
        </div>
      </div>
    )
  }

  if (view === 'login') {
    return (
      <div className="admin-page">
        <div className="container admin-container admin-container-narrow">
          <span className="section-badge">Админка</span>
          <h1 className="admin-title">Маркерные ссылки</h1>
          <form className="admin-login-form" onSubmit={handleLogin}>
            <input
              type="password"
              className="admin-input"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            {loginError && <p className="admin-error">{loginError}</p>}
            <button type="submit" className="btn btn-primary" disabled={isSubmitting || !password}>
              {isSubmitting ? 'Вход…' : 'Войти'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="container admin-container">
        <div className="admin-header-row">
          <div>
            <span className="section-badge">Админка</span>
            <h1 className="admin-title">Маркерные ссылки</h1>
          </div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={handleLogout}>
            Выйти
          </button>
        </div>

        <div className="admin-create-row">
          <button type="button" className="btn btn-primary" onClick={() => handleCreate()}>
            + Случайная ссылка
          </button>
          <div className="admin-custom-create">
            <input
              type="text"
              className="admin-input"
              placeholder="своя-ссылка (необязательно)"
              value={customSlug}
              onChange={(e) => setCustomSlug(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => handleCreate(customSlug)}
              disabled={!customSlug.trim()}
            >
              Создать
            </button>
          </div>
        </div>
        {createError && <p className="admin-error">{createError}</p>}

        {links.length === 0 ? (
          <p className="admin-empty">Ссылок пока нет — создайте первую.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Ссылка</th>
                  <th>Создана</th>
                  <th>Статус</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {links.map((link) => (
                  <tr key={link.slug}>
                    <td className="admin-slug-cell">/{link.slug}</td>
                    <td>{new Date(link.createdAt).toLocaleString('ru-RU')}</td>
                    <td>
                      {link.telegramUsername ? (
                        <span className="admin-status admin-status-used">
                          @{link.telegramUsername}
                          {link.submittedAt ? ` · ${new Date(link.submittedAt).toLocaleString('ru-RU')}` : ''}
                        </span>
                      ) : (
                        <span className="admin-status admin-status-fresh">ожидает ввода</span>
                      )}
                    </td>
                    <td className="admin-actions-cell">
                      <button type="button" className="btn btn-outline btn-sm" onClick={() => handleCopy(link.slug)}>
                        {copiedSlug === link.slug ? 'Скопировано' : 'Копировать'}
                      </button>
                      <button
                        type="button"
                        className="admin-delete"
                        onClick={() => handleDelete(link.slug)}
                        aria-label="Удалить ссылку"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPage
