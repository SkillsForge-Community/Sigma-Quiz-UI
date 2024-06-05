import React from 'react'
import './editquiz.css'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

const EditQuiz = () => {
  return (
    <div className="edit-quiz-container">
        <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
         <h2>Edit Quiz</h2>
      </header>
    </div>
  )
}

export default EditQuiz