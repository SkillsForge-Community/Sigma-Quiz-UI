import React, { useState } from 'react'
import './addquiz.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import QuizForm from '../quiz-form/QuizForm';
import Success from '../success-page/Success';
const AddQuiz = () => {

  const [added, setAdded] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<Date>(new Date())


  return (
    <div className="add-quiz-container">
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        {!added && <h2>Add Quiz</h2>}
      </header>

      {!added &&
        <>
          <QuizForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate}/>
          <button className="add-quiz-btn" onClick={() => setAdded(true)}>Add Quiz</button>
        </>}

      {added &&
        <Success mode='add'/>
      }

    </div>
  )
}

export default AddQuiz