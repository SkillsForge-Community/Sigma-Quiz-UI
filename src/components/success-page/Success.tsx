import React from 'react'
import successImg from './image/teenyicons_tick-circle-solid.png'
import { useNavigate } from 'react-router-dom'

type successProps = {
    mode: string
}
const Success = ({mode}: successProps) => {
    const navigate = useNavigate();
    return (
        <div className='add-success'>
            <h2>Quiz Successfully {(mode === 'add') && "Added"} {(mode === 'edit') && "Edited"}</h2>
            <img src={successImg} alt="" />
            <p>You have successfully {(mode === 'add') && "added"} {(mode === 'edit') && "edited"} that quiz</p>
            <button className="finish" onClick={() => navigate('/select-quiz')}>FINISH</button>
        </div>
    )
}

export default Success