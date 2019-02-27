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

  createQuizz() {

    let imgAnswers = []
    let txtAnswers = []

    let questions = []
    for(let i = 0; i < this.state.nbQuestion; i++) {
      questions.push({
        question: document.getElementById('question_'+i).value,
        video: null,
        txtAnswers: txtAnswers ? txtAnswers : null,
        imgAnswers: imgAnswers ? imgAnswers : null,
        solutions: [1, 2],
        points: 3
      })
    }

    this.setState({
      quizz: {
        name: document.getElementById('name').value,
        keywords: null,
        questions: questions,
      }
    })
  }

  createQuestions = () => {
    let table = []

    for(let i = 0; i < this.state.nbQuestion; i++) {
      table.push(
        <fieldset key={i}>
          <label>
            Question { i+1 }
            <input type="text" id={"question_"+i}></input>
          </label>
          <label>
            Answer A
            <input type="text" id={"answer_"+i+"_a"}></input>
          </label>
          <label>
            Answer B
            <input type="text" id={"answer_"+i+"_b"}></input>
          </label>
          <label>
            Answer C
            <input type="text" id={"answer_"+i+"_c"}></input>
          </label>
          <label>
            Answer D
            <input type="text" id={"answer_"+i+"_d"}></input>
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
        <form onChange={() => this.createQuizz()} onSubmit={() => alert('submit')}>
          <fieldset>
            <label>
              Name
              <input type="text" id="name" required></input>
            </label>

            <label>
              Keywords
              <input type="text" id="keyword_1"></input>
            </label>
            <label>
              Question(s) maximum 5
              <input step="1" value={this.state.nbQuestion} type="number" min="0" max="5" id="nbQuestion" onChange={ () => this.setState({nbQuestion: document.getElementById('nbQuestion').value}) }></input>
            </label>
          </fieldset>
          { this.createQuestions() }

          <button className="btn margin-auto" onClick={() => this.insertUser()} type="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default createQuiz;
