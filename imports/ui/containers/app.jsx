import React from 'react';
import Animate from 'rc-animate';
// probably soon:
// import Footer from './footer';
// import Left from './left';

let animeName = "route-default"

export default (props) => {
  return (
        <div className="main-content" id="main-content">
            <div className="col-sm-10 ">
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
