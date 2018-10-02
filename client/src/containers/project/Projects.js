import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import { Login } from '../user';
import { ProjectsPage } from '../../components/project';

class Projects extends Component {

  componentDidMount() {
    if (this.props.session) {
      this.props.actions.fetchProjects();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.session !== this.props.session && nextProps.session) {
      this.props.actions.fetchProjects();
    }
  }

  render() {
    if (this.props.session) {
      return (
        <ProjectsPage 
          loading={this.props.loading}
          projects={this.props.projects} 
          error={this.props.error} 
        />
      );
    } else {
      return <Login />;
    }
  }
  
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  session: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return { 
    projects: state.projects.items, 
    loading: state.tasks.loading,
    error: state.tasks.error,
    session: state.user.session
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
