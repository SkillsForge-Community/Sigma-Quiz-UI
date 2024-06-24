import logo from '../../assets/Images/logo.png'
import "./styles.css"
import { LuPlusCircle } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import AddQuiz from './Addquiz/Index';
import EditQuiz from './Editquiz/EditQuiz';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { AppConstants } from '../../Global Components/AppConstants/AppConstants';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';
import { setQuizId } from '../../features/quizIdSlice';
import { Select, useToast } from '@chakra-ui/react';
import { logout } from '../../features/AuthSlice';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
type selectQuizProps = {
  option: string
}
type quizType = {
  id?: string;
  year?: number;
  title?: string;
  description?: string;
  date?: string;
};
const SelectQuiz = ({ option }: selectQuizProps) => {
  const toast=useToast()
  const navigate = useNavigate()
  const [quizes, setQuizes] = useState<quizType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [quizIds, setQuizIds] = useState<string>("")
  const dispatch = useAppDispatch()
  const quizId = useAppSelector(state => state.getID.quizId)
  useEffect(() => {
    if(quizIds){
      dispatch(setQuizId(quizIds))
    }
  }, [dispatch, quizIds])
  useEffect(() => {
    const getAllQuizzes = () => {
      setIsLoading(true);
      axios
        .get(
          `${AppConstants.baseUrl}/sigma-quiz`
        )
        .then((res) => {
          setQuizes(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError("Error Fetching Quizes. Try Again");
          setIsLoading(false);
        });
    };
    getAllQuizzes();
  }, [setQuizes]);
  const reversedQuizzes = useMemo(() => {
    return quizes.slice().reverse();
  }, [quizes])
  const handleQuizChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQuizId = event.target.value;
    setQuizIds(selectedQuizId);
  };
  function handleSubAdmin(){
    if(quizIds){
      navigate(`/subadmin/${quizId}`)
    }else{
      toast({
        variant: "none",
        title: `Select a quiz`,
        position: "top",
        isClosable: true,
        containerStyle: {
          backgroundColor: "red.500",
          color: "white"
        }
      });
    }
    
  }
  function handleLogOut(){
    dispatch(logout())
    navigate("/")
  }
  return (
    <div className="select-quiz-page">
      <div className="select-quiz-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h3>Select Quiz</h3>
        <p>Select which quiz you choose to operate</p>

        <div className="select-field">
        <Select
          borderRadius="45px"
          icon={<MdOutlineKeyboardArrowDown color="red" />}
          className="dropdown"
          height="90px"
          bg="white"
          placeholder="Select a quiz"
          onChange={handleQuizChange}
        >
          {isLoading ? (
            <option>Loading...</option>
          ) : error ? (
            <option>{error}</option>
          ) : quizes?.length > 0 ? (
            reversedQuizzes.map((quiz: quizType) => (
              <option key={quiz.id} value={quiz.id}>
                {quiz.title}
              </option>
            ))
          ) : (
            <option>No data found</option>
          )}
        </Select>
          <IoIosArrowDown size={30} color="black" className="arrow-down" />
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
          <button onClick={handleSubAdmin}>Get Started</button>
        </div>
        <div className="logout">
          <Link to="/" onClick={handleLogOut}>Log Out</Link>
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
