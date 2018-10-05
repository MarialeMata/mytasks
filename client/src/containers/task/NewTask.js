import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/taskActions';
import * as uiActions from '../../actions/uiActions';
import { NewTaskForm } from '../../components/task';
import { getProjectCount } from '../../selectors';
let moment = require('moment');
if ('default' in moment) {
    moment = moment['default'];
}

class NewTask extends Component {

  constructor(props) {
    super(props);
    this.props.actions.setTask({ 
      id: 0, 
      title: '', 
      description: '', 
      deadline: '', 
      projectId: '', 
      priorityId: '', 
      statusId: '', 
      error: '' 
    });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const taskData = this.props.taskData;
    if (moment.isMoment(event)) {
      let deadline = event.format();
      taskData['deadline'] = deadline;
    } else {
      const field = event.target.name;
      taskData[field] = event.target.value;
    }
    return this.props.actions.setTask(taskData);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.setTask(this.props.taskData);
    this.props.actions.addTask({ 
      title: this.props.title, 
      description: this.props.description, 
      deadline: this.props.deadline, 
      projectId: this.props.projectId,
      priorityId: this.props.priorityId,
      statusId: this.props.statusId,
      userId: this.props.userId
    });
    setTimeout(()=>{ this.props.actions.toggleAlert(true); }, 500);
  }

  render() {
    if (this.props.projectCount === 0) {
      return (
        <h5 className="text-center">
          Please create a project to add a new task.
        </h5>
      );
    } else {
      return (
        <NewTaskForm
          error={this.props.error} 
          title={this.props.title} 
          description={this.props.description} 
          onEdit={this.onChange}
          onSend={this.onSubmit}
          projects={this.props.projects}
          priorities={this.props.priorities}
          statuses={this.props.statuses}
          deadline={this.props.deadline}
        />
      );
    }
  }
};

NewTask.propTypes = {  
  projectCount: PropTypes.number.isRequired,
  taskData: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priorities: PropTypes.array.isRequired,
  statuses: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    projectCount: getProjectCount(state),
    taskData: state.task,
    error: state.task.error,
    title: state.task.title,
    description: state.task.description,
    priorities: state.priorities.items,
    statuses: state.statuses.items,
    projects: state.projects.items,
    projectId: state.task.projectId,
    priorityId: state.task.priorityId,
    statusId: state.task.statusId,
    userId: localStorage.getItem('id'),
    deadline: state.task.deadline
  }
}

function mapDispatchToProps(dispatch) {  
  return { 
    actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
