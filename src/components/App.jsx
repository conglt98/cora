import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Rooms from './Rooms'
import Demo from './Demo'
import LoginSignup from './LoginSignup'
import Game from './Game'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* <ul>
              <li>
                <a>
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/Demo">Demo</Link>
                </a>
              </li>
            </ul> */}
            <Route exact path="/" component={LoginSignup}/>
            <Route exact path="/demo" component={Demo}/>
            <Route exact path="/play" component={Game}/>
            <Route exact path="/rooms" component={Rooms}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
