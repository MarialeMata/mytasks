import Headers from './Headers';
import * as types from '../constants/ActionTypes';
import history from '../utils/history';
const axios = require('axios');

// Fetch all projects for the current user
export function fetchProjects() {
  const headers = Headers.getGetHeaders();
  return function(dispatch) {
    dispatch(fetchProjectsRequest());
    return axios.get('http://localhost:3001/projects', {
      headers: headers
    }).then(function (response) {
      dispatch(fetchProjectsSuccess(response.data));
    }).catch(function (error) {
      dispatch(fetchProjectsFailure(error.message));
    }).then(function () {}); 
  };
}

export function fetchProjectsRequest() {
  return { type: types.FETCH_PROJECTS_REQUEST }
}

export function fetchProjectsSuccess(projects) {
  return {
    type: types.FETCH_PROJECTS_SUCCESS,
    payload: { projects }
  }
}

export function fetchProjectsFailure(error) {
  return {
    type: types.FETCH_PROJECTS_FAILURE,
    payload: { error }
  }
}

// Set the state for the current project
export function setProject(projectData) {
  return { type: types.SET_PROJECT, projectData };
}

// Add a new project
export function addProject(projectData) {
  const headers = Headers.getPostHeaders();
  return function(dispatch) {
    dispatch(addProjectRequest());
    return axios.post('http://localhost:3001/projects', projectData, { 
      headers: headers
    }).then(function(response) {
      history.push('/projects'); // Redirect to 'projects' view
      dispatch(addProjectSuccess());
    }).catch(function(error) {
      let errorMsg = error.response 
        ? error.response.data.message 
        : error.message;
      dispatch(addProjectFailure(errorMsg));
    });
  }
}

export function addProjectRequest() {
  return { type: types.ADD_PROJECT_REQUEST }
}

export function addProjectSuccess() {
  return { type: types.ADD_PROJECT_SUCCESS }
}

export function addProjectFailure(error) {
  return {
    type: types.ADD_PROJECT_FAILURE,
    payload: { error }
  }
}

// Edit the selected project
export function editProject(projectId, projectData, source) {
  const headers = Headers.getPutHeaders();
  return function(dispatch) {
    dispatch(editProjectRequest());
    return axios.put('http://localhost:3001/projects/'+projectId, projectData, { 
      headers: headers
    }).then(function(response) {
      if (source === 'edit') {
        history.push('/projects/'+projectId+'/edit');
      } else if (source === 'show') {
        dispatch(fetchProjects());
      }
    }).catch(function(error) {
      let errorMsg = error.response 
        ? error.response.data.message 
        : error.message;
      dispatch(editProjectFailure(errorMsg));
    });
  }
}

export function editProjectRequest() {
  return { type: types.EDIT_PROJECT_REQUEST }
}

export function editProjectSuccess() {
  return { type: types.EDIT_PROJECT_SUCCESS }
}

export function editProjectFailure(error) {
  return {
    type: types.EDIT_PROJECT_FAILURE,
    payload: { error }
  }
}

// Deleted the selected project
export function deleteProject(projectId) {
  const headers = Headers.getDeleteHeaders();
  return function(dispatch) {
    dispatch(deleteProjectRequest());
    return axios.delete('http://localhost:3001/projects/'+projectId, { 
      headers: headers
    }).then(function(response) {
      history.push('/projects');
      dispatch(deleteProjectSuccess());
    }).catch(function(error) {
      let errorMsg = error.response 
        ? error.response.data.message 
        : error.message;
      dispatch(deleteProjectFailure(errorMsg));
    });
  }
}

export function deleteProjectRequest() {
  return { type: types.DELETE_PROJECT_REQUEST }
}

export function deleteProjectSuccess() {
  return { type: types.DELETE_PROJECT_SUCCESS }
}

export function deleteProjectFailure(error) {
  return {
    type: types.DELETE_PROJECT_FAILURE,
    payload: { error }
  }
}