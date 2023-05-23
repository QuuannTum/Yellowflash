import React from 'react';
import "./TryAgain.css";

const TryAgain = ({words,
    characters,
    wpm, 
    startAgain}) => {
    return (
        <div className="try-again-container">
            <h1 className="try-again-header">Test Results</h1>
            <div className="results-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>
            <div onClick={() => startAgain()} className="social-media-btns">
                <button className='end-btn re-try'>Re-try</button>
                <button onClick={()=>{
                    window.open("https://www.facebook.com/sharer.php?u=tehleanprogrammer.com/aam", "facebook-share-dialog", "width=800", "height=600")
                }} className='end-btn share'>Share</button>
                <button onClick={() => {
                    window.open("https://www.twitter.com/intent/tweet?text=theleanprogrammer.com","Twitter", "width=800", "height=600")
                }}
                className='end-btn tweet'>Tweet</button>
            </div>
        </div>
    )
}

export default TryAgain;