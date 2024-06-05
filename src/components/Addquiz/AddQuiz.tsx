import React, { useState } from 'react'
import './addquiz.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import successImg from './image/teenyicons_tick-circle-solid.png'

const AddQuiz = () => {

  const [added, setAdded] = useState<boolean>(false);

  const navigate = useNavigate();

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
          <div className="add-quiz-body">
            <div className="form">
              <div className="form-field">
                <label htmlFor="">Title</label>
                <input type="text" placeholder='2024 Sigma Quiz' />
              </div>
              <div className="form-field">
                <label htmlFor="">Description</label>
                <textarea name="" id="" placeholder='2024 Roseline Etuokwu Sigma Quiz Competion' rows={4}></textarea>
              </div>
              <div className="form-field">
                <label htmlFor="">Date</label>
                <input type="text" placeholder='05   /   11   /   2024' />
              </div>
            </div>

            <div className="review-section">
              <h3>Review</h3>
              <div className="review-container">
                <div className="review-row">
                  <span>Title</span>
                  <span>2024 Sigma Quiz</span>
                </div>

                <div className="review-row">
                  <span>Description</span>
                  <span>2024 Roseline Etuokwu Sigma Quiz Competition </span>
                </div>

                <div className="review-row">
                  <span>Date</span>
                  <span>2024 - 05 - 30</span>
                </div>
              </div>
            </div>

          </div>

          <button className="add-quiz-btn" onClick={() => setAdded(true)}>
            Add Quiz
          </button>
        </>}

      {added &&
        <div className='add-success'>
          <h2>Quiz Successfully Added</h2>
          <img src={successImg} alt="" />
          <p>You have successfully added that quiz</p>
          <button className="finish" onClick={() => navigate('/select-quiz')}>
            FINISH
          </button>
        </div>
      }

    </div>
  )
}

export default AddQuiz