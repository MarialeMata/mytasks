export const getHeaderSubtitle = (session, path) => {
  switch(path) {
    case '/':
      return session ? '/ Overview' : '/ Log in to access your projects and tasks';
    case '/projects':
      return session ? '/ Current Projects' : '/ Log in to access your projects';
    case '/tasks':
      return session ? '/ Current Tasks' : '/ Log in to access your tasks';
    case '/signup':
      return '/ Sign Up';
    case '/tasks/new':
      return session ? '/ New Task' : '/ Log in to create a new task';
    case '/projects/new':
      return session ? '/ New Project' : '/ Log in to create a new project';
    case (path.match(/^\/tasks\/edit/) || {}).input:
      return session ? '/ Edit Task' : '/ Log in to edit the task';
    case (path.match(/^\/projects\/edit/) || {}).input:
      return session ? '/ Edit Project' : '/ Log in to edit the project';
    default:
      return ''
  }
};