import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { CustomAlert } from '../common';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const TaskPage = ({ 
  task, 
  text, 
  onEditComment, 
  onSendComment, 
  onDeleteComment, 
  onDeleteTask, 
  error 
}) => {

  return (
    <div>

      <CustomAlert color="danger" message={error} />

      <Row>

        <Col md={{ size: 3 }} >
          <div className="position-fixed text-center">
            <h4>Actions:</h4>
            <hr />
            <Button 
              className="mx-auto text-center pr-3 pl-3 btn-block" 
              color="primary"
              tag={Link}
              to={'/tasks/edit/'+task.id}>
              <i className="fas fa-edit"></i> Edit Task
            </Button>
            <Button 
              className="mx-auto text-center pr-3 pl-3 btn-block" 
              color="danger"
              id="deleteTaskButton"
              onClick={(event) => onDeleteTask(task.id, event)}>
              <i className="fas fa-trash-alt"></i> Delete Task
            </Button>
          </div>
        </Col>

        <Col md={{ size: 6 }}>
          <Card className="shadow-sm p-3 mb-5">
          
            <CardHeader>
              <h3 className="text-center"><strong>{task.title}</strong></h3>
            </CardHeader>

            <CardBody>
              <h5 className="text-center mt-3">
                <strong>In Project:</strong> {task.projectName}
              </h5>
              <p className="text-center mt-3">
                <strong>Description: </strong>
                {task.description ? (task.description) : ("No description")}
              </p>
              <p className="text-center">
                <strong>Deadline: </strong>
                {
                  task.deadline 
                  ? <Moment format="YYYY-MM-DD hh:mm A">{task.deadline}</Moment> 
                  : "Not set"
                }
              </p>
              <p className="text-center"><strong>Priority: </strong>{task.priority}</p>
              <p className="text-center"><strong>Status: </strong>{task.status}</p>
              <h5 className="text-center"><strong>Comments:</strong></h5>
              {
                task.commentCount === 0 
                ? (<p className="text-center">No comments to show</p>) 
                : (task.comments.map(comment => 
                  <p key={comment.id} className="text-center">
                    <strong>{comment.author}</strong>
                    {" "} on <Moment format="YYYY-MM-DD hh:mm A">
                    {comment.createdAt}</Moment>: {comment.text}
                    <Button 
                      onClick={(event) => onDeleteComment(comment.id, event)} 
                      color="link">
                      <i className="fas fa-trash-alt text-danger"></i>
                    </Button>
                  </p>
              ))
              }
              <Form>
                <FormGroup>
                  <Input 
                    type="text" 
                    name="text" 
                    id="taskComment" 
                    placeholder="Type a comment and press ENTER to send" 
                    onChange={onEditComment} 
                    onKeyPress={onSendComment}
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>

      </Row>
    </div>
  );
};

TaskPage.propTypes = {  
  task: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  onEditComment: PropTypes.func,
  onSendComment: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onDeleteComment: PropTypes.func,
  error: PropTypes.string.isRequired
};

export default TaskPage;
