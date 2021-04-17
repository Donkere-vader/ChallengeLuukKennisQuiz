import React, { useState } from 'react';

// CSS
import '../static/css/question_screen.css';


export default function QuestionScreen({questionJson, onNext}) {

    const [answered, setAnswered] = useState(false);
    const [chosenAnswer, setChosenAnswer] = useState(-1);

    let question = questionJson['question'];

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let correct = questionJson['correct'].indexOf(chosenAnswer) !== -1;
    let answer_buttons = [];

    let idx = 0;
    questionJson['answers'].forEach(function(answer) {
        console.log(idx);

        let isCorrect;

        console.log('test' + chosenAnswer);

        if (answered && questionJson['correct'].indexOf(idx) !== -1) {
            isCorrect = "correct";
        } else if (answered && chosenAnswer === idx && questionJson['correct'].indexOf(idx) === -1) {
            isCorrect = "wrong";
        }

        let idx_copy = idx;
        answer_buttons.push(
            <button key={ `button_${idx}` } className={ "answer_button " + (answered ? isCorrect : "") } onClick={ function() {
                if (!answered) {
                    setAnswered(true);
                    setChosenAnswer(idx_copy);
                }
            } }>
                <b>{alphabet[idx]})</b> {questionJson['answers'][idx]}
            </button>
        );

        idx++;
    });

    return (
        <div className="question_screen">
            <h2 className="question">
                {question}
            </h2>
            { answered && 
                <div className="short_exp">
                    <span>{ (correct ? "Dat is goed, want " : "Helaas dat is fout, want ") + questionJson['short_exp'] }</span>
                </div>
            }
            <div className="answers">
                { answer_buttons }
            </div>
            { answered && 
                <>
                    <div className="long_exp">
                        <span>{ questionJson['long_exp'] }</span>
                    </div>
                    <button className="flat_button" onClick={ function() {
                        onNext(correct);
                        setAnswered(false);
                        setChosenAnswer(-1);
                    } }>Volgende</button>
                </>
            }
        </div>
    )
}
