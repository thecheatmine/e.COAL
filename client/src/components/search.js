import React, {Component} from 'react';
import axios from 'axios';
import {quizzes, users} from '../examples';

import {HTTP_SERVER_PORT} from '../constants.js';
import {HTTP_SERVER_PORT_PICTURES} from '../constants.js';
import {Link} from 'react-router-dom';


class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: this.props.match.params.query,
      results: null
    }
    console.log(this.state.query)
  }

  componentDidMount() {
    this.loadData()
  }

  async loadData() {
    const results = (await axios.get(HTTP_SERVER_PORT + 'search/' + this.state.query)).data;  // We need to wait for the response.
    this.setState({
      results: results
    });
    // console.log(this.state.users)
    // console.log(quizes)
  } 

  render() {
    return (
      <div id="container">
        <h1>Search</h1>
        <p>Results for <strong>{ this.state.query }</strong></p>
        { this.state.results ? 

            this.state.results.length > 0 ?

              <div className="quiz-wrapper">
                {this.state.results.map((object, index) =>
                <div className="border">
                  <Link to={{pathname: "/quizzes/"+ object._id, state: {_id: object._id }}} >
                    <h3>{object.name}</h3>
                    <img src={HTTP_SERVER_PORT_PICTURES + object.icon} />
                  </Link>
                </div>
                )}
              </div>
              : <p>There is no results for your research</p>
        : <p>Loading...</p> }
      </div>
    );
  }
}

export default Search;
