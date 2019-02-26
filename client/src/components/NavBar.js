import React, {Component} from 'react';
import Accueil from '../components/accueil.js';
import {ListQuiz} from '../components/listofquiz';
import {Play} from '../components/playing';
import Connexion from '../components/connexion';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Link} from 'react-router-dom';

class NavBar extends Component {

    constructor(props) {
      super(props)
      this.state = {
        toggle: false,
        searching: false
      }
    }

    render() {
      return (
        <BrowserRouter>
          <>
            <div id="navigation-mobile-wrapper" className=
            { this.state.searching ? "searching" : "" }>
            <button
              className="home"
              onClick={
                () => this.setState({
                  toggle: this.state.toggle ? false : true
                })
              }
            >
              { this.state.toggle ? <img src='img/menu-opened.svg' alt='Menu' /> : <img src='img/menu-closed.svg' alt='Menu' /> }
            </button>
            <form>
              <div className="wrapper">
                <input type="text" className="searchBar"/>
                <button type="submit">
                  <img src="img/search.svg" alt="Search" />
                </button>
              </div>
            </form>
            <button className=
            { this.state.toggle ? "link left" : "link" }>
              <Link to={'/quizzes'}>Quiz</Link>
            </button>
            <button className=
            { this.state.toggle ? "link top" : "link" }>
              <Link to={'/connexion'}>Connexion</Link>
            </button>
            <button className=
            { this.state.toggle ? "link right" : "link" }>
              <Link to={'/register'}>Register</Link>
            </button>
            <nav id="navigation-mobile">

              <section className="left">
                <Link to={'/'}>
                  <img src="img/home.svg" alt="Home" />
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
                  { this.state.searching ? <img src='img/menu-opened.svg' alt='Close' /> : <img src="img/search.svg" alt="Search" /> }
                </button>
              </section>

            </nav>
          </div>
            <Switch>
              <Route exact={true} path="/" component={Accueil} />
              <Route exact={true} path="/quizzes" component={ListQuiz} />
              <Route exact={true} path="/signin" component={Connexion} />
              <Route path="*" component={() => <p>Page Not Found</p>} />
            </Switch>
          </>
        </BrowserRouter>
      
      );
    }
}

export default NavBar;
