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
      quizName: null,
      keywords: "",
      nbQuestion: 2,
      connected: this.props.connected
    }
  }

  createQuestions = () => {
    let table = []

    for(let i = 0; i < this.state.nbQuestion; i++) {
      table.push(
        <label>
          Question { i+1 }
          <input type="text" id={"question_"+i+1}></input>
        </label>
      )
    }

    return table
  }

  render() {

    if(this.state.connected == false) {
      return <Redirect to='/' />;
    }
      
    return (
      <div id="container">
        <h1>Create your quiz</h1>
        <form onSubmit={() => alert('submit')}>
          <fieldset>
            <label>
              Name
              <input type="text" id="name" required></input>
            </label>

            <label>
              Keywords
              <input type="text" id="keyword_1"></input>
            </label>
          </fieldset>
          <fieldset>
            <label>
              Question(s)
              <input type="number" value={ this.state.nbQuestion }></input>
            </label>
            { this.createQuestions() }
          </fieldset>

          <button className="btn margin-auto" onClick={() => this.insertUser()} type="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default createQuiz;
