import * as types from '../constants/ActionTypes';

export function toggleNavbar() {
  return { type: types.TOGGLE_NAVBAR };
}

export function updateLoginForm(credentials) {
  return { type: types.UPDATE_LOGIN_FORM, credentials };
}

export function updateSignUpForm(userData) {
  return { type: types.UPDATE_SIGNUP_FORM, userData };
}

export function toggleAlert(alertIsShowing) {
  return { type: types.TOGGLE_ALERT, alertIsShowing };
}
