import React from 'react';
import ReactHelmet from 'react-helmet';

export default (props) => {
  return (
        <div className='main-content' id='main-content'>
              <ReactHelmet
                htmlAttributes={{ lang: 'fr', amp: undefined }}
                defaultTitle='Meteor BSR boilerplate Revamped'
                meta={[
                        { name: 'description',
                          content: 'Clean SSR and CSR boilerplate for Meteor'
                        },
                        {
                          name: 'keywords',
                          content: 'Meteor, SSR, BSR'
                        },
                        { name: 'viewport',
                          content: 'width=device-width, initial-scale=1.0,\n' +
                          'maximum-scale=1.0, user-scalable=0'
                        },
                        { 'http-equiv': 'cache-control', content: 'max-age=0' },
                        { 'http-equiv': 'cache-control', content: 'no-cache' },
                        { 'http-equiv': 'expires', content: '0' },
                        { 'http-equiv': 'expires', content: 'Tue, 01 Jan 1980 1:00:00 GMT' },
                        { 'http-equiv': 'pragma', content: 'no-cache' },
                        { property: 'og:image',
                          content: 'https://d14xs1qewsqjcd.cloudfront.net/assets/og-image-logo.png' },
                        { property: 'og:url', content: 'https://www.meteor.com/' },
                        { property: 'og:title',
                          content: 'Meteor, SSR, BSR'
                        },
                        { name: 'fragment', content: '!' }
                      ]}
                link={[
                    {
                      rel: 'shortcut icon',
                      type: 'image/x-icon',
                      href: 'https://www.meteor.com/favicon.png'
                    },
                    {
                      rel: 'icon',
                      type: 'image/vnd.microsoft.icon',
                      href: 'https://www.meteor.com/favicon.png'
                    },
                ]}
              />

              <div key={props.location.pathname} >
                  {props.children}
                  <div className="clearfix" />
              </div>

        </div>
  );
};
