import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';

import App from '../imports/ui/containers/app';
import Home from '../imports/ui/pages/home';
import PageOne from '../imports/ui/pages/pageOne';

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="page-one" component={PageOne} />
      </Route>
    </Router>
);

Meteor.startup(() => {
  ReactRouterSSR.Run(routes)
});
