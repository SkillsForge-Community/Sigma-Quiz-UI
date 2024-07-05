import logo from '../../assets/Images/logo.png'
import "./styles.css"
import { LuPlusCircle } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import AddQuiz from './Addquiz/Index';
import EditQuiz from './Editquiz/EditQuiz';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Quiz = {
  id: string
  year: number
  title: string
  description: string | null
  date: string
}

type selectQuizProps = {
  option: string
  quiz?: Quiz
}

const SelectQuiz = ({option} : selectQuizProps) => {
  const [quizList, setQuizList] = useState<Quiz[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [err, setErr] = useState<string>("")
  const navigate=useNavigate()

  const getQuiz = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get("https://sigma-website-backend.onrender.com/api/sigma-quiz")
      setIsLoading(false)
      setQuizList(res.data)
      console.log(res)
    } catch (error) {
      setIsLoading(false)
      if (axios.isAxiosError(error)) {
        setErr(error.message)
      } else {
        setErr("Error fetching quizzes. Please try again")
      }
    }
  }

  useEffect(() =>{
    getQuiz()
  }, [])

  return (
    <div className="select-quiz-page">
      <div className="select-quiz-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h3>Select Quiz</h3>
        <p>Select which quiz you choose to operate</p>

        <div className="select-field">
          <select >
            {isLoading? <option>Loading...</option>: err? <option>{err}</option>:  quizList?.map((quiz, index) => ( <option key={index}>{quiz.title}</option> ))}
          </select> 
          <IoIosArrowDown size={30} color="black" className="arrow-down"/>
        </div>

        <div className="add-edit-btns">
          <Link to="/add-quiz">
            <LuPlusCircle size={24} color="#555555" className="icons" />
            Add Quiz
          </Link>
          <Link to="/edit-quiz" className="icons">
            <GoPencil size={20} color="#555555" />
            Edit Quiz
          </Link>
        </div>

        <div className="get-started-btn">
          <button onClick={() => navigate("/AddSchool")}>Get Started</button>
        </div>
        <div className="logout">
          <Link to="">Log Out</Link>
        </div>
      </div>
      {option === "add" && (
        <>
          <div className="modal-background"></div>
          <AddQuiz />
        </>
      )}

      {option === "edit" && (
        <>
          <div className="modal-background"></div>
          <EditQuiz />
        </>
      )}
    </div>
  );
}

export default SelectQuiz
