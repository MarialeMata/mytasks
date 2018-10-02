import * as types from '../constants/ActionTypes';  
import Auth from '../auth/Auth';
import Headers from './Headers';
import history from '../utils/history';
const axios = require('axios');

// Login user
export function loginUser(credentials) {
  return function(dispatch) {
    return axios.post('http://localhost:3001/user_token', { 
      auth: credentials
    }).then(function(response) {
      // Save jwt token in local storage
      localStorage.setItem('jwt', response.data.jwt);
      dispatch(loginSuccess());
      dispatch(fetchUser());
    }).catch(function(error) {
      let errorMsg = error.response ? error.response.statusText : error.message;
      dispatch(loginFailure(errorMsg));
    });
  }
}

export function loginSuccess() {
  return { type: types.LOGIN_SUCCESS }
}

export function loginFailure(error) {
  return { 
    type: types.LOGIN_FAILURE,
    payload: { error }
  }
}

export function fetchUser() {
  const headers = Headers.getGetHeaders();
  return function(dispatch) {
    return axios.get('http://localhost:3001/get_user', {
      headers: headers
    }).then(function (response) {
      localStorage.setItem('name', response.data.firstName);
      localStorage.setItem('id', response.data.id);
      dispatch(fetchUserSuccess());
    }).catch(function (error) {
      dispatch(fetchUserFailure());
    }); 
  };
}

export function fetchUserSuccess() {  
  return { type: types.FETCH_USER_SUCCESS };
}

export function fetchUserFailure() {  
  return { type: types.FETCH_USER_FAILURE };
}

export function signUpUser(userData) {
  const headers = Headers.getPostHeadersNoAuth();
  return function(dispatch) {
    return axios.post('http://localhost:3001/signup', userData, { 
      headers: headers
    }).then(function(response) {
      dispatch(signUpSuccess());
      dispatch(showAlertMessage('Success!'));
    }).catch(function(error) {
      let errorMsg = error.response 
        ? error.response.data.message 
        : error.message;
      dispatch(signUpFailure(errorMsg));
      dispatch(showAlertMessage(errorMsg));
    });
  }
}

export function signUpSuccess() {
  return { type: types.SIGN_UP_SUCCESS }
}

export function signUpFailure(error) {
  return {
    type: types.SIGN_UP_FAILURE,
    payload: { error }
  }
}

export function showAlertMessage(message) {
  return { type: types.SHOW_ALERT_MESSAGE, alertMessage: message }
}

export function logoutUser() {
  Auth.logout();
  history.go(0);
  return { type: types.LOGOUT }
}