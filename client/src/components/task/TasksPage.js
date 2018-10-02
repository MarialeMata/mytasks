import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Row, Col } from 'reactstrap';
import TaskList from './TaskList';
import { ErrorMessage, CustomLoader } from '../common';
import { Link } from 'react-router-dom';

const TasksPage = ({ tasks, loading, error }) => {
  if (loading) {
    return <CustomLoader />;
  } else {
    if (error === '') {
      return (
        <Row>
          <Col md={{ size: 3 }} >
            <div className="position-fixed text-center">
              <h4>Actions:</h4>
              <hr />
              <Button 
                to="/tasks/new"
                tag={Link}
                className="mx-auto text-center pr-3 pl-3" 
                color="secondary">
                <i className="fas fa-plus"></i> Add Task
              </Button>
            </div>
          </Col>
          <Col md={{ size: 6 }}>
            {
              tasks.length === 0 
              ? (<h4 className="text-center">
                  <Badge className="text-center mx-auto p-2">0 Tasks</Badge>
                </h4>) 
              : (<TaskList tasks={tasks} />) 
            }
          </Col>
        </Row>
      );
    } else {
      return <ErrorMessage message={error} />;
    }
  }

};

TasksPage.propTypes = {  
  tasks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default TasksPage;
