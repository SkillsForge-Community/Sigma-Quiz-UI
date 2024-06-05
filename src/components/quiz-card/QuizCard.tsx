import React from 'react'
import './quizcard.css'

type quizCardProps = {
    quiz: {
        title: string,
        description: string
    }
    index: number,
    setActiveIndex: (index: number) => void, 
    isActive: boolean
}
const QuizCard = ({quiz, index, setActiveIndex, isActive}: quizCardProps) => {
  return (
    <div className={`quizCard ${(isActive)? 'active' : ''}`} onClick={() => setActiveIndex(index)} >
        <span>{quiz.title}</span>
    </div>
  )
}

export default QuizCard