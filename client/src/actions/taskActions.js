import Headers from './Headers';
import * as types from '../constants/ActionTypes';
import history from '../utils/history';
const axios = require('axios');

// Fetch all tasks for the current user
export function fetchTasks() {
  const headers = Headers.getGetHeaders();
  return function(dispatch) {
    dispatch(fetchTasksRequest());
    return axios.get('http://localhost:3001/tasks', {
      headers: headers
    }).then(function (response) {
      dispatch(fetchTasksSuccess(response.data));
    }).catch(function (error) {
      dispatch(fetchTasksFailure(error.message));
    }).then(function () {}); 
  };
}

export function fetchTasksRequest() {
  return { type: types.FETCH_TASKS_REQUEST }
}

export function fetchTasksSuccess(tasks) {
  return {
    type: types.FETCH_TASKS_SUCCESS,
    payload: { tasks }
  }
}

export function fetchTasksFailure(error) {
  return {
    type: types.FETCH_TASKS_FAILURE,
    payload: { error }
  }
}

// Set the state for the current task
export function setTask(taskData) {
  return { type: types.SET_TASK, taskData };
}

// Add a new task
export function addTask(taskData) {
  const headers = Headers.getPostHeaders();
  return function(dispatch) {
    dispatch(addTaskRequest());
    return axios.post('http://localhost:3001/tasks', taskData, { 
      headers: headers
    }).then(function(response) {
      history.push('/tasks'); // Redirect to 'tasks' view
      dispatch(addTaskSuccess());
    }).catch(function(error) {
      let errorMsg = error.response 
        ? error.response.data.message 
        : error.message;
      dispatch(addTaskFailure(errorMsg));
    });
  }
}

export function addTaskRequest() {
  return { type: types.ADD_TASK_REQUEST }
}

export function addTaskSuccess() {
  return { type: types.ADD_TASK_SUCCESS }
}

export function addTaskFailure(error) {
  return {
    type: types.ADD_TASK_FAILURE,
    payload: { error }
  }
}

// Edit the selected task
export function editTask(taskId, taskData) {
  const headers = Headers.getPutHeaders();
  return function(dispatch) {
    dispatch(editTaskRequest());
    return axios.put('http://localhost:3001/tasks/'+taskId, taskData, { 
      headers: headers
    }).then(function(response) {
      history.push('/tasks'); // Push to show task view (pass ID from editTask)
      dispatch(editTaskSuccess());
    }).catch(function(error) {
      let errorMsg = error.response 
        ? error.response.data.message 
        : error.message;
      dispatch(editTaskFailure(errorMsg));
    });
  }
}

export function editTaskRequest() {
  return { type: types.EDIT_TASK_REQUEST }
}

export function editTaskSuccess() {
  return { type: types.EDIT_TASK_SUCCESS }
}

export function editTaskFailure(error) {
  return {
    type: types.EDIT_TASK_FAILURE,
    payload: { error }
  }
}

// Delete the selected task
export function deleteTask(taskId) {
  const headers = Headers.getDeleteHeaders();
  return function(dispatch) {
    dispatch(deleteTaskRequest());
    return axios.delete('http://localhost:3001/tasks/'+taskId, { 
      headers: headers
    }).then(function(response) {
      history.push('/tasks');
      dispatch(deleteTaskSuccess());
    }).catch(function(error) {
      let errorMsg = error.response 
        ? error.response.data.message 
        : error.message;
      dispatch(deleteTaskFailure(errorMsg));
    });
  }
}

export function deleteTaskRequest() {
  return { type: types.DELETE_TASK_REQUEST }
}

export function deleteTaskSuccess() {
  return { type: types.DELETE_TASK_SUCCESS }
}

export function deleteTaskFailure(error) {
  return {
    type: types.DELETE_TASK_FAILURE,
    payload: { error }
  }
}

// Set the state for the current comment
export function setComment(commentData) {
  return { type: types.SET_COMMENT, commentData };
}

// Add a new comment to a task
export function addComment(commentData, taskId) {
  const headers = Headers.getPostHeaders();
  return function(dispatch) {
    dispatch(addCommentRequest());
    return axios.post('http://localhost:3001/tasks/'+taskId+'/comments', commentData, { 
      headers: headers
    }).then(function(response) {
      dispatch(addCommentSuccess());
      dispatch(fetchTasks());
    }).catch(function(error) {
      let errorMsg = error.response 
        ? error.response.data.message 
        : error.message;
      dispatch(addCommentFailure(errorMsg));
    });
  }
}

export function addCommentRequest() {
  return { type: types.ADD_COMMENT_REQUEST }
}

export function addCommentSuccess() {
  return { type: types.ADD_COMMENT_SUCCESS }
}

export function addCommentFailure(error) {
  return {
    type: types.ADD_COMMENT_FAILURE,
    payload: { error }
  }
}

// Delete the selected comment
export function deleteComment(commentId) {
  const headers = Headers.getDeleteHeaders();
  return function(dispatch) {
    dispatch(deleteCommentRequest());
    return axios.delete('http://localhost:3001/comments/'+commentId, { 
      headers: headers
    }).then(function(response) {
      dispatch(deleteCommentSuccess());
      dispatch(fetchTasks());
    }).catch(function(error) {
      let errorMsg = error.response 
        ? error.response.data.message 
        : error.message;
      dispatch(deleteCommentFailure(errorMsg));
    });
  }
}

export function deleteCommentRequest() {
  return { type: types.DELETE_COMMENT_REQUEST }
}

export function deleteCommentSuccess() {
  return { type: types.DELETE_COMMENT_SUCCESS }
}

export function deleteCommentFailure(error) {
  return {
    type: types.DELETE_COMMENT_FAILURE,
    payload: { error }
  }
}

// Fetch all task priorities
export function fetchPriorities() {
  const headers = Headers.getGetHeaders();
  return function(dispatch) {
    dispatch(fetchPrioritiesRequest());
    return axios.get('http://localhost:3001/priorities', {
      headers: headers
    }).then(function (response) {
      dispatch(fetchPrioritiesSuccess(response.data));
    }).catch(function (error) {
      dispatch(fetchPrioritiesFailure(error.message));
    }).then(function () {}); 
  };
}

export function fetchPrioritiesRequest() {
  return { type: types.FETCH_PRIORITIES_REQUEST }
}

export function fetchPrioritiesSuccess(priorities) {
  return {
    type: types.FETCH_PRIORITIES_SUCCESS,
    payload: { priorities }
  }
}

export function fetchPrioritiesFailure(error) {
  return {
    type: types.FETCH_PRIORITIES_FAILURE,
    payload: { error }
  }
}

// Fetch all task statuses
export function fetchStatuses() {
  const headers = Headers.getGetHeaders();
  return function(dispatch) {
    dispatch(fetchStatusesRequest());
    return axios.get('http://localhost:3001/statuses', {
      headers: headers
    }).then(function (response) {
      dispatch(fetchStatusesSuccess(response.data));
    }).catch(function (error) {
      dispatch(fetchStatusesFailure(error.message));
    }).then(function () {}); 
  };
}

export function fetchStatusesRequest() {
  return { type: types.FETCH_STATUSES_REQUEST }
}

export function fetchStatusesSuccess(statuses) {
  return {
    type: types.FETCH_STATUSES_SUCCESS,
    payload: { statuses }
  }
}

export function fetchStatusesFailure(error) {
  return {
    type: types.FETCH_STATUSES_FAILURE,
    payload: { error }
  }
}
