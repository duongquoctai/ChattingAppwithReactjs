import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { firebaseApp } from '../../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      success: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.setState({
          success: 'Completed SignUp',
          error: {message: ''}
        });
      })
      .catch(error => {
        this.setState({success: '', error});
      })
  }

  render() {
    return(
      <div>
        <h2>Sign Up</h2>
        <div>
          <input
            type="text"
            style={{marginRight: '5px'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            type="password"
            style={{marginRight: '5px'}}
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signUp()}
          >
            Sign Up
          </button>
        </div>
        <div>{this.state.success}</div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signin'}>Already a user? Sign in instead</Link></div>
      </div>
    );
  }
}

export default SignUp;