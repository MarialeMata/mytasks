import React from 'react';
import PropTypes from 'prop-types';
import { CustomAlert } from '../../components/common';
import { 
  Button,
  Card, 
  CardHeader, 
  CardBody, 
  Row, 
  Col, 
  Form, 
  FormGroup, 
  Input, 
  Label 
} from 'reactstrap';
import * as Datetime from 'react-datetime';
import moment from 'moment';
import '../../react-datetime.css';

const EditTaskForm = ({ 
  error, 
  title, 
  description, 
  projects, 
  projectId, 
  deadline, 
  priorities, 
  priorityId, 
  statuses, 
  statusId, 
  onEdit, 
  onSend 
}) => {  
  return (
    <div>
      <CustomAlert color="danger" message={error} />
      <Row className="mt-4 pb-2">
        <Col md={{ size: 6, offset: 3 }}>
          <Card body outline className="shadow-sm p-3 mb-5">
            <CardHeader>
              Edit the task details below
            </CardHeader>
            <CardBody>
              <Form>

                <FormGroup>
                  <Label for="taskProject">Project:</Label>
                  <Input 
                    type="select" 
                    name="projectId" 
                    id="taskProject" 
                    onChange={onEdit} 
                    defaultValue="">
                    <option value={projectId} disabled>Select</option>
                    {projects.map(project =>
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    )};
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="taskTitle">Title:</Label>
                  <Input 
                    type="text" 
                    name="title" 
                    id="taskTitle" 
                    placeholder="Enter a title" 
                    value={title} 
                    onChange={onEdit} 
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="taskDescription">Description:</Label>
                  <Input 
                    type="text" 
                    name="description" 
                    id="taskDescription" 
                    placeholder="Enter a description" 
                    value={description} 
                    onChange={onEdit} 
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="taskDeadline">Deadline:</Label>
                  <Datetime 
                    id="taskDeadline" 
                    value={moment(deadline)} 
                    inputProps={{ placeholder: 'Select a date', name: 'deadline' }} 
                    onChange={onEdit}
                    input={false}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="taskPriority">Priority:</Label>
                  <Input 
                    type="select" 
                    name="priorityId" 
                    id="taskPriority" 
                    onChange={onEdit} 
                    value={priorityId}>
                    <option disabled>Select</option>
                    {priorities.map(priority =>
                      <option key={priority.id} value={priority.id}>
                        {priority.name}
                      </option>
                    )};
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="taskStatus">Status:</Label>
                  <Input 
                    type="select" 
                    name="statusId" 
                    id="taskStatus" 
                    onChange={onEdit} 
                    value={statusId}>
                    <option disabled>Select</option>
                    {statuses.map(status =>
                      <option key={status.id} value={status.id}>
                        {status.name}
                      </option>
                    )};
                  </Input>
                </FormGroup>

                <Button onClick={onSend} className="btn-block mt-2 mb-2">
                  <i className="fas fa-save"></i> Save Task
                </Button>
              </Form>
              
            </CardBody>
            
          </Card>
        </Col>
      </Row>
    </div>
  );
};

EditTaskForm.propTypes = { 
  error: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  projectId: PropTypes.number.isRequired,
  deadline: PropTypes.string,
  priorities: PropTypes.array.isRequired,
  priorityId: PropTypes.number.isRequired,
  statuses: PropTypes.array.isRequired,
  statusId: PropTypes.number.isRequired,
  onEdit: PropTypes.func,
  onSend: PropTypes.func
};

export default EditTaskForm;