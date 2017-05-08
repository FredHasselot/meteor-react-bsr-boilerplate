import React from 'react';
import Animate from 'rc-animate';
// probably soon:
// import Footer from './footer';
// import Left from './left';

import ReactHelmet from 'react-helmet';
import ReactCookie from 'react-cookie';

let animeName = "route-default"

export default (props) => {
  return (
        <div className="main-content" id="main-content">
            <div className="col-sm-10 ">

              <ReactHelmet
                htmlAttributes={{"lang": "fr", "amp": undefined}}
                defaultTitle="MeteorReactOnBothSide"
                meta={[
                          {"name": "description", "content": "Meteor boilderPLate"},
                          {"name": "viewport", "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"},
                          {"http-equiv": "cache-control", "content": "max-age=0"},
                          {"http-equiv": "cache-control", "content": "no-cache"},
                          {"http-equiv": "expires", "content": "0"},
                          {"http-equiv": "expires", "content": "Tue, 01 Jan 1980 1:00:00 GMT"},
                          {"http-equiv": "pragma", "content": "no-cache"},
                          {"property": "og:image", "content": "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4"},
                          {"property": "og:url", "content": "http://www.google.fr" },
                          {"property": "og:title", "content": "Meteor boilderPLate" },
                          {"name": "fragment", "content": "!"}
                      ]}
                link={[
                    {"rel": "shortcut icon", "href": "images/favicon-new.png"},
                ]}/>


              <Animate
              transitionAppear={true}
              transitionEnter={true}
              transitionLeave={true}
              exclusive={false}
              transitionName={animeName}>
                <div key={props.location.pathname}>
                  {props.children}
                </div>
              </Animate>
            </div>
        </div>
  );
};
