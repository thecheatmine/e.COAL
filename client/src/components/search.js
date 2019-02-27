import React, {Component} from 'react';
import {quizzes, users} from '../examples';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query
    }
  }

    render() {
      return (
        <div id="container">
          <h1>Search</h1>
          <p>Results for { this.state.query }</p>
        </div>
      );
    }
}

export default Search;
