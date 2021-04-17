import React from 'react';

// CSS
import '../static/css/finished_screen.css';


export default function FinishedScreen({correct, nQuestions}) {

    let score = (correct / nQuestions) * 100;

    let sufficientClass = score > 55 ? "sufficient" : "insufficient";

    return (
    <div className="finished_screen">
        <div className="container">
            <h1>Kennistest voltooid</h1>
            <h3>Resultaat:</h3>
            <div className={ "score " + sufficientClass }>
                <span>{ score }%</span>
            </div>
        </div>
    </div>
    )
}
