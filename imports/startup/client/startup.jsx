import React from 'react';
import ReactDOM from 'react-dom';

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


});
