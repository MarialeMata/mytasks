import * as types from '../constants/ActionTypes';  
import initialState from './initialState';

export default function projectsReducer(state = initialState.projects, action) {  
  switch(action.type) {
    case types.FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case types.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        items: action.payload.projects
      };
    case types.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        items: []
      };
    default:
      return state;
  }
}