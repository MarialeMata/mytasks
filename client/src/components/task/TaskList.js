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

const TaskList = ({ tasks }) => {
  return (
      <ListGroup>
        {tasks.map(task => 
          <ListGroupItem 
            className={
              task.status === 'Done' 
                ? "completed-task shadow-sm mb-3 p-3 bg-light task-item" 
                : "shadow-sm mb-3 p-3 bg-white task-item"
            } 
            key={task.id}>
            
            <ListGroupItemHeading className="ml-2 mr-2">
              <Link to={"/tasks/"+task.id+"/tasks"} className="task-list-link">
                <strong>{task.title}</strong>
              </Link>
              <small className="float-right">
                In <Link 
                  to={"/projects/"+task.projectId+"/tasks"} 
                  className="task-list-link">
                  <em>{task.projectName}</em>
                </Link>
              </small>
            </ListGroupItemHeading>

            <ListGroupItemText>

              <span className="float-left ml-2">
                <small>
                <i className="fas fa-clock"></i><strong> Due: </strong>
                 { 
                  task.deadline === '' 
                  || task.deadline === null 
                  || task.deadline === undefined 
                    ? ("Date not set") 
                    : (<Moment format="YYYY-MM-DD hh:mm A">{task.deadline}</Moment>)
                  }
                 
                 </small>
              </span>

              <Badge 
                className="float-right ml-2 p-2" 
                color={task.commentCount === 0 ? "secondary" : "info"}>
                <i className="fas fa-comments"></i> {task.commentCount}
              </Badge>

              <Badge 
                className="float-right mr-2 ml-2 p-2" 
                color={task.status === 'Active' ? "danger" : "secondary"}>
                {task.status}
              </Badge>

              <Badge className="float-right mr-2 ml-2 p-2" color={
                task.priority === 'High' 
                  ? "danger" 
                  : (task.priority === 'Medium' ? "info" : "light")
              }>
                <em>{task.priority} priority</em>
              </Badge>
              <span className="clearfix" />
            </ListGroupItemText>

            {task.description && (
              <ListGroupItemText>
                <small className="float-left ml-2">
                  <strong>Description: </strong>{task.description}
                </small>
              </ListGroupItemText>
            )}

          </ListGroupItem>
        )}
      </ListGroup>
  );
};

TaskList.propTypes = {  
  tasks: PropTypes.array.isRequired
};

export default TaskList;