import React, {Component} from 'react';
import './App.css';

import Rooms from './Rooms'
import LoginSignup from './LoginSignup'
import Game from './Game'
import {BrowserRouter as Router, Route, Redirect, withRouter} from "react-router-dom";
import {connect} from 'react-redux'

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const AuthButton = withRouter(({history}) => fakeAuth.isAuthenticated
//   ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//         fakeAuth.signout(() => history.push("/"));
//       }}>
//         Sign out
//       </button>
//     </p>
//   )
//   : (
//     <p>You are not logged in.</p>
//   ));

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Router>
          <div>
            {/* <AuthButton/> */}

            <Redirect
              to={{
              pathname: "/rooms",
              state: {
                from: "/"
              }
            }}/>

            <Route path="/login" component={LoginSignup}/>
            <PrivateRoute auth={this.props.user.isAuth} path="/rooms" component={Rooms}/>
            <PrivateRoute auth={this.props.user.isAuth} path="/play" component={Game}/>
          </div>
        </Router>

      </div>
    );
  }
}

function PrivateRoute({
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => rest.auth
      ? (<Component {...props}/>)
      : (<Redirect
        to={{
        pathname: "/login",
        state: {
          from: props.location
        }
      }}/>)}/>
  );
}



// class Login extends Component {
//   state = {
//     redirectToReferrer: false
//   };

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState({redirectToReferrer: true});
//     });
//   };

//   render() {
//     let {from} = this.props.location.state || {
//       from: {
//         pathname: "/"
//       }
//     };
//     let {redirectToReferrer} = this.state;

//     if (redirectToReferrer) 
//       return <Redirect to={from}/>;
    
//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//         <LoginSignup/>
//       </div>
//     );
//   }
// }

const mapStateToProps = state => (
  {
    user:state.user
  }
);

export default connect(mapStateToProps)(App);