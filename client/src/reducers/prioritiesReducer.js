import * as types from '../constants/ActionTypes';  
import initialState from './initialState';

export default function prioritiesReducer(state = initialState.priorities, action) {  
  switch(action.type) {
    case types.FETCH_PRIORITIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case types.FETCH_PRIORITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        items: action.payload.priorities
      };
    case types.FETCH_PRIORITIES_FAILURE:
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