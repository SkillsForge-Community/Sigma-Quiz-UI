import React, { useState } from 'react'
import './editquiz.css'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import QuizCard from '../quiz-card/QuizCard';
import QuizForm from '../quiz-form/QuizForm';
import Success from '../success-page/Success';

type quizListType = {
  title: string,
  description: string,
}[]
const EditQuiz = () => {

  const [editQuizPage, setEditQuizPage] = useState<number>(1)
  const [activeQuizIndex, setActiveQuizIndex] = useState<number | null>(null);
  // form states 
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  // quiz list
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

  return (
    <div className="edit-quiz-container">
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        {(editQuizPage !== 3) && <h2>Edit Quiz</h2>}
      </header>

      {(editQuizPage === 1) && <div className="edit-quiz-form">
        <h3>Quiz</h3>
        <div className="quiz-list">
          {quizList.map((quiz, index) => (
            <QuizCard quiz={quiz} key={index} index={index} setActiveIndex={setActiveQuizIndex} isActive={activeQuizIndex === index} />
          ))}
        </div>
        <button className="edit" onClick={() => setEditQuizPage(2)}>Edit Quiz</button>
      </div>}

      {(editQuizPage === 2) && 
        <div style={{marginTop: '20px'}}>
          <QuizForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate}/>
          <button className="add-quiz-btn" onClick={() => setEditQuizPage(3)}>Add Quiz</button>
        </div>
      }

      {(editQuizPage === 3) && 
        <div style={{marginTop: '50px'}}>
          <Success mode='edit'/>
        </div>
      }
      
    </div>
  )
}

export default EditQuiz