import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

const CustomNavItem = ({ 
  isVisible, 
  isLink, 
  tag, 
  to, 
  text, 
  children, 
  exact 
}) => {  
  if (isVisible) {
    return (
      <NavItem>
        { 
          isLink 
          ? (<NavLink tag={tag} to={to} exact={exact}>{text}</NavLink>) 
          : (children)
        }
      </NavItem>
    );
  } else {
    return null;
  }
};

CustomNavItem.propTypes = {  
  isVisible: PropTypes.bool.isRequired,
  isLink: PropTypes.bool.isRequired,
  tag: PropTypes.func,
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  exact: PropTypes.bool
};

CustomNavItem.defaultProps = {
  isVisible: true,
  isLink: true,
  to: '',
  text: '',
  exact: false
}; 

export default CustomNavItem;
