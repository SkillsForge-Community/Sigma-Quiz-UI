import { useState } from 'react'
import './styles.css'; 
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import QuizForm from '../quiz-form/QuizForm';
import SuccessModal from '../../../Global Components/Modals/SuccessModal/SuccessModal';
import axios from 'axios';

const AddQuiz = () => {

  const [addQuizPage, setAddQuizPage] = useState<number>(1);
  const [title, setTitle ] = useState('');
  const [description, setDescription ] = useState('');
  const [date , setDate ] = useState(new Date());
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // -- state variables for create quiz endpoint --
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
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

      setData(response.data);
      console.log(response.data);
      setAddQuizPage(2);

    } catch(error : any){
      setError(error.message);
      console.log(error)
    }

    
    setErrorMsg(null);
  }

  return (
    <div className="add-quiz-container">
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        {(addQuizPage === 1) && <h2>Add Quiz</h2>}
      </header>

      {/* first page */}
      {(addQuizPage === 1) &&
        <>
          {errorMsg && <p className='error-msg'>{errorMsg}</p>}
          <QuizForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate}/>
          <button className="add-quiz-btn" onClick={handleAddQuiz}>Add Quiz</button>
        </>}

      {/* second page */}
      {(addQuizPage === 2) &&
        <SuccessModal heading='Quiz Successfully Added' message='You have successfully added that quiz' navigateTo='/select-quiz'/>

      }

    </div>
  )
}

export default AddQuiz