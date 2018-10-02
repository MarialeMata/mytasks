import * as types from '../constants/ActionTypes';  
import initialState from './initialState';

export default function statusesReducer(state = initialState.statuses, action) {  
  switch(action.type) {
    case types.FETCH_STATUSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case types.FETCH_STATUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        items: action.payload.statuses
      };
    case types.FETCH_STATUSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}