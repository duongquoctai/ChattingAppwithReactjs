import { SIGNED_IN, SET_MESSAGES } from '../constants';

export const logUser = (email) => {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export const resetUser = () => {
  const action = {
    type: SIGNED_IN,
    email: null
  }
  return action;
}

export const setMessages = (messageList) => {
  const action = {
    type: SET_MESSAGES,
    messageList
  }
  return action;
}