import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

const Button = ({
  children,
  onClick,
  variant,
  size,
  disabled,
  active,
  className,
  ...attrs
}) => {
  const handleClick = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      onClick(e);
    }
  };
  const Tag = attrs.href ? 'a' : 'button';

  const classes = classNames(
    'btn',
    `btn-${variant}`,
    active && 'active',
    size.length && `btn-${size}`,
    className,
  );
  return (
    <Tag
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      {...attrs}
    >
      {children}
    </Tag>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'icon']),
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
};
Button.defaultProps = {
  onClick: () => {},
  variant: 'primary',
  size: '',
  disabled: false,
  active: false,
  className: null,
};

export default Button;
