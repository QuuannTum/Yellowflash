import React from 'react';
import "./TypingChallenge.css";
import TestLetter from "../TestLetter/TestLetter";

export default function TypingChalleng({           
    timerStarted, 
    timeRemaining, 
    testInfo, 
    onInputChange
}) {
    console.log('Inside typing Challenge',testInfo)
  return (
    <div className="typing-challenge">
        <div className="timer-container">
            <p className="timer"
            >
                00:
                {timeRemaining > 10 ? timeRemaining : `0${timeRemaining}`}
            </p>
            <p className="timer-info">
                {!timerStarted && "Start typing the test"}
            </p>
        </div>

        <div className="test-area-container">
            <div className="text-area-left">
                <div className="textarea testparagraph">
                    {
                        testInfo.map((individualLetterInfo, index) => {
                            return (
                                <TestLetter  
                                key={index}
                                individualLetterInfo={individualLetterInfo}
                                />
                        )
                        })
                    }
                </div>
            </div>

            <div className="text-area-right">
                <textarea 
                    onChange={(e) => onInputChange(e.target.value)}
                    className='text-area' placeholder='Start typing to start the test'
                >
                </textarea>
            </div>
        </div>
    </div>
  )
}
