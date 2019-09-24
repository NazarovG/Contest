import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconError from '../icons/Error';
import IconSearch from '../icons/Search';
import './Alert.scss';

const Alert = ({ variant, title, descr, action }) => {
  const classes = classNames('alert', `alert-${variant}`);
  return (
    <div className={classes}>
      <div className="alert__box">
        <i className="alert__icon">
          {variant === 'error' && <IconError width="48" height="48" />}
          {variant === 'search' && <IconSearch width="48" height="48" />}
        </i>
        {title && <div className="alert__title">{title}</div>}
        {descr && <div className="alert__descr">{descr}</div>}
        {action}
      </div>
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf(['error', 'search']).isRequired,
  title: PropTypes.string,
  descr: PropTypes.string,
  action: PropTypes.node,
};

Alert.defaultProps = {
  title: '',
  descr: '',
  action: null,
};

export default Alert;
