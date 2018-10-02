import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, Button, Row, Col } from 'reactstrap';
import { TaskList } from '../task';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const ProjectPage = ({ project, tasks, onDeleteProject }) => {
  return (
    <div>

      <Row>
        <Col md={{ size: 3 }} >
          <div className="position-fixed text-center">
            <h4>Actions:</h4>
            <hr />
            <Button 
              className="mx-auto text-center pr-3 pl-3 btn-block" 
              color="secondary"
              tag={Link}
              to="/tasks/new">
              <i className="fas fa-plus"></i> Add Task
            </Button>
            <Button
              className="mx-auto text-center pr-3 pl-3 btn-block"
              color="primary"
              tag={Link}
              to={'/projects/edit/'+project.id}>
              <i className="fas fa-edit"></i> Edit Project
            </Button>
            <Button 
              className="mx-auto text-center pr-3 pl-3 btn-block" 
              color="danger"
              id="deleteProjectButton"
              onClick={(event) => onDeleteProject(project.id, event)}>
              <i className="fas fa-trash-alt"></i> Delete Project
            </Button>
          </div>
        </Col>
      </Row>


      <Row>
        <Col md={{ size: 6, offset: 3}}>
          <Card className="shadow-sm p-3 mb-5">

            <CardHeader>
              <h3 className="text-center"><strong>{project.name}</strong></h3>
            </CardHeader>

            <CardBody>
              <p className="text-center">
                <strong>Description: </strong> 
                {
                  project.description === null || project.description === '' 
                  ? "No description" 
                  : project.description
                }
              </p>
              <p className="text-center">
                <strong>Created: </strong>
                <Moment format="YYYY-MM-DD hh:mm A">{project.createdAt}</Moment>
              </p>
              <h5 className="text-center mb-3 mt-3"><strong>Tasks:</strong></h5>
              {
                tasks.length === 0 
                ? <p className="text-center">No tasks to show</p> 
                : <TaskList tasks={tasks} />
              }
            </CardBody>

          </Card>
        </Col>
      </Row>


    </div>
  );
};

ProjectPage.propTypes = {  
  project: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  onDeleteProject: PropTypes.func
}

export default ProjectPage;