import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

const Avatar = ({ children }) => {
  return <div className="avatar">{children}</div>;
};

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Avatar;
