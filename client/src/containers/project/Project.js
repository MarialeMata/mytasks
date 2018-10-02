import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import * as uiActions from '../../actions/uiActions';
import { ProjectPage } from '../../components/project';
import { getProject, getProjectTasks } from '../../selectors';

class Project extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.props.actions.editProject(
      this.props.project.id, { lastSeenAt: new Date() }, 'show'
    );
  }

    onSubmit(objectId, event) {
    event.preventDefault();
    if (event.target.id === 'deleteProjectButton') {
      if (window.confirm('Delete project?')) {
        this.props.actions.deleteProject(objectId);
        if (this.props.error !== '') {
          setTimeout(()=>{ this.props.actions.toggleAlert(true); }, 500);
        }
      }
    }
  }

  render() {
    return (
      <ProjectPage 
        project={this.props.project} 
        tasks={this.props.tasks}
        onDeleteProject={this.onSubmit} />
    );
  }

};

Project.propTypes = {  
  project: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    project: getProject(state, ownProps),
    tasks: getProjectTasks(state, ownProps)
  };
}

function mapDispatchToProps(dispatch) {  
  return { 
    actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
