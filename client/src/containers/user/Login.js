import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoginForm } from '../../components/user';
import * as actions from '../../actions/userActions';
import * as uiActions from '../../actions/uiActions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.props.actions.updateLoginForm({ email: '', password: '' });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.props.credentials;
    credentials[field] = event.target.value;
    return this.props.actions.updateLoginForm(credentials);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.updateLoginForm(this.props.credentials);
    this.props.actions.loginUser({
      email: this.props.email.toLowerCase(),
      password: this.props.password
    });
    setTimeout(()=>{ this.props.actions.toggleAlert(true); }, 500);
  }

  render() {
    return (
      <LoginForm 
        email={this.props.email} 
        password={this.props.password}
        error={this.props.error}
        onEdit={this.onChange} 
        onSend={this.onSubmit}
      />
    );
  }

}

Login.propTypes = {
  credentials: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return { 
    credentials: state.ui.loginForm.credentials,
    email: state.ui.loginForm.credentials.email,
    password: state.ui.loginForm.credentials.password,
    error: state.user.error
  };
}

function mapDispatchToProps(dispatch) {  
  return { 
    actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
