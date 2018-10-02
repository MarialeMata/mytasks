export default {
  projects: {
    loading: false,
    items: [],
    error: ''
  },
  tasks: {
    loading: false,
    items: [],
    error: ''
  },
  comments: {
    loading: false,
    items: [],
    error: ''
  },
  priorities: {
    loading: false,
    items: [],
    error: ''
  },
  statuses: {
    loading: false,
    items: [],
    error: ''
  },
  project: {
    id: 0,
    name: '',
    description: '',
    lastSeenAt: '',
    createdAt: '',
    editing: false,
    error: ''
  },
  task: {
    id: 0,
    title: '',
    description: '',
    deadline: '',
    projectId: 0,
    priorityId: 0,
    statusId: 0,
    editing: false,
    error: ''
  },
  comment: {
    text: '',
    taskId: 0,
    userId: 0,
    error: ''
  },
  user: {
    session: !!(localStorage.getItem('jwt')),
    error: '',
    signedUp: false,
    name: localStorage.getItem('name')
  },
  ui: {
    alertIsShowing: false,
    alertMessage: '',
    navbarIsOpen: false,
    dropdownIsOpen: false,
    loginForm: {
      credentials: {
        email: '',
        password: ''
      }
    },
    signUpForm: {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  }
}