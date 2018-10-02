import React from 'react';
import PropTypes from 'prop-types';

const CustomHeader = ({ subtitle }) => {
  return (
    <div className='mb-4'>
      <h1 className="text-center my-tasks mb-3">
        MyTasks <small>{subtitle}</small>
      </h1>
    </div>
  );
};

CustomHeader.propTypes = {  
  subtitle: PropTypes.string.isRequired
};

CustomHeader.defaultProps = {
  subtitle: ''
}; 

export default CustomHeader;