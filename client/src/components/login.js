import React, {Component} from 'react';
import axios from 'axios';
import {HTTP_SERVER_PORT} from '../constants.js';
// import {quizzes, users} from '../examples';
import Navbar from './NavBar'
import {Redirect} from 'react-router-dom';

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      connected: this.props.connected,
      users: null,
      activateLogin: this.props.activateLogin
    }
  } 

  componentDidMount() {
    this.loadData()
  }

  async loadData() {
    const users = (await axios.get(HTTP_SERVER_PORT + 'users')).data;  // We need to wait for the response.
    this.setState({
      users: users
    });
    // console.log(this.state.users)
    // console.log(quizes)
  }       
  
  checkLogin(e) {
    e.preventDefault()
    let enterName = document.getElementById("name").value;
    let enterPass = document.getElementById("pass").value;
    
    for(let i = 0; i < this.state.users.length; i++){
      
      // console.log(enterName, enterPass)
      // console.log(this.state.users[i].username, this.state.users[i].passwd)
      // console.log(this.state.users[i].name === enterName && this.state.users[i].passwd === enterPass)
      if(this.state.users[i].username === enterName && this.state.users[i].password === enterPass){
        
        // this.setState({
        //   connected: true
        // });
        this.state.activateLogin();
        this.setState({connected: true})
        return null
        // alert('login')
      }
    }
    alert('not login')

  }

  render() {

    if(this.state.connected == true) {
      return <Redirect to='/' />;
    }

    return (
      <div id="container">
        <h1>Login</h1>
        <form onSubmit={(e) => this.checkLogin(e)}>
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
