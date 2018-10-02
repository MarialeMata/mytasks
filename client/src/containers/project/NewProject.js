import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/projectActions';
import { bindActionCreators } from 'redux';
import * as uiActions from '../../actions/uiActions';
import { NewProjectForm } from '../../components/project';

class NewProject extends Component {

  constructor(props) {
    super(props);
    this.props.actions.setProject({ 
      id: 0, 
      name: '', 
      description: '', 
      error: '' 
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
    this.props.actions.addProject({ 
      name: this.props.name, 
      description: this.props.description, 
      userId: this.props.userId,
      lastSeenAt: new Date()
    });
    setTimeout(()=>{ this.props.actions.toggleAlert(true); }, 500);
  }

  render() {
    return (
      <NewProjectForm 
        error={this.props.error}
        name={this.props.name} 
        description={this.props.description} 
        onEdit={this.onChange}
        onSend={this.onSubmit}
      />
    );
  }
};

NewProject.propTypes = {  
  projectData: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    projectData: state.project,
    error: state.project.error,
    name: state.project.name,
    description: state.project.description,
    userId: localStorage.getItem('id')
  }
}

function mapDispatchToProps(dispatch) {  
  return { 
    actions: bindActionCreators(Object.assign({}, actions, uiActions), dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
