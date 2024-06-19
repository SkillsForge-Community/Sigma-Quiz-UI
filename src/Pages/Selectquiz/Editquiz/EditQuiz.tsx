import { useEffect, useState } from 'react'
import './editquiz.css'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import QuizCard from '../quiz-card/QuizCard';
import QuizForm from '../quiz-form/QuizForm';
import SuccessModal from '../../../Global Components/Modals/SuccessModal/SuccessModal';
import axios from "axios";



type quizListType = {
  id?: string,
  title: string,
  description: string | null,
  year?: number,
  date?: string
}[]
const EditQuiz = () => {
  
  const [editQuizPage, setEditQuizPage] = useState<number>(1)
  const [selectedQuizIndex, setselectedQuizIndex] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null> (null);
  // form states 
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const getQuizList = () => {
      axios.get("https://sigma-website-backend-51b4af465e71.herokuapp.com/api/sigma-quiz/school").then(res => {
        console.log(res.data.content)
      }).catch(err => {
        console.log(err)
      })
    }

    getQuizList()
  }, [])

  const [quizList, /* setQuizList */] = useState<quizListType>([
      {
        "id": "2cd1bcf2-e621-49af-aa89-9e21a05759a2",
        "year": 2024,
        "title": "2024 Sigma Quiz",
        "description": null,
        "date": "2024-05-29"
      },
      {
        "id": "ba2bc247-5481-4c20-bcf1-76fbefe8461a",
        "year": 2024,
        "title": "2024 Sigma Quiz",
        "description": "2024 Roseline Etuoku Quiz Competition",
        "date": "2024-05-30"
      }
    // {
    //   title: '2024 Roseline Etuokwu Sigma Quiz Competition',
    //   description: '---'
    // }
  ])

  // fire when the first page edit button is clicked
  const handleSelectQuiz = () => {
      if (selectedQuizIndex !== null){
        setEditQuizPage(2);
        setErrorMsg(null);
      } else {
        setErrorMsg('Select a quiz to edit');
      }
  }

  // fire when the second page quiz button is clicked
  const handleEditQuiz = () => {
    if (title === ""){
      setErrorMsg('Quiz Title is required');
      return;
    } else if (description === ''){
      setErrorMsg('Quiz Description is required');
      return;
    }
    setEditQuizPage(3);
    setErrorMsg(null)
  }

  return (
    <div className="edit-quiz-container">
      <header>
        <Link className="back" to='/select-quiz'>
          <IoIosArrowBack />
          Back
        </Link>
        {(editQuizPage !== 3) && <h2>Edit Quiz</h2>}
      </header>

      {/* first page  */}
      {(editQuizPage === 1) && <div className="edit-quiz-form">
        {errorMsg && <p className='error-msg'>{errorMsg}</p>}
        <h3>Quiz</h3>
        <div className="quiz-list">
          {quizList.map((quiz, index) => (
            <QuizCard quiz={quiz} key={index} index={index} setselectedQuizIndex={setselectedQuizIndex} isActive={selectedQuizIndex === index} />
          ))}
        </div>

        <button className="edit" onClick={handleSelectQuiz}>Edit Quiz</button>
      </div>}

      {/* second page  */}
      {(editQuizPage === 2) && 
        <div style={{marginTop: '20px'}}>
          {errorMsg && <p className='error-msg'>{errorMsg}</p>}
          <QuizForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate}/>
          <button className="add-quiz-btn" onClick={handleEditQuiz}>Edit Quiz</button>
        </div>
      }

      {/* third page  */}
      {(editQuizPage === 3) && 
        <SuccessModal heading='Quiz Successfully Edited' message='You have successfully edited that quiz' navigateTo='/select-quiz'/>
      }
      
    </div>
  )
}

export default EditQuiz
