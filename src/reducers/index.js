import { combineReducers } from 'redux';
import user from './reducer_user';
import messageList from './reducer_messages';

export default combineReducers({
  user,
  messageList
})