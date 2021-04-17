import React from 'react';
import StartScreen from './components/start_screen';
import './static/css/style.css';

import questionsJson from './questions.json';
import QuestionScreen from './components/question_screen';
import FinishedScreen from './components/finished_screen';

export default class Game extends React.Component {
  constructor(props) {
    super();

    this.state = {
      state: 'start',
      questionNum: 0,
    }

    this.correct = 0;
    this.questions = questionsJson;
    console.log(this.questions);

    this.nextQuestion = this.nextQuestion.bind(this);
    this.start = this.start.bind(this);
  }

  nextQuestion(correct) {

    if (correct) {
      this.correct += 1;
    }

    this.setState({
      questionNum: this.state.questionNum + 1,
    });

    if (this.state.questionNum === this.questions.length - 1) {
      this.setState({
        state: 'finished',
      })
    }
  }

  start() {
    this.setState({state: 'running'});
  }

  render() {
    let ths = this;
    let screen;

    if (this.state.state === 'start') {
      screen = <StartScreen onStart={ function() {
        ths.start();
      } } />;
    } else if (this.state.state === 'running') {
      let question = this.questions[this.state.questionNum];
      screen = <QuestionScreen questionJson={question} onNext={this.nextQuestion} />
    } else if (this.state.state === 'finished') {
      screen = <FinishedScreen correct={this.correct} nQuestions={this.questions.length} />
    }

    return (
      <div className="game">
        { screen }
      </div>
    )
  }
}