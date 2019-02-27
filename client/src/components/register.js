import React, {Component} from 'react';
import {quizzes, users} from '../examples';

class Register extends Component {
  
  insertUser() {

    const enterName = document.getElementById("name").value;
    const enterPass = document.getElementById("pass").value;
    const enterPass2 = document.getElementById("pass2").value;

    const listOfName = [users[0].name];
    console.log(listOfName)

    let Input = false
    if(enterName != "" && enterPass != "") {
      Input = true
    }
    console.log(Input)

    let doExist = false
    listOfName.forEach(element => {
      if(enterName == element) doExist = true
    });
    console.log(doExist)

    let isPwdValid = false
    if(enterPass == enterPass2) isPwdValid = true
    console.log(isPwdValid)

    if(doExist === false && isPwdValid === true && Input === true) {
      
      const userData = {
        _uid: 1 ,
        name: enterName,
        passwd: enterPass
      }

      console.log(userData)
    }


    // for(let i = 0; i < users.length; i++){
      
    //   if(users[i].name != enterName){
        
    //     if(enterPass === enterPass2){
          
    //       const u(i+1) = {  //comment on met un i d'une boucle for dans le nom d'une variable js
    //         _uid: i+1 ,
    //         name: enterName,
    //         passwd: enterPass
    //       }

    //       "You're register now"
    //     }

    //     else{
    //       "The passwords are different."
    //     }

    //   }
    //   else{
    //     "The name is already taken."
    //   }

    // }

  }

    render() {
      return (
        <div id="container">
          <h1>Register</h1>
          <form onSubmit={() => this.insertUser()}>
            <label>
              Username
              <input type="text" id="name" required></input>
            </label>

            <label>
              Password
              <input type="password" id="pass" required></input>
            </label>

            <label>
              Password confirmation
              <input type="password" id="pass2" required></input>
            </label>

            <button className="btn margin-auto" onClick={() => this.insertUser()} type="button">Submit</button>
          </form>
        </div>
      );
    }
}

export default Register;
