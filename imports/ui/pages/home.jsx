import React, { Component } from 'react';
// import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// -------------------------------
// -------------------------------
// -------------------------------

class Home extends Component {
  state = {
    errors: []
   };
// ****************************************************************************
// ----------------------------------------------------------------------------
//                              LIFE CYCLE
// ----------------------------------------------------------------------------
  componentDidMount() {
    console.log('mounted', this.props.homevar);
  }
  componentDidUpdate() {
    console.log('did update');
  }
  componentWillUnmount() {
    console.log('will unmount');
  }
// ---------------------------------------------------------------------------
//                              FUNCTIONS
// ---------------------------------------------------------------------------
  getDangerousHTML(htmlTag) {
    return { __html: htmlTag };
  }
// ----------------------------------------------------------------------------
clearAllTimeout() {
  let id = window.setTimeout(() => {}, 0);
  while (id--) {
      window.clearTimeout(id);
  }
}
// ----------------------------------------------------------------------------
clearAllInterval() {
  let id = window.setInterval(() => {}, 0);
  while (id--) {
      window.clearInterval(id);
  }
}
// ----------------------------------------------------------------------------
//                               RENDER
// ----------------------------------------------------------------------------
  render() {
    return (
      <div>
        Homepage
        <Link to="post/1"> goToPageOne with post params 1 </Link>
      </div>
    );
  } // FIN RENDER
} // FIN CLASS
// ----------------------------------------------------------------------------
//                               export
// ----------------------------------------------------------------------------
export default Home;
// export default withTracker(() => {
//      Meteor.subscribe('collectionName', limit, sortBy);
//   return {
//     currentUser: Meteor.user()
//   };
// })(Home);
