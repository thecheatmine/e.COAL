import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {

    render() {
      return (
        <div id="container">
          <header>
            <img src="/img/logo.png" />
          </header>
          <h1>What is Quizultural?</h1>
          <p>
            Quizultural is a project led by four students of different nationalities.
            Our main goal is to create fun quiz that teach a lot about local cultures.
          </p>
          <p>
            You can choose between the differents categories of quiz presents on the website
            and you can create your own if you want to if you are registered!
          </p>
          <Link to={'/register'}>
            <button className="btn margin-auto">Register!</button>
          </Link>
        </div>
      );
    }
}

export default Home;
