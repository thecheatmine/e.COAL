import React, {Component} from 'react';
import axios from 'axios';
import {quizzes, users} from '../examples';

import {HTTP_SERVER_PORT} from '../constants.js';
import {HTTP_SERVER_PORT_PICTURES} from '../constants.js';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class createQuiz extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: null,
      quizz: {
        name: null,
        keywords: null
      },
      nbQuestion: 1,
      connected: this.props.connected
    }
  }

  insertQuiz() {

 
  }

  createQuizz() {

    let imgAnswers = []
    
    let video = null 
    let questions = []

    for(let i = 0; i < this.state.nbQuestion; i++) {
      let solutions = []
      if( document.getElementById("answer_"+i+"_acheckbox").checked) {
        solutions.push(0)
      }
      if( document.getElementById("answer_"+i+"_bcheckbox").checked) {
        solutions.push(1)
      }
      if( document.getElementById("answer_"+i+"_ccheckbox").checked) {
        solutions.push(2)
      }
      if( document.getElementById("answer_"+i+"_dcheckbox").checked) {
        solutions.push(3)
      }

      let txtAnswers = []
      txtAnswers.push( document.getElementById("answer_"+i+"_a").value )
      txtAnswers.push( document.getElementById("answer_"+i+"_b").value )
      txtAnswers.push( document.getElementById("answer_"+i+"_c").value )
      txtAnswers.push( document.getElementById("answer_"+i+"_d").value )

      questions.push({
        question: document.getElementById('question_'+i).value,
        video: video ? video : null,
        txtAnswers: txtAnswers ? txtAnswers : null,
        imgAnswers: imgAnswers ? imgAnswers : null,
        solutions: solutions,
        points: 3
      })
    }

    const quizz = {
        name: document.getElementById('name').value,
        icon: null,
        keywords: null,
        questions: questions,
        published: true,
        ownerId: 1,
        scores: []
      }

      axios.post(HTTP_SERVER_PORT + 'newQuiz', quizz)
      .then(res => {
        if (res.status === 200)
          // this.loadData();   
          return null
          // If everything is ok, reload data in order to upadate the component
        else
          console.log("Failed to add user");
      }).catch(err => console.log("Error =>", err));
  }

  createQuestions = () => {
    let table = []

    for(let i = 0; i < this.state.nbQuestion; i++) {
      table.push(
        <fieldset key={i}>
          <label>
            Question { i+1 }
            <input type="text" id={"question_"+i} required></input>
          </label>
          <label>

            <label className="line">
            Answer A is solution ?
              <input type="checkbox" id={"answer_"+i+"_acheckbox"}></input>
            </label>
            <input type="text" id={"answer_"+i+"_a"} required></input>
            
          </label>
          <label>
            <label className="line">
            Answer B is solution ?
              <input type="checkbox" id={"answer_"+i+"_bcheckbox"}></input>
            </label>
            <input type="text" id={"answer_"+i+"_b"} required></input>
          </label>
          <label>
            <label className="line">
            Answer C is solution ?
              <input type="checkbox" id={"answer_"+i+"_ccheckbox"}></input>
            </label>
            <input type="text" id={"answer_"+i+"_c"} required></input>
          </label>
          <label>
            <label className="line">
            Answer D is solution ?
              <input type="checkbox" id={"answer_"+i+"_dcheckbox"}></input>
            </label>
            <input type="text" id={"answer_"+i+"_d"} required></input>
          </label>
        </fieldset>
      )
    }

    return table
  }

  render() {
    console.log(this.state.quizz)

    if(this.state.connected == false) {
      return <Redirect to='/login' />;
    }
      
    return (
      <div id="container">
        <h1>Create your quiz</h1>
        <form /* onChange={() => this.createQuizz()}  onSubmit={() => alert('submit')} */>
          <fieldset>
            <label>
              Name
              <input type="text" id="name" required></input>
            </label>

            <label>
              Keywords
              <input type="text" id="keyword_1" disabled></input>
            </label>
            <label>
              Question(s) maximum 5
              <input step="1" value={this.state.nbQuestion} type="number" min="1" max="5" required id="nbQuestion" onChange={ () => this.setState({nbQuestion: document.getElementById('nbQuestion').value}) }></input>
            </label>
          </fieldset>
          { this.createQuestions() }

          <button className="btn margin-auto" onClick={() => this.createQuizz()} type="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default createQuiz;
