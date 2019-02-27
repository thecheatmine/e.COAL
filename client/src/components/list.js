import React, {Component} from 'react';
import {quizzes, users} from '../examples';

import {HTTP_SERVER_PORT_PICTURES} from '../constants.js';
import {Link} from 'react-router-dom';

class List extends Component {

    render() {
      return (
        <div id="container">
          <h1>List of Quiz</h1>
          <p>Choose a quiz to start playing</p>
          <div className="quiz-wrapper">
            {quizzes.map((object, index) =>
              <Link to={"/quizzes/"+ object._uid} >
                <h3>{object.name}</h3>
                <img src={HTTP_SERVER_PORT_PICTURES + object.icon} />
              </Link>
            )}
          </div>
        </div>
        
      );
    }
}

export default List;
