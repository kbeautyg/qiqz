import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import HomePage from './HomePage'
import TelegramGate from '../components/TelegramGate'

interface CheckLinkResponse {
  success: boolean
  exists: boolean
  resolved: boolean
}

interface SubmitUsernameResponse {
  success: boolean
  resolved?: boolean
  error?: string
}

type GateStatus = 'loading' | 'gate' | 'resolved'

const TrackedLinkPage: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [status, setStatus] = useState<GateStatus>('loading')
  // React.StrictMode в dev дважды вызывает эффект — ref переживает этот
  // фейковый цикл (в отличие от обычного `cancelled`-флага из замыкания),
  // так что повторный вызов эффекта для того же slug просто не сработает.
  const activeSlugRef = useRef<string | null>(null)
  // @types/react 18.3.x не типизирует `inert`, а React 18.3 рантайм ещё и не
  // прокидывает его как JSX-атрибут (проверено эмпирически) — выставляем
  // IDL-свойство напрямую через ref, это работает всегда, независимо от React.
  const gatedContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeSlugRef.current === slug) return
    activeSlugRef.current = slug

    axios
      .get<CheckLinkResponse>(`/api/links/${encodeURIComponent(slug)}/check`)
      .then(({ data }) => {
        if (activeSlugRef.current !== slug) return
        if (!data.exists) {
          navigate('/', { replace: true })
          return
        }
        setStatus(data.resolved ? 'resolved' : 'gate')
      })
      .catch(() => {
        if (activeSlugRef.current === slug) navigate('/', { replace: true })
      })
  }, [slug, navigate])

  const handleSubmitUsername = async (username: string): Promise<string | null> => {
    try {
      await axios.post<SubmitUsernameResponse>(`/api/links/${encodeURIComponent(slug)}/submit`, {
        username,
      })
      setStatus('resolved')
      return null
    } catch (error) {
      if (axios.isAxiosError(error) && typeof error.response?.data?.error === 'string') {
        return error.response.data.error
      }
      return 'Не удалось отправить, попробуйте ещё раз'
    }
  }

  const isGated = status === 'gate'

  useEffect(() => {
    if (gatedContentRef.current) {
      gatedContentRef.current.inert = isGated
    }
  }, [isGated])

  return (
    <>
      {/* inert: пока гейт открыт, сайт под ним не должен быть доступен ни
          мышью (перекрыт оверлеем), ни Tab'ом — иначе "нельзя закрыть" не
          работает для клавиатурной навигации. */}
      <div ref={gatedContentRef}>
        <HomePage />
      </div>
      {isGated && <TelegramGate onSubmit={handleSubmitUsername} />}
    </>
  )
}

export default TrackedLinkPage
