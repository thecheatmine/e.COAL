import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import NavBar from './components/NavBar';

class App extends Component {
    render() {
      return (
        <>
          <NavBar />
        </>
      );
    }
}

export default App;
