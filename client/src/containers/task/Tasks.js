import React, { Component } from 'react';
import { Login } from '../user';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/taskActions';
import { TasksPage } from '../../components/task';

class Tasks extends Component {

  componentDidMount() {
    if (this.props.session) {
      this.props.actions.fetchTasks();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.session !== this.props.session && nextProps.session) {
      this.props.actions.fetchTasks();
    }
  }

  render() {
    if (this.props.session) {
      return (
        <TasksPage 
          tasks={this.props.tasks} 
          loading={this.props.loading} 
          error={this.props.error}
        />
      );
    } else {
      return <Login />;
    }
  }

}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  session: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return { 
    tasks: state.tasks.items,
    loading: state.tasks.loading,
    error: state.tasks.error,
    session: state.user.session,
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
