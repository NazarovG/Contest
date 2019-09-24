import React from 'react';
import PropTypes from 'prop-types';
import './CircularLoader.scss';

const CircularLoader = ({ width, height }) => {
  const style = {
    width,
    height,
  };
  return (
    <div className="circular-loader">
      <i style={style}>
        <svg viewBox="22 22 44 44">
          <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" />
        </svg>
      </i>
    </div>
  );
};

CircularLoader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
CircularLoader.defaultProps = {
  width: '40px',
  height: '40px',
};
export default CircularLoader;
