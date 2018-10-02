import * as types from '../constants/ActionTypes';  
import initialState from './initialState';

export default function uiReducer(state = initialState.ui, action) {  
  switch(action.type) {
    case types.SHOW_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.alertMessage
      };
    case types.TOGGLE_NAVBAR:
      return {
        ...state,
        navbarIsOpen: !(state.navbarIsOpen)
      };
    case types.UPDATE_LOGIN_FORM:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          credentials: action.credentials,
        }
      };
    case types.UPDATE_SIGNUP_FORM:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          userData: action.userData,
        }
      }
    case types.TOGGLE_ALERT:
      return {
        ...state,
        alertIsShowing: action.alertIsShowing
      };
    default:
      return state;
  }
}