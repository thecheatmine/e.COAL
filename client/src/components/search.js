import React, {Component} from 'react';
import {quizzes, users} from '../examples';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: this.props.match.params.query,
      results: null
    }
    console.log(this.state.query)
  }

  render() {
    return (
      <div id="container">
        <h1>Search</h1>
        <p>Results for <strong>{ this.state.query }</strong></p>
        { this.state.results ? "This is the results..." : <p>Loading...</p> }
      </div>
    );
  }
}

export default Search;
