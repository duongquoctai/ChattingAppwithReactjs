import React, { Component } from 'react';
import { connect } from 'react-redux'

import { messageRef } from '../../firebase';

import { setMessages } from '../../actions';

import MessageItem from './MessageItem';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  /** run after load page */
  componentDidMount() {
    messageRef.on('value', snap => {
      let messageList = [];
      snap.forEach(messageItem => {
        const { email, message } = messageItem.val();
        const serverKey = messageItem.key;
        messageList.push({email, message, serverKey});
      })
      /** save message list to store */
      this.props.setMessages(messageList);
      this.setState({loading: false});
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className={'wrap-list-message'}>
        {loading && <div>Loading ...</div>}
        {
          this.props.messageList.map((message, index) => {
            return (
              <MessageItem key={index} message={message} emailPrev={index !== 0 ? this.props.messageList[index-1].email : ''} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user, messageList } = state;
  return {
    user,
    messageList
  }
}

export default connect(mapStateToProps, { setMessages })(MessageList);