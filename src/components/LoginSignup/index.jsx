import React from 'react'
import Login from './login'
import Signup from './signup'
import Footer from '../Footer'

const LoginSignup = ({match}) => (
  <div>
    <Login/>
    <Signup/>
    <Footer/>
  </div>
);

export default LoginSignup;