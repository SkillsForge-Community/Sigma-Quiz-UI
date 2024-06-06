import React, { useState } from 'react'
import './addquiz.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import QuizForm from '../quiz-form/QuizForm';
import Success from '../success-page/Success';
const AddQuiz = () => {

  const [addQuizPage, setAddQuizPage] = useState<number>(1);
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<Date>(new Date())
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // fire when the add quiz button is clicked 
  const handleAddQuiz = () => {
    if (title === ""){
      setErrorMsg('Quiz Title is required');
      return;
    } else if (description === ''){
      setErrorMsg('Quiz Description is required');
      return;
    }
    setAddQuizPage(2);
    setErrorMsg(null);
  }

  return (
    <div className="add-quiz-container">
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        {(addQuizPage === 1) && <h2>Add Quiz</h2>}
      </header>

      {/* first page */}
      {(addQuizPage === 1) &&
        <>
          {errorMsg && <p className='error-msg'>{errorMsg}</p>}
          <QuizForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate}/>
          <button className="add-quiz-btn" onClick={handleAddQuiz}>Add Quiz</button>
        </>}

      {/* second page */}
      {(addQuizPage === 2) &&
        <Success mode='add'/>
      }

    </div>
  )
}

export default AddQuiz