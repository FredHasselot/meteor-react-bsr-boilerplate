import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


//Containers
import App from '../../ui/containers/app';
//Pages
import Home from '../../ui/pages/home';


const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          {/*<Route path="something" component={Soon} />*/}
      </Route>
    </Router>
);


Meteor.startup(() => {

  // Client startup method.
  // Meteor.absoluteUrl.defaultOptions.rootUrl = 'https://url.com/';
  // Meteor.absoluteUrl.defaultOptions.rootUrl = 'http://localhost:3000/';

  WebFontConfig = {
    google: { families: [
      'Permanent+Marker::latin',
      'Slabo+27px::latin',
      'Oswald::latin',
      'Droid+Serif::latin',
      'Droid+Sans::latin',
      'Ubuntu::latin',
      'Berkshire+Swash::latin',
      'Raleway::latin',
      'Roboto+Slab::latin',
      'Press+Start+2P::latin'
    ]}
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  ReactDOM.render(routes, document.getElementById('app'));

});
