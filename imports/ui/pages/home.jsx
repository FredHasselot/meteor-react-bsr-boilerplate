import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

// -------------------------------
// -------------------------------
// -------------------------------

// Variables
let variables;

// -------------------------------
// -------------------------------
// -------------------------------

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error:null
        }
  }

  // -------------------------------
  // -------------------------------
  // -------------------------------

  componentDidUpdate() {
    console.log('did update');
  }

  componentDidMount() {
    console.log('mounted', this.props.homevar);
  }


  componentWillUnmount() {
    console.log('will unmount');
  }


  getDangerousHTML(htmlTag) {
    return {__html: htmlTag };
  }


  clearAllTimeout() {
    let id = window.setTimeout(function() {}, 0);
    while (id--) {
        window.clearTimeout(id);
    }
  }

  clearAllInterval() {
    let id = window.setInterval(function() {}, 0);
    while (id--) {
        window.clearInterval(id);
    }
  }


  // -------------------------------
  // -------------------------------
  // -------------------------------

  render(props) {
    return (
      <div>
        Homepage
        <Link to="post/1"> goToPageOne with post params 1 </Link>
      </div>
    );
  } // FIN RENDER

} // FIN CLASS

// -------------------------------
// -------------------------------
// -------------------------------

export default createContainer((props) => {

    // Meteor.subscribe('collectionName', limit, sortBy);

  return {
    // currentUser: Meteor.user()
  };

}, Home);
