import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCN9fxLO10Keaply0QGOs8NYWWhXpvEifQ",
  authDomain: "reactjs-chat-a8299.firebaseapp.com",
  databaseURL: "https://reactjs-chat-a8299.firebaseio.com/",
  projectId: "reactjs-chat-a8299",
  storageBucket: "reactjs-chat-a8299.appspot.com",
  messagingSenderId: "128978822563"
}

export const firebaseApp = firebase.initializeApp(config);
export const messageRef = firebase.database().ref('message');