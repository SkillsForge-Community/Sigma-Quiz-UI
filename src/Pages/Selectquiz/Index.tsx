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
import { Text } from '@chakra-ui/react';

type selectQuizProps = {
  option: string
}

type QuizListType = {
  id: string, 
  year: number, 
  title: string, 
  description: string,
  date: string
}

const SelectQuiz = ({option} : selectQuizProps) => {
  const navigate = useNavigate();

  // -- fetching data states
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<QuizListType[] | null>(null);
  const [isDataEmpty, setIsDataEmpty] = useState<boolean>(false);

  useEffect(() => {

    // -- function to fetch the list of quiz --
    const fetchQuiz = async() => {
        setLoading(true);

        try {
          const response = await axios.get('https://sigma-website-backend-51b4af465e71.herokuapp.com/api/sigma-quiz', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZUB5YW5qdS5jb20iLCJ1c2VyX2lkIjoiOTJlNWUxNmEtMjE5Zi00Mzk4LTlmYTQtMDBlMThiNTA3MjJlIiwiZW1haWwiOiJhZGVAeWFuanUuY29tIiwiaWF0IjoxNzE2NDc4ODQyLCJleHAiOjE3MTY3MzgwNDJ9.f89ADwqIzJbxlR2TMOsy68RI5pJnhLcCQvlhmkpc8Rg',
            },
          });

          if (response.data.length === 0){
            setIsDataEmpty(true);
          } else {
            setData(response.data);
            setIsDataEmpty(false);
          }
        } catch (error : any) {
          setError(error.message || 'Unknown error');
        } finally {
          setLoading(false);
        }
      };

    // -- call fetch function --
    fetchQuiz();

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
          <select name="" id="">
            {loading && <option>Loading...</option>}
            {data?.map((quiz, index) => (
              <option>{quiz.title}</option>
            ))}
            </select>
          <IoIosArrowDown size={30} color="black" className="arrow-down" />
        </div>
        {error && <p>{error}</p>}
        {isDataEmpty && <Text>no quiz available</Text>}

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
