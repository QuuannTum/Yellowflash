import React from 'react';
import "./ChallengeSection.css"
import TestContainer from '../TestContainer/TestContainer';

const ChallengeSection = ({
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
    // console.log(props.selectedParagraph);
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test!!
            </h1>
            <TestContainer 
                timeRemaining={timeRemaining} timerStarted={timerStarted} selectedParagraph={selectedParagraph} words={words} 
                characters={characters} 
                wpm={wpm}
                testInfo={testInfo} 
                onInputChange={onInputChange}
                startAgain={startAgain} 
            />
        </div>
    )
}

export default ChallengeSection;