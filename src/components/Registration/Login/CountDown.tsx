import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function CountDown(){
    const [timeLeft, setTimeleft]=useState<number>(10)
    const navigate=useNavigate()
    useEffect(()=>{
       const intervalId= setInterval(()=>{
            setTimeleft(prevTime=>prevTime-1)
        },60000)
        if (timeLeft <= 0) {
            navigate('/')
        }
        return () => clearInterval(intervalId);
    },[timeLeft])

    return(
        <>{timeLeft}</>
    )
}
export default CountDown