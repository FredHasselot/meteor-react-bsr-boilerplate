import React, { Component } from 'react';
import { Link } from 'react-router';
// -------------------------------
class PageOne extends Component {
// ****************************************************************************
// ----------------------------------------------------------------------------
//                              LIFE CYCLE
// ----------------------------------------------------------------------------
  componentDidMount() {
    console.log('mounted', this.props.paramsFromRouter.params.id);
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
//                               RENDER
// ----------------------------------------------------------------------------
  render() {
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

export default PageOne;
