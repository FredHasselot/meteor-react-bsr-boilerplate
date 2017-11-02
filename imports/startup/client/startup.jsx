import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // Client startup method.
  // Meteor.absoluteUrl.defaultOptions.rootUrl = 'https://url.com/';
  // Meteor.absoluteUrl.defaultOptions.rootUrl = 'http://localhost:3000/';
  WebFontConfig = {
    google: { families: [
      'Oswald::latin',
      'Ubuntu::latin',
      'Anton::latin',
    ] }
  };
  (() => {
    const wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
});
