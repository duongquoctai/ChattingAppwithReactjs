import React, { Component } from 'react';
import { connect } from 'react-redux'

import { messageRef } from '../../firebase';

class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmail: '',
      prevEmail: ''
    }
    this.setMessageEndRef = element => this.messageEndRef = element;
  }

  removeMessage() {
    const { serverKey } = this.props.message;
    messageRef.child(serverKey).remove();
  }

  scrollToBottom = () => {
    this.messageEndRef.scrollIntoView();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  render() {
    const { email, message } = this.props.message;
    let btnRemove;
    if (this.props.user.email === email) {
      btnRemove = <img alt="meomeo" src="https://cdn3.iconfinder.com/data/icons/cleaning-icons/512/Trash_Can-512.png" className="icon--delete" onClick={() => this.removeMessage()} />;
    }

    return (
      <div className={this.props.user.email === email ? 'align-right' : 'align-left'} ref={this.setMessageEndRef}>
        <strong className={`item-email ${this.props.emailPrev === email ? 'd-none' : ''}`} style={{fontSize: '80%'}}>{ email }</strong>
        <div className="wrap--item-message">
          <div className="item-message">{ message }</div>
          { btnRemove }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps)(MessageItem);