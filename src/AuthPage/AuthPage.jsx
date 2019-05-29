import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import AuthHeader from './AuthHeader/AuthHeader';
import logo from '../images/logo.png'

class AuthPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        isHidden: true
      }
    }
    toggleHidden(){
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render(){
        console.log(this.props, 'IS ON AUTH PAGE')
      return (
        <div className="authPage">
          <div className = 'loginHeader'>
            <AuthHeader/>
          </div>
          <div className = 'loginContent'>
            <div className = 'logo'>
              <img src = {logo}/>
            </div>
            <div className = 'loginType'>
              <h1>LOGIN TO HIKE ON</h1>
            </div>
            <div>
              <button onClick = {this.toggleHidden.bind(this)} className = 'registerButton'>
                NEW? SIGN UP FOR FREE!
              </button>
              {!this.state.isHidden && <RegistrationForm handleRegister = {this.props.handleRegister}/>}
            </div>
          </div>
          <div>
            <div className = "loginForm">
              {this.state.isHidden && <LoginForm handleLogin = {this.props.handleLogin}/>}
            </div>
  
          </div>
          <div className = 'authFooter'></div>
        </div>
      );
    }
  }
  export default AuthPage