import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {  
  return <h5 className="text-center text-danger">Error: {message}</h5>;
};

ErrorMessage.propTypes = {  
  message: PropTypes.string.isRequired
};

ErrorMessage.defaultProps = {
  message: 'Error',
}; 

export default ErrorMessage;