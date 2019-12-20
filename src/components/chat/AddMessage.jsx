import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageRef } from '../../firebase';
import btnSendMess from '../../assets/images/send_mess.png';
class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
  }

  addMessage() {
    if (!this.isEmptyOrSpaces(this.state.message)) {
      const { email } = this.props.user;
      messageRef.push({email: email, message: this.state.message});
    }
    this.setState({message: ''});
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.addMessage();
    }
  }

  isEmptyOrSpaces = (str) => {
    return str === null || str.match(/^ *$/) !== null;
  }

  render() {
    return (
      <div className="wrap-add-message">
        <input 
          type="text"
          placeholder="Message"
          onChange={event => this.setState({message: event.target.value})}
          value={this.state.message}
          onKeyPress={this.handleKeyPress}
        />
        <img src={ btnSendMess } alt="" onClick={() => this.addMessage()} className={'btn-send-mess'} />
      </div>
    )
  }
}

/** allow dispatch action to reducer and reducer will change state */
const mapDispatchToProps = dispatch => {
  return {};
}

/** get state from store */
function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

/** connect: connect store to get and change states */
export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);