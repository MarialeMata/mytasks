import { createSelector } from 'reselect'
import moment from 'moment';

// Get all project items
export const getProjects = state => state.projects.items;

// Get all task items
export const getTasks = state => state.tasks.items;

// Get a project by its ID (passed from props)
export const getProject = createSelector(
  [getProjects, (state, props) => props.match.params.id], 
  (projects, matchId) => {
    return projects.filter(project => project.id == matchId)[0];
});

// Get a task by its ID (passed from props)
export const getTask = createSelector(
  [getTasks, (state, props) => props.match.params.id], 
  (tasks, matchId) => {
    return tasks.filter(task => task.id == matchId)[0];
});

// Get latest 5 projects sorted by 'recently seen' date
export const getProjectsByLastSeen = createSelector([getProjects], projects => {
  return projects
    .sort((project1, project2) => 
      moment(project2.lastSeenAt) - moment(project1.lastSeenAt))
    .slice(0, 5);
});

// Get 5 most tasks sorted by approaching deadline (not showing expired)
export const getTasksByDeadline = createSelector([getTasks], tasks => {
  let date = new Date();
  return tasks
    .sort((task1, task2) => moment(task1.deadline) - moment(task2.deadline))
    .filter(task => moment(task.deadline) > moment(date))
    .slice(0, 5);
});

// Get all tasks in a projects
export const getProjectTasks = createSelector(
  [getProject, getTasks], 
  (project, tasks) => {
    return tasks.filter(task => task.projectId === project.id);
});

// Get the project count
export const getProjectCount = createSelector([getProjects], projects => {
  return projects.length;
});

// Get the task count
export const getTaskCount = createSelector([getTasks], tasks => {
  return tasks.length;
});