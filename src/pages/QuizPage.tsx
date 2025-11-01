import React, { useState } from 'react'
import Quiz from '../components/Quiz'
import './QuizPage.css'

const QuizPage: React.FC = () => {
  return (
    <div className="quiz-page">
      <div className="container">
        <Quiz />
      </div>
    </div>
  )
}

export default QuizPage

