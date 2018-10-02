import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import { 
  Button, 
  Navbar, 
  Nav, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse 
} from 'reactstrap';
import { CustomNavItem } from './';

const CustomNavbar = ({ userStatus, toggler, isOpen, logout, userName }) => {

  return (
    <Navbar dark expand="md" className="shadow-sm sticky-top">

      <NavbarBrand tag={RRNavLink} to='/' className="my-tasks">
        <strong>MyTasks</strong>
      </NavbarBrand>

      <NavbarToggler onClick={toggler} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <CustomNavItem tag={RRNavLink} to='/' text='Home' exact={true} />
          <CustomNavItem 
            tag={RRNavLink} 
            to='/signup' 
            text='Sign Up' 
            isVisible={!userStatus} 
          />
          <CustomNavItem tag={RRNavLink} to='/projects' text='Projects'/>
          <CustomNavItem tag={RRNavLink} to='/tasks' text='Tasks'/>
        </Nav>
        <Nav className="ml-auto" navbar>
          <CustomNavItem isLink={false} isVisible={userStatus}>
            <span className="navbar-text mr-4">Welcome, {userName}!</span>
          </CustomNavItem>
          <CustomNavItem isLink={false} isVisible={userStatus}>
            <Button tag={RRNavLink} to='/' onClick={logout}>
              <i className="fas fa-sign-out-alt"></i> Sign Out
            </Button>
          </CustomNavItem>
        </Nav>
      </Collapse>

    </Navbar>
  );
};

CustomNavbar.propTypes = {  
  userStatus: PropTypes.bool.isRequired,
  toggler: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  logout: PropTypes.func,
  userName: PropTypes.string
};

export default CustomNavbar;
