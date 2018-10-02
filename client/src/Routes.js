import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignUp } from './containers/user';
import { Overview } from './containers/overview';
import { Projects, Project, NewProject, EditProject } from './containers/project';
import { Tasks, Task, NewTask, EditTask } from './containers/task';

export default () =>
  <Switch>
    <Route path="/" exact component={Overview} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/projects/edit/:id" exact component={EditProject} />
    <Route path="/projects/:id/:source" exact component={Project} />
    <Route path="/tasks" exact component={Tasks} />
    <Route path="/tasks/new" exact component={NewTask} />
    <Route path="/tasks/edit/:id" exact component={EditTask} />
    <Route path="/projects/new" exact component={NewProject} />
    <Route path="/tasks/:id/:source" exact component={Task} />
  </Switch>;