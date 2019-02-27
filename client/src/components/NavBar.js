import React, {Component} from 'react';
import {Play} from '../components/playing';
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';
import List from '../components/list';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Link} from 'react-router-dom';

class NavBar extends Component {

    constructor(props) {
      super(props)
      this.state = {
        toggle: false,
        searching: false,
        connected: false
      }
    }
    
    render() {
      return (
        <BrowserRouter>
          <>
            <div id="navigation-mobile-wrapper-wrapper">
              <div id="navigation-mobile-wrapper" className=
                { this.state.searching ? "searching" : "" }>
                <button
                  className={
                    (this.state.toggle == true && this.state.searching == false) ? 'home on' : 'home'
                  }
                  onClick={
                    () => this.setState({
                      toggle: this.state.toggle ? false : true
                    })
                  }
                >
                  { this.state.toggle ? <img src='/img/menu-opened.svg' alt='Menu' /> : <img src='/img/menu-closed.svg' alt='Menu' /> }
                </button>
                <form>
                  <div className="wrapper">
                    <input type="text" className="searchBar"/>
                    <button type="submit">
                      <img src="/img/search.svg" alt="Search" />
                    </button>
                  </div>
                </form>
                
                  <Link
                    to={'/quizzes'}
                    onClick={() => this.setState({
                      toggle: false
                    })}
                    className={ this.state.toggle ? "link link-left left" : "link link-left" }>
                      <img src="/img/list.svg" />
                      <span>Quiz list</span>
                  </Link>


                  {/* Liens qui changent selon si on est connecté ou non */}

                  <Link
                    to={this.state.connected ? '/create' : '/login'}
                    onClick={() => this.setState({
                      toggle: false
                    })}
                    className={ this.state.toggle ? "link link-top top" : "link link-top" }>
                      <img src={this.state.connected ? "/img/create.svg" : "/img/lock.svg"} />
                      <span>{this.state.connected ? 'Create' : 'Login'}</span>
                  </Link>

                  <Link
                    to={this.state.connected ? '/logout' : '/register'}
                    onClick={() => this.setState({
                      toggle: false
                    })}
                    className={ this.state.toggle ? "link link-right right" : "link link-right" }>
                      <img src={ this.state.connected ? "/img/lock_open.svg" : "/img/create.svg" } />
                      <span>{this.state.connected ? 'Logout' : 'Register'}</span>
                  </Link>
                  
                <nav id="navigation-mobile">

                  <section className="left">
                    <Link to={'/'}>
                      <img src="/img/home.svg" alt="Home" />
                      {/* Home */}
                    </Link>
                  </section>
                  
                  <section className="center">
                  </section>

                  <section className="right">
                    <button onClick={
                      () => this.setState({
                        searching: this.state.searching ? false : true
                      })
                    }>
                      { this.state.searching ? <img src='/img/menu-opened.svg' alt='Close' /> : <img src="/img/search.svg" alt="Search" /> }
                    </button>
                  </section>

                </nav>
              </div>
            </div>
            <div id="bottom-gradiant"
              className={ (this.state.toggle || this.state.searching) ? "on" : "" }
              onClick={ () => this.setState({ toggle: false, searching: false }) }></div>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/quizzes" component={List} />
              <Route exact={true} path="/quizzes/:id" component={Play} />
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/register" component={Register} />
              <Route path="*" component={() => <p>Page Not Found</p>} />
            </Switch>
          </>
        </BrowserRouter>
      
      );
    }
}

export default NavBar;
