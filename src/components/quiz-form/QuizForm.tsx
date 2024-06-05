import React from 'react'
import './quizform.css'

type QuizFormProps = {
    title: string,
    description: string,
    date: Date,
    setTitle: (value : string) => void,
    setDescription: (value : string) => void,
    setDate: (value : Date) => void,
}

const QuizForm = ({title, setTitle, description, setDescription, date, setDate} : QuizFormProps) => {


    return (
        <div className="quiz-form">
            <div className="form">
                <div className="form-field">
                    <label htmlFor="">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='2024 Sigma Quiz' />
                </div>
                <div className="form-field">
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='2024 Roseline Etuokwu Sigma Quiz Competion' rows={4}></textarea>
                </div>
                <div className="form-field">
                    <label htmlFor="">Date</label>
                    <input type="date" name="" id="" placeholder='05   /   11   /   2024'/>
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
    )
}

export default QuizForm
