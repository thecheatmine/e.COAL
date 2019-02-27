import React, {Component} from 'react';
import {quizzes, users} from '../examples';


class Question extends Component {

  render() {
    const tt = this.props.question.txtAnswers.map((txt, index) =>

      <label key={index}>
        {txt}
        <input type='checkbox' id={"reponse"+index} />
      </label>
    );

    const ti = this.props.question.imgAnswers.map((img, index) =>
    <label key={index}>
        <img key={index} src={img} />
        <input type='checkbox' id={"reponse"+index} />
        </label>
  
      )

    return (
      
      <div>
        <h3>{this.props.question.question}</h3>
        <form>
          {tt}
          {ti}
          <button onClick={e => this.props.nextQuestion(e)}>Validate</button>
        </form>
      </div>
    );
  }
}

class Finish extends Component {

  render() {

    return (
      <>
      <h3>Well played !</h3>
      <p>Your score is: </p>
      <p>
        You can retry the quiz if you would like to do a better score. <br /><br />
        You can also choose another quiz to play.
        Finally we invited you to create your own Quiz !
      </p>
      <button>Try again</button>
      <button>Choose another quiz</button>
      <button>Create a Quiz</button>
      </>
    );
  }
}

class Play extends Component {

  constructor(props) {
    super(props);
    this.quizz = quizzes.filter(q=> q._uid == this.props.match.params.id)[0];
    this.state = {
      current : 0,
      playing: true,
      score: 0
    };
    
  }
  nextQuestion(e) {
    e.preventDefault();
    const rep = [];
    //for(i=0;i<=e.target.elements.length-1;i++){
    // if(e.target.elements.[i].checked){
    //  rep.push(e.target.elements.[i].value)

    const max = this.quizz.questions.length-1;
    if( this.state.current < max){
      
       



      const c = this.state.current+1;
      this.setState({
        current: c
      });
    }
    else{
      this.setState({
        playing: false
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Playing</h1>
        <h2>{this.quizz.name}</h2>
          {
            this.state.playing
            ? <Question question = {this.quizz.questions[this.state.current]} nextQuestion = {(e) => this.nextQuestion(e)} />
            : <Finish />
          }
        {/* <Question question = {this.quizz.questions[this.state.current]} nextQuestion = {(e) => this.nextQuestion(e)} /> */}
      </div>
    );
  }
}

export {Play};
