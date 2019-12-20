import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { firebaseApp } from '../../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      success: '',
      error: {
        message: ''
      }
    }
  }

  signIn = () => {
    this.setState({loading: true});
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      this.setState({
        success: 'Completed Sign in',
        error: {message: ''}
      });
    })
    .catch(error => {
      this.setState({
        loading: false,
        success: '', error
      });
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.signIn();
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <h2>SignIn</h2>
        <div>
          <input 
            type="text"
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input 
            type="password"
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            type="button"
            onClick={() => this.signIn()}
            onKeyPress={this.handleKeyPress}
          >
            SignIn
          </button>
          {loading && <div>Loading ...</div>}
          <div>{this.state.error.message}</div>
          <div><Link to={'/signup'}>Signup</Link></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return user;
}

export default connect(mapStateToProps)(SignIn);