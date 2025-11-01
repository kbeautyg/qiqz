import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import quizRoutes from './routes/quiz'
import contactRoutes from './routes/contact'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// API routes
app.use('/api/quiz', quizRoutes)
app.use('/api/contact', contactRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Serve static files from dist directory in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../dist')
  
  app.use(express.static(distPath))
  
  // All other routes should serve index.html (for client-side routing)
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

