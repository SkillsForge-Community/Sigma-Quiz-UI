import logo from "./Images/logo.svg"
import infor from "../Images/info.png"
import { IoPlayCircleOutline } from "react-icons/io5"
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Homepage.css"
const Homepage = () => {
    const navigate=useNavigate()
    return (
        <div className="Home">
            <div className="logos">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="title">
                <h1>Sigma Roseline Etuokwu Quiz Competition</h1>
                <h3>Quiz competition involving secondary schools from all over Nigeria. Instilling the spirit of knowledge. Held @ the premier University; University of Ibadan</h3>
            </div>
            <div className="dropdown">
                <button className="dropdown-menu">
                    <h5>Select quiz to view</h5>
                    <MdKeyboardArrowDown />
                </button>
                <button className="submit" type="submit">View Quiz</button>
            </div>
            <div className="quizes">
                <h4>2024 Quiz</h4>
                <h4>2023 Quiz</h4>
                <h4>2022 Quiz</h4>
            </div>
            <div className="video">
                <div className="video-main">
                    <div className="img-info">
                        <img src={infor} alt="" />
                    </div>
                    <div className="info-text">
                        <h3>Watch our documentary on the Quiz Competition</h3>
                        <p>Sigma Club</p>
                    </div>
                </div>

                <div className="info-button">
                    <button onClick={()=>navigate("/About")}><IoPlayCircleOutline />Play Video</button>
                </div>

            </div>



        </div>
    )
}
export default Homepage