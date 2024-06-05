import React, { useState } from 'react'
import './editquiz.css'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import QuizCard from '../quiz-card/QuizCard';

type quizListType = {
  title: string,
  description: string,
}[]
const EditQuiz = () => {

  const [quizList, setQuizList] = useState<quizListType>([
    {
      title: '2024 Roseline Etuokwu Sigma Quiz Competition',
      description: '---'
    },
    {
      title: '2024 Roseline Etuokwu Sigma Quiz Competition',
      description: '---'
    },
    {
      title: '2024 Roseline Etuokwu Sigma Quiz Competition',
      description: '---'
    },
    {
      title: '2024 Roseline Etuokwu Sigma Quiz Competition',
      description: '---'
    },
    {
      title: '2024 Roseline Etuokwu Sigma Quiz Competition',
      description: '---'
    },
    {
      title: '2024 Roseline Etuokwu Sigma Quiz Competition',
      description: '---'
    },
    {
      title: '2024 Roseline Etuokwu Sigma Quiz Competition',
      description: '---'
    },
  ])

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="edit-quiz-container">
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        <h2>Edit Quiz</h2>
      </header>
      <div className="edit-quiz-body">
        <h3>Quiz</h3>
        <div className="quiz-list">
          {quizList.map((quiz, index) => (
            <QuizCard quiz={quiz} key={index} index={index} setActiveIndex={setActiveIndex} isActive={activeIndex === index} />
        ))}
        </div>
        <button className="edit">Edit Quiz</button>

      </div>
    </div>
  )
}

export default EditQuiz