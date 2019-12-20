import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { logUser } from './actions';
import reducer from './reducers';

import App from './components/App';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn'
import { firebaseApp } from './firebase';

const history = createBrowserHistory();
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/app');
  } else {
    history.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path='/' history={history}>
      <Route path='/app' component={App}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/signin' component={SignIn}></Route>
    </Router>
  </Provider>, document.getElementById('root')
);