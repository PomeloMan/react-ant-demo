import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { routes } from '@/config/routes';
// import Routes from './router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'

//创建store
const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    {/* <Routes /> */}
    <Router>
      { renderRoutes(routes) }
    </Router>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
