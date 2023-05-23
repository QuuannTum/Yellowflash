import React from 'react';
import './Landing.css';
import Fourth from './../../assets/Minato.jpeg';
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div className="Landing-Container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className='landing-header'>Can you type...</h1>
                <div className="typewriter-container">
                <Typewriter
                    options={{
                    strings: ['Fast?', 'Correct?', 'Quick!'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </div>
            </div>
            <div data-aos="fade-left" className="landing-right">
                <img src={Fourth} alt="" />
            </div>
        </div>
    );
}

export default Landing;