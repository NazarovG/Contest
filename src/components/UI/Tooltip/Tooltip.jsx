import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tooltip.scss';
import { CSSTransition } from 'react-transition-group';

const Tooltip = ({ children, trigger, position }) => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
  };
  const classes = classNames('tooltip', position);
  return (
    <div className="tooltip-container">
      <span className="tooltip-trigger" onMouseEnter={show} onMouseLeave={hide}>
        {trigger}
      </span>
      <CSSTransition
        in={visible}
        unmountOnExit
        timeout={{
          enter: 100,
          exit: 100,
        }}
        className={classes}
        classNames="fade"
      >
        <div>{children}</div>
      </CSSTransition>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};
Tooltip.defaultProps = {
  position: 'top',
};

export default Tooltip;
