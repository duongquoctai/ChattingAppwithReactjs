import { SET_MESSAGES } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case SET_MESSAGES:
      const { messageList } = action;
      return messageList;
    default:
      return state;
  }
}