import React, { Suspense, lazy } from 'react';
import logo from "../Images/logo.svg";
import { IoMdHome } from "react-icons/io";
import "./About.css";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Spinner } from '@chakra-ui/react';

const YouTubeVideo = lazy(() => import('./YouTubeVideo'));

function About() {
    const navigate = useNavigate();
    return (
        <div className="about">
            <div className="about-navbar">
                <Logo />
                <div>
                    <h3 className="back-home" onClick={() => navigate('/')}><IoMdHome /> Back to Home</h3>
                </div>
            </div>
            <div className="Youtube">
                <div className="youTube-title">
                    <img src={logo} className="youTube-logo" alt="logo" />
                    <h4>Sigma club</h4>
                </div>
                <Suspense fallback={
                    <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    style={{position:"absolute", margin: "0 auto"}}
                    />}
                >
                    <YouTubeVideo />
                </Suspense>
                <div className="youTube-content">
                    <h4>What inspired the initiative of the Roseline Etuokwu Sigma National Secondary School Quiz
                        Competition❓Listen to the Sigma Chief as he explains how the idea of the Quiz Competition
                        came to be.
                        See the rest of the Sigma Chief's Interview at the Morning Show on Arise TV
                    </h4>
                    <a className="youTube-Link" href="https://www.youtube.com/watch?v=0kChM02MPOU" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=0kChM02MPOU</a>
                </div>
            </div>
        </div>
    );
}

export default About;
