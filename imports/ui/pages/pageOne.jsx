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

class PageOne extends Component {

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
    console.log('mounted', this.props.paramsFromRouter.params.id);
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  getDangerousHTML(htmlTag) {
    return {__html: htmlTag };
  }



  // -------------------------------
  // -------------------------------
  // -------------------------------

  render(props) {
    return (
      <div>
        This is the page one and the params is {this.props.paramsFromRouter.params.id}
        <Link to="/"> goToHome </Link>
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

}, PageOne);
