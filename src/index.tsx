import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import PageNotFound from 'components/PageNotFound';

import 'styles/index.css';

import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        path='/'
        exact={true}
        component={App}
      />
      <Route
       path='/'
       component={PageNotFound}
      />
    </Switch>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
