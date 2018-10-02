import * as types from '../constants/ActionTypes';  
import initialState from './initialState';

export default function tasksReducer(state = initialState.tasks, action) {  
  switch(action.type) {
    case types.FETCH_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case types.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        items: action.payload.tasks
      };
    case types.FETCH_TASKS_FAILURE:
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