import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';

import ReactHelmet from 'react-helmet';
import ReactCookie from 'react-cookie';

import App from '../imports/ui/containers/app';
import Home from '../imports/ui/pages/home';
import PageOne from '../imports/ui/pages/pageOne';

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={() => (<Home homevar="this is the homepage" />)} />
          <Route path="post/:id" component={(params) => (<PageOne paramsFromRouter={params} />)} />
      </Route>
    </Router>
);

Meteor.startup(() => {
  ReactRouterSSR.Run(routes,
    {
  props: {
      onUpdate() {
        // ga('send', 'pageview');
        },
      }
  }, {
      htmlHook(html) {
        const head = ReactHelmet.rewind();
        return html.replace('<head>', '<head>' + head.title + head.base + head.meta + head.link + head.script);
      },
      preRender: function(req, res) {
        ReactCookie.plugToRequest(req, res);
      }
    }
  )
});
