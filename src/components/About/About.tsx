import logo from "../Images/logo.svg"
import { IoMdHome } from "react-icons/io";
import "./About.css"
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate()
    return (
        <div className="about">
            <div className="about-navbar">
                <div className="logos">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="logo-texts">
                        <h4 className="logo-text">Sigma Club</h4>
                        <h5 className="logo-text">Since 1950</h5>
                    </div>
                </div>
                <div>
                    <h3 className="back-home" onClick={() => navigate('/')}><IoMdHome /> Back to Home</h3>
                </div>
            </div>
            <div className="Youtube">
                <div className="youTube-title">
                    <img src={logo} className="youTube-logo" alt="logo" />
                    <h4>Sigma club</h4>
                </div>
                <iframe
                    src="https://www.youtube.com/embed/0kChM02MPOU?si=B3ZRQfOQ7dFVKsjx"
                    title="YouTube video player"
                    className="youTube-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                <div className="youTube-content">
                    <h4>What inspired the initiative of the Roseline Etuokwu Sigma National Secondary School Quiz
                        Competition❓Listen to the Sigma Chief as he explains how the idea of the Quiz Competition
                        came to be .
                        See the rest of the Sigma Chief's Interview at the Morning Show on Arise TV
                    </h4>
                    <a className="youTube-Link" href="https://www.youtube.com/watch?v=0kChM02MPOU" target="_blank">https://www.youtube.com/watch?v=0kChM02MPOU</a>

                </div>
            </div>
        </div>
    )
}
export default About