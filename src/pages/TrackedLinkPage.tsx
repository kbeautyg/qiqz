import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import HomePage from './HomePage'
import AttributionPopup from '../components/AttributionPopup'

interface CheckLinkResponse {
  success: boolean
  exists: boolean
  showPopup: boolean
}

const TrackedLinkPage: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false)
  // Проверка "гасит" попап на сервере при первом же запросе (не идемпотентна),
  // поэтому нельзя полагаться на закрытие эффекта из cleanup: React.StrictMode
  // в dev синхронно вызывает cleanup между двумя запусками эффекта — обычный
  // `cancelled`-флаг из замыкания к этому моменту уже true, и единственный
  // реальный ответ сервера был бы отброшен. Вместо этого сверяемся с ref:
  // он не сбрасывается при фейковом StrictMode-цикле, только при смене slug.
  const activeSlugRef = useRef<string | null>(null)

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
        if (data.showPopup) {
          setShowPopup(true)
        }
      })
      .catch(() => {
        if (activeSlugRef.current === slug) navigate('/', { replace: true })
      })
  }, [slug, navigate])

  return (
    <>
      <HomePage />
      {showPopup && <AttributionPopup onClose={() => setShowPopup(false)} />}
    </>
  )
}

export default TrackedLinkPage
