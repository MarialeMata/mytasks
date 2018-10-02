import * as types from '../constants/ActionTypes';  
import initialState from './initialState';

export default function projectReducer(state = initialState.project, action) {  
  switch(action.type) {
    case types.SET_PROJECT:
      return { ...state, ...action.projectData };
    case types.ADD_PROJECT_REQUEST:
      return { ...state, error: '' };
    case types.ADD_PROJECT_SUCCESS:
      return { ...state, error: '' };
    case types.ADD_PROJECT_FAILURE:
      return { ...state, error: action.payload.error };
    case types.EDIT_PROJECT_REQUEST:
      return { ...state, error: '' };
    case types.EDIT_PROJECT_SUCCESS:
      return { ...state, error: '' };
    case types.EDIT_PROJECT_FAILURE:
      return { ...state, error: action.payload.error };
    case types.DELETE_PROJECT_REQUEST:
      return { ...state, error: '' };
    case types.DELETE_PROJECT_SUCCESS:
      return { ...state, error: '' };
    case types.DELETE_PROJECT_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}