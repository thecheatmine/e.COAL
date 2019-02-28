import React, {Component} from 'react';
import {Play} from '../components/playing';
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';
import List from '../components/list';
import Search from '../components/search';
import CreateQuiz from '../components/createQuiz';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Link, Redirect} from 'react-router-dom';

class NavBar extends Component {

    constructor(props) {
      super(props)
      this.state = {
        toggle: false,
        searching: false,
        connected: false,
        query: null
      }

      
      this.activateLogin = this.activateLogin.bind(this)
    }

    activateLogin() {
      this.setState({
        connected: true
      });

    }

    // submitForm (e) {
    //   e.preventDefault()
    //   this.props.history.push('/search');
    // }

    render() {
      let query = this.state.query
      if(this.state.query != null) this.setState({query: null})
      return (
        <BrowserRouter>
          <>
          {query ? <Redirect to={'/search/'+this.state.query} /> : null}
          {/* { this.state.query ? <Redirect to={'/search/'+"recherche"} /> : null} */}
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
                <form onSubmit={
                  // this.submitForm.bind(this)
                  (e) => {
                    e.preventDefault()
                    this.setState({query: document.getElementById('search-query').value})
                    // return <Redirect to='/search' />;
                  }
                }>
                  <div className="wrapper">
                    <input type="text" id="search-query" className="searchBar"/>
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
                    to={this.state.connected ? '/create' : '/register'}
                    onClick={() => this.setState({
                      toggle: false
                    })}
                    className={ this.state.toggle ? "link link-top top" : "link link-top" }>
                      <img src={this.state.connected ? "/img/create.svg" : "/img/create.svg"} />
                      <span>{this.state.connected ? 'Create' : 'Register'}</span>
                  </Link>

                  <Link
                    to={'/login'}
                    onClick={
                      (e) => {
                        if(this.state.connected) {
                          e.preventDefault()
                          this.setState({
                            connected: false,
                            toggle: false
                          })
                        }
                        this.setState({
                          toggle: false
                        })
                    }}
                    className={ this.state.toggle ? "link link-right right" : "link link-right" }>
                      <img src={ this.state.connected ? "/img/lock_open.svg" : "/img/lock.svg" } />
                      <span>{this.state.connected ? 'Logout' : 'Login'}</span>
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
              <Route exact={true} path="/search/:query"
                render={(props) => <Search {...props} query={this.state.query} />} />
              <Route exact={true} path="/quizzes" component={List} />
              <Route exact={true} path="/quizzes/:id" component={Play} />
              <Route exact={true} path="/login"
                render={(props) => <Login {...props} activateLogin={this.activateLogin} />} />
              <Route exact={true} path="/register"
                render={(props) => <Register {...props} connected={this.state.connected} />} /> />
              <Route exact={true} path="/create"
                render={(props) => <CreateQuiz {...props} connected={this.state.connected} />} />
              <Route path="*" component={() => <p>Page Not Found</p>} />
            </Switch>
          </>
        </BrowserRouter>
      
      );
    }
}

export default NavBar;
