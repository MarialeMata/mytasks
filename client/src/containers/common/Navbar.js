import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/userActions';
import * as uiActions from '../../actions/uiActions';
import { CustomNavbar } from '../../components/common';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggle() {
    this.props.actions.toggleNavbar();
  }

  logout() {
    this.props.actions.logoutUser();
  }

  render() {
    const userStatus = this.props.user.session;
    return (
      <CustomNavbar 
        userStatus={userStatus} 
        toggler={this.toggle} 
        isOpen={this.props.navbarIsOpen} 
        logout={this.logout} 
        userName={this.props.user.name} 
      />
    );
  }

}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  navbarIsOpen: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    navbarIsOpen: state.ui.navbarIsOpen
  };
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) 
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
