import * as types from '../constants/ActionTypes';  
import initialState from './initialState';

export default function taskReducer(state = initialState.task, action) {  
  switch(action.type) {
    case types.SET_TASK:
      return { ...state, ...action.taskData };
    case types.ADD_TASK_REQUEST:
      return { ...state, error: '' };
    case types.ADD_TASK_SUCCESS:
      return { ...state, error: '' };
    case types.ADD_TASK_FAILURE:
      return { ...state, error: action.payload.error };
    case types.EDIT_TASK_REQUEST:
      return { ...state, error: '' };
    case types.EDIT_TASK_SUCCESS:
      return { ...state, error: '' };
    case types.EDIT_TASK_FAILURE:
      return { ...state, error: action.payload.error };
    case types.DELETE_TASK_REQUEST:
      return { ...state, error: '' };
    case types.DELETE_TASK_SUCCESS:
      return { ...state, error: '' };
    case types.DELETE_TASK_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}