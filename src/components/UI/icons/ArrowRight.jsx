import React from 'react';
import PropTypes from 'prop-types';
import getDisplayName from '../../../utilities/getDisplayName';

const ArrowRight = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
  );
};
ArrowRight.displayName = `${getDisplayName(ArrowRight)}(Icon)`;

ArrowRight.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowRight.defaultProps = {
  width: 24,
  height: 24,
};

export default ArrowRight;
