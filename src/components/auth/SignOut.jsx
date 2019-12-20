import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetUser } from '../../actions';

import { firebaseApp } from '../../firebase';

class SignOut extends Component {
  logout = () => {
    firebaseApp.auth().signOut().then(() => {
      this.props.resetUser(null);
    });
  }

  render() {
    return (
      <div onClick={this.logout} className="btn-logout">Logout</div>
    );
  }
}

export default connect(null, { resetUser })(SignOut);