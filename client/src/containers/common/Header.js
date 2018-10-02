import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CustomHeader } from '../../components/common';
import { getHeaderSubtitle } from '../../utils/ui';

class Header extends Component {

  render() {
    return (
      <CustomHeader 
        subtitle={getHeaderSubtitle(this.props.session, this.props.currentPath)}
        session={this.props.session}
      />
    );
  }
};

Header.propTypes = {  
  session: PropTypes.bool.isRequired,
  currentPath: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  return { session: state.user.session };
}

export default connect(mapStateToProps)(Header);
