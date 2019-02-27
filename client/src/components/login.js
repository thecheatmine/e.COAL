import React, {Component} from 'react';
import axios from 'axios';
import {HTTP_SERVER_PORT} from '../constants.js';
import {quizzes, users} from '../examples';

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      connected: this.props.connected,
      users: null
    }
  }

  componentDidMount() {
    // this.loadData()
  }

  async loadData() {
    const users = (await axios.get(HTTP_SERVER_PORT + 'users')).data;  // We need to wait for the response.
    this.setState({
      users: users
    });
    // console.log(quizes)
  }       
  
  checkLogin() {
    const enterName = document.getElementById("name").value;
    const enterPass = document.getElementById("pass").value;
    
    for(let i = 0; i < users.length; i++){
      
      console.log(enterName, enterPass)
      console.log(users[i].name, users[i].passwd)
      console.log(users[i].name === enterName && users[i].passwd === enterPass)
      if(users[i].name === enterName && users[i].passwd === enterPass){
        
        this.setState({
          connected: true
        });
        alert('login')
      }
      else{
        alert('not login')
      }
    }

  }

  render() {
    return (
      <div id="container">
        <h1>Login</h1>
        <form onSubmit={() => this.checkLogin()}>
          <label>
            Username
            <input type="text" id="name" required ></input>
          </label>

          <label>
            Password
            <input type="password" id="pass" required></input>
          </label>

          <button className="btn margin-auto">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
