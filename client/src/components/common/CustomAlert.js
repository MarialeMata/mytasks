import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/uiActions';

class CustomAlert extends Component {

  constructor(props) {
    super(props);
    this.props.actions.toggleAlert(false);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.props.actions.toggleAlert(false);
  }

  render() {
    const message = this.props.message.split(":");
    const title = message[0];
    const additionalContent = message[1];
    return (
      <Alert 
        color={this.props.color} 
        isOpen={this.props.alertIsShowing} 
        toggle={this.onDismiss} 
        className={this.props.alertIsShowing ? "visible" : "d-none"}>
        <strong>{title}</strong>
        {
          additionalContent !== undefined && 
          <div><hr /><p>{ additionalContent }</p></div>
        }
      </Alert>
    );
  }
}

CustomAlert.propTypes = {
  alertIsShowing: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return { alertIsShowing: state.ui.alertIsShowing }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomAlert);
