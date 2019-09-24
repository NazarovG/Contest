import React from 'react';
import PropTypes from 'prop-types';
import getDisplayName from '../../../utilities/getDisplayName';

const ArrowLeft = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </svg>
  );
};

ArrowLeft.displayName = `${getDisplayName(ArrowLeft)}(Icon)`;

ArrowLeft.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowLeft.defaultProps = {
  width: 24,
  height: 24,
};

export default ArrowLeft;
