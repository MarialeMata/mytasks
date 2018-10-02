import { combineReducers } from 'redux';
import user from './userReducer';
import projects from './projectsReducer';
import project from './projectReducer';
import tasks from './tasksReducer';
import priorities from './prioritiesReducer';
import statuses from './statusesReducer';
import task from './taskReducer';
import comment from './commentReducer';
import ui from './uiReducer';

const rootReducer = combineReducers({
  projects,
  project,
  tasks,
  priorities,
  statuses,
  task,
  comment,
  user,
  ui
})

export default rootReducer;  