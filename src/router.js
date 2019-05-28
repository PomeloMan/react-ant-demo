import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import loadable from './util/loadable'

const Main = loadable(()=>import('@/views/main'))

const Routes = () => (
  <Router>
    <Route path="/" exact component={App}/>
    <Route path="/main" component={Main}/>
  </Router>
);

export default Routes
