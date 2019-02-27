import React, {Component} from 'react';

class Login extends Component {

    render() {
      return (
        <div id="container">
          <h1>Login</h1>
          <form>
            <label>
              Username
              <input type="text" required></input>
            </label>

            <label>
              Password
              <input type="password" required></input>
            </label>

            <button className="btn margin-auto">Submit</button>
          </form>
        </div>
      );
    }
}

export default Login;
