import React, {Component} from 'react';

class Register extends Component {

    render() {
      return (
        <div id="container">
          <h1>Register</h1>
          <form>
            <label>
              Username
              <input type="text" required></input>
            </label>

            <label>
              Password
              <input type="password" required></input>
            </label>

            <label>
              Password confirmation
              <input type="password" required></input>
            </label>

            <button className="btn margin-auto">Submit</button>
          </form>
        </div>
      );
    }
}

export default Register;
