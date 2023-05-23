import React from 'react';
import "./TestContainer.css";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer"
import TryAgain from '../TryAgain/TryAgain';

const TestContainer = ({
    selectedParagraph, 
    timerStarted, 
    timeRemaining, 
    words, 
    characters, 
    wpm,
    testInfo,
    onInputChange,
    startAgain
}) => {
    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                <TypingChallengeContainer 
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    selectedParagraph={selectedParagraph}
                    words={words} 
                    characters={characters} 
                    wpm={wpm} 
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    startAgain=
                    {startAgain}
                />
            </div>
                ) : (
                    <div className="try-again-container">
                <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}></TryAgain>
            </div>
                )
            }
        </div>
    )
}

export default TestContainer;