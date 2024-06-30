import { useState } from 'react'
import './styles.css'; 
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import QuizForm from '../quiz-form/QuizForm';
import SuccessModal from '../../../Global Components/Modals/SuccessModal/SuccessModal';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';

type AddQuizProps = {
  fetchQuiz: () => void
}

const AddQuiz = ({fetchQuiz} : AddQuizProps) => {

  const [addQuizPage, setAddQuizPage] = useState<number>(1);
  const [title, setTitle ] = useState('');
  const [description, setDescription ] = useState('');
  const [date , setDate ] = useState(new Date());

  // -- state variables for create quiz endpoint --
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [data, setData] = useState<null>(null);
  const [isDataEmpty, setIsDataEmpty] = useState<boolean>(false);

  // --- get bearer token from the local storage
  const token = localStorage.getItem("token")

  // -- call function when the add quiz button is clicked --
  const handleAddQuiz = async() => {
    if (title === "") {
      setErrorMsg('Quiz Title is required');
      return;
    } else if (description === '') {
      setErrorMsg('Quiz Description is required');
      return;
    }

    setErrorMsg(null);

    setLoading(true);
    try {
      const response = await axios.post('https://sigma-website-backend-51b4af465e71.herokuapp.com/api/sigma-quiz', {
          date, 
          title, 
          description
        },
        {
          headers: {
          'Authorization': `Bearer ${token}`
        },
      });

      // -- set the states to the appropriate value --
      setData(response.data);
      setIsDataEmpty(false);
      setErrorMsg(null);
      setLoading(false);
      setAddQuizPage(2);
      fetchQuiz();
    } catch(error : any){
      if (error.message === "Network Error"){
        setErrorMsg('Network Error')
      } else if (error.message === "Request failed with status code 409"){
        setErrorMsg("Date has already been taken")
      } else if (error.message === "Request failed with status code 400"){
        setErrorMsg("Invalid Date")
      } else {
        setErrorMsg(error.message);
      }
      setLoading(false);
      console.log(error)
    }
  }

  return (
    <div className="add-quiz-container">

      {/* HEADING  */}
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        {(addQuizPage === 1) && <h2>Add Quiz</h2>}
      </header>

      {/* FORM TO ADD QUIZ */}
      {(addQuizPage === 1) &&
        <>
          {errorMsg && <p className='error-msg'>{errorMsg}</p>}
          <QuizForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate}/>
          <button className="add-quiz-btn" onClick={handleAddQuiz} disabled={loading}>
            {loading && <Spinner size={'sm'} mr={'10px'} />}
            Add Quiz
          </button>
        </>}

      {/* SUCCESS */}
      {(addQuizPage === 2) &&
        <SuccessModal heading='Quiz Successfully Added' message='You have successfully added that quiz' navigateTo='/select-quiz'/>

      }

    </div>
  )
}

export default AddQuiz