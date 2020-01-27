import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './components/reducers/index';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

const initialState = {
  auth: { authenticated: localStorage.getItem('token') }
};
const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Welcome} />
        <Route path='/signup' component={Signup} />
        <Route path='/feature' component={Feature} />
        <Route path='/signout' component={Signout} />
        <Route path='/signin' component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
