import React, { Component } from 'react';

import AddMessage from './chat/AddMessage';
import MessageList from './chat/MessageList';
import SignOut from './auth/SignOut';

import '../assets/stylesheet/general.scss';
import '../assets/javascript/custom.js';


class App extends Component {
  render() {
    return (
      <div className="wrap-content">
        <div className="wrap-title">
          <div className="title-name">Shopline Team</div>
          <SignOut />
        </div>
        <MessageList />
        <AddMessage />
      </div>
    )
  }
}

export default App;