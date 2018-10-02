import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Row, Col } from 'reactstrap';
import ProjectList from './ProjectList';
import { Link } from 'react-router-dom';
import { ErrorMessage, CustomLoader } from '../common';

const ProjectsPage = ({ projects, loading, error }) => {
  if (loading) {
    return <CustomLoader />;
  } else {
    if (error === '') {
      return (
        <Row>
          <Col md={{ size: 3 }}>
            <div className="position-fixed text-center">
            <h4>Actions:</h4>
            <hr />
            <Button 
              className="mx-auto text-center pr-3 pl-3" 
              color="secondary"
              to="/projects/new"
              tag={Link}>
              <i className="fas fa-plus"></i> Add Project
            </Button>
            </div>
          </Col>
          <Col md={{ size: 6 }}>
            { 
              projects.length === 0 
              ? (
                <h4 className="text-center">
                  <Badge className="text-center mx-auto p-2">0 Projects</Badge>
                </h4>
                ) 
              : <ProjectList projects={projects} />
            }
          </Col>
        </Row>
      );
    } else {
      return <ErrorMessage message={error} />;
    }
  }
};

ProjectsPage.propTypes = {  
  projects: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default ProjectsPage;
