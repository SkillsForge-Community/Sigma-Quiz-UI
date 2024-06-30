import logo from '../../assets/Images/logo.png'
import "./styles.css"
import { LuPlusCircle } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import AddQuiz from './Addquiz/Index';
import EditQuiz from './Editquiz/EditQuiz';
import { useEffect, useState } from 'react';
import axios from 'axios';

// -- define types for props --
type selectQuizProps = {
  option: string
}

// -- define type for each quiz object --
type QuizType = {
  id: string,
  year: number,
  title: string,
  description: string,
  date: string
}

const SelectQuiz = ({ option }: selectQuizProps) => {
  const navigate = useNavigate();

  // -- states for api integration
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<QuizType[] | null>(null);
  const [isDataEmpty, setIsDataEmpty] = useState<boolean>(false);

  useEffect(() => {
    // -- call fetch function when the page loads --
    fetchQuiz();

  }, [])

  // -- function to fetch the list of quiz --
  const fetchQuiz = async () => {
    setLoading(true);
    const token: string | null = localStorage.getItem('token');

    try {

      const response = await axios.get('https://sigma-website-backend-51b4af465e71.herokuapp.com/api/sigma-quiz', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      // -- check if response is empty or not
      if (response.data.length === 0) {
        setIsDataEmpty(true);
      } else {
        setData(response.data);
        console.log(response.data)
        setIsDataEmpty(false);
        setError(null);
      }
    } catch (error: any) {
      setError(error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="select-quiz-page">
      <div className="select-quiz-container">

        {/* QUIZ LOGO  */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* QUIZ HEADING  */}
        <h3>Select Quiz</h3>
        <p>Select which quiz you choose to operate</p>

        {/* SELECT FIELD */}
        <div className="select-field">
          <select name="" id="">
            {loading && <option>Loading...</option>}
            {data?.map((quiz, index) => (
              <option key={index}>{quiz.title}</option>
            ))}
          </select>
          <IoIosArrowDown size={30} color="black" className="arrow-down" />
        </div>

        {/* DISPLAY ERROR MESSAGE */}
        {(!loading && error) && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        {isDataEmpty && <p style={{ marginTop: '10px' }}>no quiz available</p>}

        {/* ADD AND EDIT BUTTONS  */}
        <div className="add-edit-btns">
          <Link to="/add-quiz">
            <LuPlusCircle size={24} color="#555555" className="icons" />Add Quiz
          </Link>
          <Link to="/edit-quiz" className="icons">
            <GoPencil size={20} color="#555555" />Edit Quiz
          </Link>
        </div>

        {/* GET STARTED BUTTON  */}
        <div className="get-started-btn">
          <button onClick={() => navigate("/AddSchool")}>Get Started</button>
        </div>

        {/* LOGOUT BUTTON  */}
        <div className="logout">
          <Link to="">Log Out</Link>
        </div>
      </div>

      {/* ADD QUIZ MODAL  */}
      {option === "add" && (
        <>
          <div className="modal-background"></div>
          <AddQuiz fetchQuiz={fetchQuiz}/>
        </>
      )}

      {/* EDIT QUIZ MODAL  */}
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
