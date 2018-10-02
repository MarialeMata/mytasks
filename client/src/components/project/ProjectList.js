import React from 'react';
import { 
  Badge,
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProjectList = ({ projects }) => {  

  return (
      <ListGroup>
        {projects.map(project => 
          <ListGroupItem 
            to={"/projects/"+project.id+"/projects"} 
            tag={Link} 
            className="shadow-sm mb-3 p-3 bg-white project-item" 
            key={project.id}>
            
            <ListGroupItemHeading>
              <strong>{project.name}</strong>
              <span className="float-right">
                <Badge className="p-2" color="info">
                  <i className="fas fa-tasks"></i>
                  {" "+project.taskCount+" tasks"}
                </Badge>
              </span>
            </ListGroupItemHeading>
            <ListGroupItemText className="mt-4">
              <small>
                <strong>Description: </strong>
                <em>
                  {
                    project.description === null || project.description === '' 
                      ? 'No description' 
                      : project.description
                  }
                </em>
              </small>
            </ListGroupItemText>
            <ListGroupItemText className="float-right">
              <small>
                <i className="fas fa-calendar"></i>
                <strong>{ " Created: " }</strong>
                <Moment fromNow>{project.createdAt}</Moment>
              </small>
            </ListGroupItemText>
          </ListGroupItem>
        )}
      </ListGroup>
  );
};

ProjectList.propTypes = {  
  projects: PropTypes.array.isRequired
};

export default ProjectList;