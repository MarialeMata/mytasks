import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import * as uiActions from '../../actions/uiActions';
import { EditProjectForm } from '../../components/project';
import { getProject } from '../../selectors';

class EditProject extends Component {

  constructor(props) {
    super(props);
    this.props.actions.setProject({ 
      error: '',
      id: this.props.project.id,
      name: this.props.project.name, 
      description: this.props.project.description
    });
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const projectData = this.props.projectData;
    projectData[field] = event.target.value;
    return this.props.actions.setProject(projectData);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.setProject(this.props.projectData);
    this.props.actions.editProject(this.props.projectId, { 
      name: this.props.name, 
      description: this.props.description
    }, 'edit');
    setTimeout(()=>{ this.props.actions.toggleAlert(true); }, 500);
  }

  render() {
    return (
      <EditProjectForm
        error={this.props.error}
        name={this.props.name} 
        description={this.props.description} 
        projects={this.props.projects}
        projectId={this.props.projectId}
        onEdit={this.onChange}
        onSend={this.onSubmit}
      />
    );
  }
};

EditProject.propTypes = {  
  project: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  let project = getProject(state, ownProps);
  return {
    project: project,
    projectId: state.project.id,
    projectData: state.project,
    error: state.project.error,
    name: state.project.name,
    description: state.project.description
  }
}

function mapDispatchToProps(dispatch) {  
  return { 
    actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
