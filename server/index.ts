import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import path from 'path'
import quizRoutes from './routes/quiz'
import contactRoutes from './routes/contact'
import adminRoutes from './routes/admin'
import linksRoutes from './routes/links'

// override: true — локальный .env должен быть источником истины для PORT.
// Без этого сторонний процесс, уже выставивший PORT в окружении (например,
// dev-тулинг фронтенда), молча переопределяет бэкенд на чужой порт: dotenv
// по умолчанию не трогает уже существующие переменные окружения.
dotenv.config({ override: true })

const app = express()
const PORT = process.env.PORT || 3001

// Railway работает через обратный прокси — без этого req.ip всегда будет
// адресом прокси, и rate-limit логина будет считать всех одним IP.
app.set('trust proxy', 1)

// contentSecurityPolicy отключена: сайт грузит шрифты с fonts.googleapis.com/
// fonts.gstatic.com, и включать CSP без прицельного аудита всех источников —
// риск молча сломать вёрстку в проде. X-Frame-Options: DENY закрывает
// конкретный риск (кликджекинг на кнопке удаления в /admin).
app.use(helmet({ contentSecurityPolicy: false, frameguard: { action: 'deny' } }))

// В проде фронт и бэк всегда на одном origin (Express отдаёт и статику, и API) —
// кросс-origin доступ к API не нужен и не должен быть открыт по умолчанию.
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? false : true,
    credentials: true,
  })
)
app.use(express.json())

// API routes
app.use('/api/quiz', quizRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/links', linksRoutes)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// Serve static files from dist directory in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../dist')
  
  app.use(express.static(distPath))
  
  // All other routes should serve index.html (for client-side routing)
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

