import React from 'react'
import logo from './image/Group 1171275826.png'
import './selectquiz.css'
import { LuPlusCircle } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import AddQuiz from '../Addquiz/AddQuiz';
import EditQuiz from '../Editquiz/EditQuiz';

type selectQuizProps = {
  option: string
}


const SelectQuiz = ({option} : selectQuizProps) => {
const navigate=useNavigate()

  return (
    <div className='select-quiz-page'>

      <div className="select-quiz-container">

        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h3>Select Quiz</h3>
        <p>Select which quiz you choose to operate</p>

        <div className='select-field'>
          <select name="" id="">
            <option value="">2024 Roseline Etuokwu Quiz Competition</option>
          </select>
          <IoIosArrowDown size={30} color='black' className='arrow-down' />
        </div>

        <div className="add-edit-btns">
          <Link to='/add-quiz'>
            <LuPlusCircle size={24} color='#555555' className='icons' />
            Add Quiz
          </Link>
          <Link to='/edit-quiz' className='icons'>
            <GoPencil size={20} color='#555555' />
            Edit Quiz
          </Link>
        </div>

        <div className="get-started-btn">
          <button onClick={()=>{navigate("/users")}}>Get Started</button>
        </div>

        <div className="logout">
          <Link to=''>Log Out</Link>
        </div>

      </div>

      {option === 'add' &&
        <>
          <div className="modal-background"></div>
          <AddQuiz />
        </>}

      {option === 'edit' &&
        <>
          <div className="modal-background"></div>
          <EditQuiz />
        </>}

    </div>
  )
}

export default SelectQuiz
