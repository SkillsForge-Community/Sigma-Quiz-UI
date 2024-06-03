import logo from "../Images/logo.png"
import infor from "../Images/info.png"
import { IoPlayCircleOutline } from "react-icons/io5"
const Homepage=()=>{
return (
    <div className="Home">
        <div className="logos">
        <img src={logo} alt="logo" />
        <div>
        <h4 className="logo-text">Sigma Club</h4>
        <h5 className="logo-text">Since 1950</h5>
        </div>
        </div>
        <div className="homeBlog">
            <div className="title">
            <h1>Sigma Roseline Etuokwu Quiz Competition</h1>
            <h3>Quiz competition involving secondary schools from all over Nigeria. Instilling the spirit of knowledge. Held @ the premier University; University of Ibadan</h3>
        </div>
        <div className="dropdown">
        <label htmlFor="quiz">Select quiz to view</label>
            <select name="quiz" id="quiz">
            <option value="volvo">Volvo</option>
            </select>
            <button>View Quiz</button>
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
                    <button><IoPlayCircleOutline />Play Video</button>
                </div>
            
        </div>
            </div>
        
       
    </div>
    )
}
export default Homepage