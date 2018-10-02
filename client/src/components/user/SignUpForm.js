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
  Input
} from 'reactstrap';

const SignUpForm = ({ 
  signedUp, 
  alertMessage, 
  email, 
  firstName, 
  lastName, 
  password, 
  passwordConfirmation, 
  onEdit, 
  onSend 
}) => {  
  return (
    <div>        
      <CustomAlert 
        color={signedUp ? "success" : "danger"} 
        message={alertMessage} 
      />
      <Row className="mt-4 pb-2">
        <Col md={{ size: 4, offset: 4 }}>
          <Card className="shadow-sm p-3 mb-5">
            <CardHeader>
              Complete the fields below to create your user account:
            </CardHeader>
            <CardBody>    
              <Form>
                <FormGroup>
                  <Input 
                    type="email" 
                    name="email" 
                    id="signupEmail" 
                    placeholder="Email" 
                    value={email} 
                    onChange={onEdit} 
                  />
                </FormGroup>
                <FormGroup>
                  <Input 
                    type="text" 
                    name="firstName" 
                    id="signupFirstname" 
                    placeholder="First name" 
                    value={firstName} 
                    onChange={onEdit} 
                  />
                </FormGroup>
                <FormGroup>
                  <Input 
                    type="text" 
                    name="lastName" 
                    id="signupLastname" 
                    placeholder="Last name" 
                    value={lastName} 
                    onChange={onEdit} 
                  />
                </FormGroup>
                <FormGroup>
                  <Input 
                    type="password" 
                    name="password" 
                    id="signupPassword" 
                    placeholder="Password" 
                    value={password} 
                    onChange={onEdit} 
                  />
                </FormGroup>
                <FormGroup>
                  <Input 
                    type="password" 
                    name="passwordConfirmation" 
                    id="signupRepeatPassword" 
                    placeholder="Repeat password" 
                    value={passwordConfirmation} 
                    onChange={onEdit} 
                  />
                </FormGroup>
                <Button onClick={onSend} className="btn-block mt-2 mb-2">
                  <i className="fas fa-user-plus"></i> Sign Up
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

SignUpForm.propTypes = {  
  alertMessage: PropTypes.string.isRequired,
  signedUp: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired
};

export default SignUpForm;