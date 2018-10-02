import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as projectActions from '../../actions/projectActions';
import * as taskActions from '../../actions/taskActions';
import { Login } from '../user';
import { OverviewPage } from '../../components/overview';
import { 
  getProjectsByLastSeen, 
  getTasksByDeadline,
  getProjectCount,
  getTaskCount
} from '../../selectors';

class Overview extends Component {

  componentDidMount() {
    if (this.props.session) {
      this.props.actions.fetchProjects();
      this.props.actions.fetchTasks();
      this.props.actions.fetchPriorities();
      this.props.actions.fetchStatuses();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.session !== this.props.session && nextProps.session) {
      this.props.actions.fetchProjects();
      this.props.actions.fetchTasks();
      this.props.actions.fetchPriorities();
      this.props.actions.fetchStatuses();
    }
  }

  render() {
    if (this.props.session) {
      return (
        <OverviewPage 
          projects={this.props.projects} 
          tasks={this.props.tasks}
          projectCount={this.props.projectCount} 
          taskCount={this.props.taskCount}
          projectsLoading={this.props.projectsLoading}
          tasksLoading={this.props.tasksLoading}
        /> 
      )
    } else {
      return <Login />;
    }
  }

}

Overview.propTypes = {
  projects: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  priorities: PropTypes.array.isRequired,
  projectCount: PropTypes.number.isRequired,
  taskCount: PropTypes.number.isRequired,
  projectsLoading: PropTypes.bool.isRequired,
  tasksLoading: PropTypes.bool.isRequired,
  session: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    projects: getProjectsByLastSeen(state),
    tasks: getTasksByDeadline(state),
    priorities: state.priorities.items,
    projectCount: getProjectCount(state),
    taskCount: getTaskCount(state),
    projectsLoading: state.projects.loading,
    tasksLoading: state.tasks.loading,
    session: state.user.session 
  }
}

function mapDispatchToProps(dispatch) {  
  return { 
    actions: bindActionCreators(
      Object.assign({}, projectActions, taskActions), 
      dispatch
  )};
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
