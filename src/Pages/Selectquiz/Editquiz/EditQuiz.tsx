import { useEffect, useState } from 'react'
import './editquiz.css'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import QuizCard from '../quiz-card/QuizCard';
import QuizForm from '../quiz-form/QuizForm';
import SuccessModal from '../../../Global Components/Modals/SuccessModal/SuccessModal';
import axios from "axios";
import { Spinner } from '@chakra-ui/react';


// -- define type for each quiz object --
type QuizType = {
  id: string,
  year: number,
  title: string,
  description: string,
  date: string
}

const EditQuiz = () => {

  const token = localStorage.getItem('token');

  const [editQuizPage, setEditQuizPage] = useState<number>(1)
  const [selectedQuizIndex, setselectedQuizIndex] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // form states 
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());

  // -- states for api integration
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<QuizType[] | null>(null);
  const [isDataEmpty, setIsDataEmpty] = useState<boolean>(false);

  useEffect(() => {
    // -- call fetch quiz function --
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
        setIsDataEmpty(false);
        setError(null);
      }
    } catch (error: any) {
      setError(error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };


  // -- call when a quiz to be edited is chosen and the button is clicked
  const handleSelectQuiz = () => {
    if (selectedQuizIndex !== null) {
      if (data) {
        const selectedQuiz: QuizType = (data[selectedQuizIndex]);

        setTitle(selectedQuiz.title);
        setDescription(selectedQuiz.description);
        setDate(new Date(selectedQuiz.date));

      }
      setEditQuizPage(2);
      setErrorMsg(null);
    } else {
      setErrorMsg('Select a quiz to edit');
    }
  }

  // -- call when the edit quiz button is clicked
  const handleEditQuiz = async () => {
    if (title === "") {
      setErrorMsg('Quiz Title is required');
      return;
    } else if (description === '') {
      setErrorMsg('Quiz Description is required');
      return;
    }

    if (data && selectedQuizIndex) {
      const selectedQuiz: QuizType = (data[selectedQuizIndex]);
      const selectedQuizID: string = selectedQuiz.id;
      

      setLoading(true);
      try {
        const response = await axios.put(`https://sigma-website-backend-51b4af465e71.herokuapp.com/api/sigma-quiz/${selectedQuizID}`, {
          title,
          description,
          date
        },
          {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          });

        // -- set the states to the appropriate value --
        setErrorMsg(null);
        setEditQuizPage(3);
        // fetchQuiz();
      } catch (error: any) {
        setErrorMsg(error.message);
        console.log(error)
      } finally{
        setLoading(false);
      }

    }
  }

  return (
    <div className="edit-quiz-container">

      {/* HEADING  */}
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        {(editQuizPage !== 3) && <h2>Edit Quiz</h2>}
      </header>

      {/* SELECT QUIZ TO EDIT  */}
      {(editQuizPage === 1) && <div className="edit-quiz-form">
        {errorMsg && <p className='error-msg'>{errorMsg}</p>}
        <h3>Quiz</h3>
        <div className="quiz-list">
          {loading && <><Spinner size={'sm'} mr={'10px'} />Loading...</>}
          {data?.map((quiz, index) => (
            <QuizCard quiz={quiz} key={index} index={index} setselectedQuizIndex={setselectedQuizIndex} isActive={selectedQuizIndex === index} />
          ))}
        </div>

        <button className="edit" onClick={handleSelectQuiz}>Edit Quiz</button>
      </div>}

      {/* FORM TO EDIT QUIZ  */}
      {(editQuizPage === 2) &&
        <div style={{ marginTop: '20px' }}>
          {errorMsg && <p className='error-msg'>{errorMsg}</p>}
          <QuizForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate} />
          <button className="add-quiz-btn" onClick={handleEditQuiz} disabled={loading}>
            {loading && <Spinner bg={'yellow'} size={'sm'} mr={'10px'}/>}
            Edit Quiz</button>
        </div>
      }

      {/* SUCCESS */}
      {(editQuizPage === 3) &&
        <SuccessModal heading='Quiz Successfully Edited' message='You have successfully edited that quiz' navigateTo='/select-quiz' />
      }

    </div>
  )
}

export default EditQuiz
