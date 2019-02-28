import React, {Component} from 'react';
import {quizzes, users} from '../examples';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT} from '../constants.js';
import {HTTP_SERVER_PORT_PICTURES} from '../constants.js';

class Question extends Component {

  render() {
    const tt = this.props.question.txtAnswers.map((txt, index) =>

      <label className="line" key={index}>
        {txt}
        <input type='checkbox' id={"reponse"+index}/>
      </label>
    );

    const ti = this.props.question.imgAnswers.map((img, index) =>
      <label key={index}>
        <img className="imgQ" key={index} src={HTTP_SERVER_PORT_PICTURES + img} />
        <input type='checkbox' id={"reponse"+index} />
      </label>
    )

    return (
      
      <div>
        <h3>{this.props.question.question}</h3>
        <form onSubmit={e => this.props.nextQuestion(e)}>
          {tt}
          {ti}
          <button type='submit' className="btn ask" >Validate</button>
        </form>
      </div>
    );
  }
}

class Finish extends Component {
  
  // anotherQuizz() {
  //   return <Redirect to='/quizzes' />
  // };

  render() {
    const finalscore = this.props.score;

    return (
      <>
      <h3>Well played !</h3>
      <p>Your score is: {finalscore}</p>
      <p>
        You can retry the quiz if you would like to do a better score. <br /><br />
        You can also choose another quiz to play.
        Finally we invited you to create your own Quiz !
      </p>
      <Link to="/quizzes" className="btn orange finish">Choose another quiz</Link>
      <Link to="/create" className="btn orange finish">Create a Quiz</Link>
      </>
    );
  }
}

class Play extends Component {

  constructor(props) {
    super(props);
    // this.state.quizz = quizzes.filter(q=> q._uid == this.props.match.params.id)[0];
    this.state = {
      current: 0,
      playing: true,
      score: 0,
      id: this.props.location.state._id,
      quizz: null
    };
    console.log(this.state.quizz)
  }

  componentDidMount() {
    this.loadData()
  }

  async loadData() {
    console.log("chargement")
    const quizes = (await axios.get(HTTP_SERVER_PORT + 'quizes')).data.filter(q => q._id == this.state.id)[0];
    this.setState({
      quizz: quizes
    });
    console.log(quizes)
  }   

  nextQuestion(e) {

    e.preventDefault();
    const rep = [];
    const max = this.state.quizz.questions.length-1;

    if( this.state.current <= max){
      console.log("Question"+this.state.current)

      //      
      for (let i = 0; i <= e.target.elements.length - 1; i++) {
        if (e.target.elements[i].checked) {
          rep.push(i);
        }
      }
      console.log(rep)
    
      //Indique si l'on a répondu vrai ou faux
      const win = ( rep.join() == this.state.quizz.questions[this.state.current].solutions.join() )
      
      //Si on a bon alors...
      if (win == true) {
        //Rajouter des points au score
        this.setState({
          score: parseInt(this.state.score + this.state.quizz.questions[this.state.current].points)
        });
      }

      //On calcule l'index suivant et on l'update
      if(this.state.current >= max) {
        this.setState({
          playing: false
        });
      }
      else {
        const index = this.state.current+1;
        this.setState({
          current: index
        });
      }



    }
    else{
      //Alors on n'autorise pas à jouer
      this.setState({
        playing: false
      });
    }
  }

  render() {
    return (
      this.state.quizz ?
      <div id="container" className="play-div">
        <h1>{this.state.quizz.name}</h1>
        {/* <h2>{this.state.quizz.name}</h2> */}
          {
            this.state.playing
            ? <Question question = {this.state.quizz.questions[this.state.current]} nextQuestion = {(e) => this.nextQuestion(e)} />
            : <Finish score= {this.state.score} />
          }
        {/* <Question question = {this.state.quizz.questions[this.state.current]} nextQuestion = {(e) => this.nextQuestion(e)} /> */}
      </div>
      : "Loading"
    );
  }
}
export {Play};
