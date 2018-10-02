import * as types from '../constants/ActionTypes';  
import initialState from './initialState';

export default function commentReducer(state = initialState.comment, action) {  
  switch(action.type) {
    case types.SET_COMMENT:
      return { ...state, ...action.commentData };
    case types.ADD_COMMENT_REQUEST:
      return { ...state, error: '' };
    case types.ADD_COMMENT_SUCCESS:
      return { ...state, error: '' };
    case types.ADD_COMMENT_FAILURE:
      return { ...state, error: action.payload.error };
    case types.DELETE_COMMENT_REQUEST:
      return { ...state, error: '' };
    case types.DELETE_COMMENT_SUCCESS:
      return { ...state, error: '' };
    case types.DELETE_COMMENT_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}