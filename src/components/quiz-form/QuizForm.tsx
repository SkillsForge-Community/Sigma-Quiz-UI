import React from 'react'
import './quizform.css'
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';

type QuizFormProps = {
    title: string,
    description: string,
    date: Date,
    setTitle: (value : string) => void,
    setDescription: (value : string) => void,
    setDate: (value : Date) => void,
}

const QuizForm = ({title, setTitle, description, setDescription, date, setDate} : QuizFormProps) => {

    // --- format date (convert date to string)
    const formatDate = (date: Date): string => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="quiz-form">
            <div className="form-container">
                <div className="form-field">
                    <label htmlFor="">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='2024 Sigma Quiz' className='input-field'/>
                </div>
                <div className="form-field">
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='2024 Roseline Etuokwu Sigma Quiz Competion' rows={4} className='input-field'></textarea>
                </div>

                <div className="form-field">
                    <label htmlFor="">Date</label>
                    <input type="date" value={formatDate(date)} onChange={(e) => setDate(new Date(e.target.value))} className='input-field' />
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
