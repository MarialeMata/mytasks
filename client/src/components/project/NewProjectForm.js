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

const NewProjectForm = ({ name, description, error, onEdit, onSend }) => {  
  return (
    <div>
      <CustomAlert color="danger" message={error} />
      <Row className="mt-4 pb-2">
        <Col md={{ size: 6, offset: 3 }}>
          <Card body outline className="shadow-sm p-3 mb-5">
            <CardHeader>
              Enter the project details below
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="projectTitle">Title:</Label>
                  <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Enter a name" 
                    value={name} 
                    onChange={onEdit} 
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="projectDescription">Description:</Label>
                  <Input 
                    type="text" 
                    name="description" 
                    id="projectDescription" 
                    placeholder="Enter a description" 
                    value={description} 
                    onChange={onEdit} 
                  />
                </FormGroup>
                <Button onClick={onSend} className="btn-block mt-2 mb-2">
                  <i className="fas fa-save"></i> Save Project
                </Button>
              </Form>
              
            </CardBody>
            
          </Card>
        </Col>
      </Row>
    </div>
  );
};

NewProjectForm.propTypes = { 
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onSend: PropTypes.func
};

export default NewProjectForm;