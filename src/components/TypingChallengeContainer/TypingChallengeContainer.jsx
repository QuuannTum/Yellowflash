import React from 'react';
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypingChallengeContainer =({
    selectedParagraph, 
    timerStarted, 
    timeRemaining, 
    words, 
    characters, 
    wpm,
    testInfo,
    onInputChange
}) => {
    return (
        <div className='typing-challenge-container'>
            {/* Details Section */}
            <div className="details-container">
                {/* Words typed */}
                <ChallengeDetailsCard cardName="words" cardValue={words}/>

                {/* Characters typed */}
                <ChallengeDetailsCard cardName="characters" cardValue={characters} />

                {/* Speed typed */}
                <ChallengeDetailsCard cardName="wpm" cardValue={wpm} />

            </div>

            {/* Real Challenge Section */}
            <div className="real-challenge-section">
                <TypingChallenge
                    timerStarted={timerStarted}
                    timeRemaining={timeRemaining}
                    selectedParagraph={selectedParagraph} 
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
      )
}

export default TypingChallengeContainer;
