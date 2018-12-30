import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends Component {
  // want this to get called right away
  // usually would make an AJAX request
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    return (
      <div>
        <h1>Dashbaord</h1>
      </div>
    )
  }
}

export default connect(null, { getCurrentProfile })(Dashboard);