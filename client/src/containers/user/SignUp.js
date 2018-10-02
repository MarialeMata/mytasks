import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/userActions';
import * as uiActions from '../../actions/uiActions';
import { SignUpForm } from '../../components/user';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.props.actions.updateSignUpForm({ 
      firstName: '', 
      lastName: '', 
      password: '', 
      passwordConfirmation: '' 
    });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const userData = this.props.userData;
    userData[field] = event.target.value;
    return this.props.actions.updateSignUpForm(userData);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.updateSignUpForm(this.props.userData);
    this.props.actions.signUpUser(this.props.userData);
    this.props.actions.toggleAlert(true);
  }

  render() {
    return (
      <SignUpForm
        signedUp={this.props.signedUp}
        alertMessage={this.props.alertMessage}
        email={this.props.email} 
        firstName={this.props.firstName} 
        lastName={this.props.lastName}
        password={this.props.password}
        passwordConfirmation={this.props.passwordConfirmation}
        onEdit={this.onChange}
        onSend={this.onSubmit}
      />
    );
  }

}

SignUp.propTypes = {
  alertMessage: PropTypes.string.isRequired,
  signedUp: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return { 
    alertMessage: state.ui.alertMessage, 
    signedUp: state.user.signedUp,
    userData: state.ui.signUpForm.userData,
    firstName: state.ui.signUpForm.userData.firstName,
    lastName: state.ui.signUpForm.userData.lastName,
    password: state.ui.signUpForm.userData.password,
    passwordConfirmation: state.ui.signUpForm.userData.passwordConfirmation
  }
}

function mapDispatchToProps(dispatch) {  
  return { 
    actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
