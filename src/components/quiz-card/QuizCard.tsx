import React from 'react'
import './quizcard.css'

type quizCardProps = {
    quiz: {
        title: string,
        description: string
    }
    index: number,
    setselectedQuizIndex: (index: number) => void, 
    isActive: boolean
}
const QuizCard = ({quiz, index, setselectedQuizIndex, isActive}: quizCardProps) => {
  return (
    <div className={`quizCard ${(isActive)? 'active' : ''}`} onClick={() => setselectedQuizIndex(index)} >
        <span>{quiz.title}</span>
    </div>
  )
}

export default QuizCard