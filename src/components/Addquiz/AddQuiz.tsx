import React from 'react'
import './addquiz.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const AddQuiz = () => {
  return (
    <div className="add-quiz-container">
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        <h2>Add Quiz</h2>
      </header>
      <div className="form">
        <div className="form-field">
          <label htmlFor="">Title</label>
          <input type="text" defaultValue={'2024 Sigma Quiz'}/>
        </div>
        <div className="form-field">
          <label htmlFor="">Description</label>
          <textarea name="" id="" defaultValue={'Type here'}></textarea>
        </div>
        <div className="form-field">
          <label htmlFor="">Date</label>
          <input type="text" defaultValue={'2024 Sigma Quiz'}/>
        </div>
      </div>
    </div>
  )
}

export default AddQuiz