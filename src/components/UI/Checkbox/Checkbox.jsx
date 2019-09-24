import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icons/Checkbox';
import IconEmpty from '../icons/CheckboxEmpty';
import './Checkbox.scss';

const Checkbox = ({ onChange, checked, value, label, disabled, className }) => {
  const handleChange = e => {
    if (onChange) {
      onChange(e.target);
    }
  };
  const classes = classNames(
    'form-check',
    disabled && 'disabled',
    checked && 'checked',
    className,
  );
  return (
    <div className={classes}>
      <label>
        <div className="form-check__icon">
          <input
            className="form-check__input"
            type="checkbox"
            value={value}
            onChange={handleChange}
            disabled={disabled}
            checked={checked}
          />
          <i>
            {checked ? (
              <Icon width="28" height="28" />
            ) : (
              <IconEmpty width="28" height="28" />
            )}
          </i>
        </div>
        {label && <div className="form-check__label">{label}</div>}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  onChange: null,
  checked: false,
  value: '',
  label: '',
  disabled: false,
  className: '',
};

export default Checkbox;
