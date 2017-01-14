import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './app';
import MessageApp from './message_app';
import './index.css';

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/message_app" component={MessageApp}/>
    </Router>
  ), document.getElementById('root')
);
