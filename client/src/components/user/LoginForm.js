import React from 'react';
import PropTypes from 'prop-types';
import { CustomAlert } from '../../components/common';
import { 
  Button,
  Card, 
  CardHeader, 
  CardBody, 
  CardLink, 
  Row, 
  Col, 
  Form, 
  FormGroup, 
  Input, 
  Label 
} from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginForm = ({ email, password, error, onEdit, onSend }) => {  
  return (
    <div>
      <CustomAlert color="danger" message={error} />
      <Row className="mt-4 pb-2">
        <Col md={{ size: 4, offset: 4 }}>
          <Card body outline className="shadow-sm p-3 mb-5">
            <CardHeader>
              Log in below to access your projects and tasks:
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Input 
                    type="email" 
                    name="email" 
                    id="loginEmail" 
                    placeholder="Email" 
                    value={email} 
                    onChange={onEdit}
                  />
                </FormGroup>
                <FormGroup>
                  <Input 
                    type="password" 
                    name="password" 
                    id="loginPassword" 
                    placeholder="Password" 
                    value={password} 
                    onChange={onEdit}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="loginRemember" />{' '}
                      Remember me
                  </Label>
                </FormGroup>
                <Button onClick={onSend} className="btn-block mt-2 mb-2">
                  <i className="fas fa-sign-in-alt"></i> Log In
                </Button>
              </Form>
              Not registered? 
              <CardLink to='/signup' tag={Link}> Create user account</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

LoginForm.propTypes = {  
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onSend: PropTypes.func
};

export default LoginForm;