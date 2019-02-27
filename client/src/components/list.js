import React, {Component} from 'react';
import axios from 'axios';
import {quizzes, users} from '../examples';

import {HTTP_SERVER_PORT} from '../constants.js';
import {HTTP_SERVER_PORT_PICTURES} from '../constants.js';
import {Link} from 'react-router-dom';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quizes: null
    }
  }

  componentDidMount() {
    this.loadData()
  }

  async loadData() {
    console.log("chargement")
    const quizes = (await axios.get(HTTP_SERVER_PORT + 'quizes')).data;  // We need to wait for the response.
    this.setState({
      quizes: quizes
    });
    console.log(quizes)
  }          

    render() {
    return (
      <div id="container">
        <h1>List of Quiz</h1>
        <p>Choose a quiz to start playing</p>
        { this.state.quizes ?

          <div className="quiz-wrapper">
            {this.state.quizes.map((object, index) =>
            <div className="border">
              <Link to={{pathname: "/quizzes/"+ object._id, state: {_id: object._id }}} >
                <h3>{object.name}</h3>
                <img src={HTTP_SERVER_PORT_PICTURES + object.icon} />
              </Link>
            </div>
            )}
          </div>

        : "Loading"
        }
      </div>
      
    );
  }
}

export default List;
