import React from 'react';

// CSS
import '../static/css/start_screen.css';


export default function StartScreen({onStart}) {
    return (
    <div className="start_screen">
        <div className="container">
            <h1>Antibiotica resistentie Kennistest</h1>
            <button className="flat_button" onClick={onStart}>Start kennistest</button>
        </div>
    </div>
    )
}
