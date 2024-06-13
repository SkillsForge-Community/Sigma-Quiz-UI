import React, { useState } from 'react'
import './editquiz.css'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import QuizCard from '../quiz-card/QuizCard';
import QuizForm from '../quiz-form/QuizForm';
import Success from '../../../Global Components/Modals/success-page/Success';

type quizListType = {
  title: string,
  description: string,
}[]
const EditQuiz = () => {

  const [editQuizPage, setEditQuizPage] = useState<number>(1)
  const [selectedQuizIndex, setselectedQuizIndex] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null> (null);
  // form states 
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [quizList, /* setQuizList */] = useState<quizListType>([
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

  // fire when the first page edit button is clicked
  const handleSelectQuiz = () => {
      if (selectedQuizIndex !== null){
        setEditQuizPage(2);
        setErrorMsg(null);
      } else {
        setErrorMsg('Select a quiz to edit');
      }
  }

  // fire when the second page quiz button is clicked
  const handleEditQuiz = () => {
    if (title === ""){
      setErrorMsg('Quiz Title is required');
      return;
    } else if (description === ''){
      setErrorMsg('Quiz Description is required');
      return;
    }
    setEditQuizPage(3);
    setErrorMsg(null)
  }

  return (
    <div className="edit-quiz-container">
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        {(editQuizPage !== 3) && <h2>Edit Quiz</h2>}
      </header>

      {/* first page  */}
      {(editQuizPage === 1) && <div className="edit-quiz-form">
        {errorMsg && <p className='error-msg'>{errorMsg}</p>}
        <h3>Quiz</h3>
        <div className="quiz-list">
          {quizList.map((quiz, index) => (
            <QuizCard quiz={quiz} key={index} index={index} setselectedQuizIndex={setselectedQuizIndex} isActive={selectedQuizIndex === index} />
          ))}
        </div>

        <button className="edit" onClick={handleSelectQuiz}>Edit Quiz</button>
      </div>}

      {/* second page  */}
      {(editQuizPage === 2) && 
        <div style={{marginTop: '20px'}}>
          {errorMsg && <p className='error-msg'>{errorMsg}</p>}
          <QuizForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate}/>
          <button className="add-quiz-btn" onClick={handleEditQuiz}>Edit Quiz</button>
        </div>
      }

      {/* third page  */}
      {(editQuizPage === 3) && 
        <div style={{marginTop: '50px'}}>
          <Success mode='edit'/>
        </div>
      }
      
    </div>
  )
}

export default EditQuiz
