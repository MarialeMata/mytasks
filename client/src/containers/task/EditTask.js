import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/taskActions';
import * as uiActions from '../../actions/uiActions';
import { EditTaskForm } from '../../components/task';
import { getTask } from '../../selectors';

class EditTask extends Component {

  constructor(props) {
    super(props);
    this.props.actions.setTask({ 
      error: '',
      id: this.props.task.id,
      title: this.props.task.title, 
      description: this.props.task.description, 
      deadline: this.props.task.deadline, 
      projectId: this.props.task.projectId, 
      priorityId: this.props.task.priorityId, 
      statusId: this.props.task.statusId
    });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const taskData = this.props.taskData;
    if (event.constructor.name === 'SyntheticEvent') {
      const field = event.target.name;
      taskData[field] = event.target.value;
    } else {
      let deadline = event.format();
      taskData["deadline"] = deadline;
    }
    return this.props.actions.setTask(taskData);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.setTask(this.props.taskData);
    this.props.actions.editTask(this.props.taskId, { 
      title: this.props.title, 
      description: this.props.description, 
      deadline: this.props.deadline, 
      projectId: this.props.projectId,
      priorityId: this.props.priorityId,
      statusId: this.props.statusId,
    });
    setTimeout(()=>{ this.props.actions.toggleAlert(true); }, 500);
  }

  render() {
    return (
      <EditTaskForm
        error={this.props.error} 
        title={this.props.title} 
        description={this.props.description} 
        projects={this.props.projects}
        projectId={this.props.projectId}
        deadline={this.props.deadline}
        priorities={this.props.priorities}
        priorityId={this.props.priorityId}
        statuses={this.props.statuses}
        statusId={this.props.statusId}
        onEdit={this.onChange}
        onSend={this.onSubmit}
      />
    );
  }
};

EditTask.propTypes = {  
  task: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  let task = getTask(state, ownProps);
  return {
    task: task,
    taskId: state.task.id,
    taskData: state.task,
    error: state.task.error,
    title: state.task.title,
    description: state.task.description,
    projects: state.projects.items,
    projectId: state.task.projectId,
    priorities: state.priorities.items,
    priorityId: state.task.priorityId,
    statuses: state.statuses.items,
    statusId: state.task.statusId,
    deadline: state.task.deadline
  }
}

function mapDispatchToProps(dispatch) {  
  return { 
    actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
