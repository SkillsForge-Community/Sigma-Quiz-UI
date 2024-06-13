import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";

type successProps = {
    mode: string
}
const Success = ({mode}: successProps) => {
    const navigate = useNavigate();
    return (
        <div className='add-success'>
            <h2>Quiz Successfully {(mode === 'add') && "Added"} {(mode === 'edit') && "Edited"}</h2>
            <FaCheckCircle color={'#1FAF38'} size={150} style={{marginBottom: '20px'}}/>
            <p>You have successfully {(mode === 'add') && "added"} {(mode === 'edit') && "edited"} that quiz</p>
            <button className="finish" onClick={() => navigate('/select-quiz')}>FINISH</button>
        </div>
    )
}

export default Success