import * as types from '../constants/ActionTypes';  
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {  
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        session: !!(localStorage.getItem('jwt')),
        error: ''
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        session: !!(localStorage.getItem('jwt')),
        error: action.payload.error
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        signedUp: true,
        error: ''
      };
    case types.SIGN_UP_FAILURE:
      return {
        ...state,
        signedUp: false,
        error: action.payload.error
      };
    case types.LOGOUT:
      return {
        ...state,
        session: !!(localStorage.getItem('jwt'))
      };
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        name: localStorage.getItem('name'),
        id: localStorage.getItem('id')
      };
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        name: '',
        id: 0
      };
    default: 
      return state;
  }
}