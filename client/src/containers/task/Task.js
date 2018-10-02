import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/taskActions';
import * as uiActions from '../../actions/uiActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTask } from '../../selectors';
import { TaskPage } from '../../components/task';

class Task extends Component {

  constructor(props) {
    super(props);
    this.props.actions.setComment({ 
      text: '', 
      userId: this.props.userId, 
      taskId: this.props.taskId 
    });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const commentData = this.props.commentData;
    commentData[field] = event.target.value;
    return this.props.actions.setComment(commentData);
  }

  onSubmit(objectId, event) {
    event.preventDefault();
    if (event.target.id === 'deleteTaskButton') {
      if (window.confirm('Delete task?')) {
        this.props.actions.deleteTask(objectId);
        if (this.props.error !== '') {
          setTimeout(()=>{ this.props.actions.toggleAlert(true); }, 500);
        }
      }
    } else {
      if (window.confirm('Delete comment?')) {
        this.props.actions.deleteComment(objectId);
        if (this.props.error !== '') {
          setTimeout(()=>{ this.props.actions.toggleAlert(true); }, 500);
        }
      }
    }
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.actions.setComment(this.props.commentData);
      this.props.actions.addComment({ 
        text: this.props.text,
        userId: this.props.task.userId,
        taskId: this.props.task.id
      }, this.props.taskId);
      if (this.props.error !== '') {
        setTimeout(()=>{ this.props.actions.toggleAlert(true); }, 500);
      }
    }
  }

  render() {
    return (
      <TaskPage 
        task={this.props.task} 
        text={this.props.text} 
        onEditComment={this.onChange} 
        onDeleteComment={this.onSubmit}
        onDeleteTask={this.onSubmit} 
        onSendComment={this.onKeyPress}
        error={this.props.error} 
      />
    );
  }
};

Task.propTypes = {  
  task: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  taskId: PropTypes.number.isRequired,
  commentData: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  let task = getTask(state, ownProps);
  return { 
    task: task,
    userId: task.userId,
    taskId: task.id,
    commentData: state.comment,
    text: state.comment.text,
    error: state.comment.error,
  };
}

function mapDispatchToProps(dispatch) {  
  return { 
    actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
