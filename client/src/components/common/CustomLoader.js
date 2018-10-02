import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

const CustomLoader = () => {
  return (
    <ReactLoading 
      className='mx-auto' 
      type={'bubbles'} 
      color={'#384048'} 
      height={'10%'} 
      width={'10%'} 
    />
  );
};

CustomLoader.propTypes = {  
  iconClassName: PropTypes.string.isRequired,
  extraClassNames: PropTypes.string.isRequired
};

CustomLoader.defaultProps = {
  iconClassName: 'fas',
  extraClassNames: ''
}; 

export default CustomLoader;