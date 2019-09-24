import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './FormInput.scss';

const FormInput = ({
  onChange,
  value,
  id,
  label,
  prepend,
  append,
  disabled,
  ...attrs
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = e => {
    onChange(e.target);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };
  const classes = classNames('form-input', disabled && 'disabled');
  const inputGroupClasses = classNames(
    'form-input__group',
    prepend && 'prepend',
    append && 'append',
    isFocus && 'isFocus',
    disabled && 'disabled',
  );
  return (
    <div className={classes}>
      {label && (
        <label htmlFor={id} className="form-input__label">
          {label}
        </label>
      )}
      <div className={inputGroupClasses}>
        {prepend && (
          <div className="form-input__prepend">
            <i className="icon">{prepend}</i>
          </div>
        )}
        <input
          className="form-input__control"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          type="text"
          name={id}
          id={id}
          disabled={disabled}
          {...attrs}
        />
        {append && (
          <div className="form-input__append">
            <i className="icon">{append}</i>
          </div>
        )}
      </div>
    </div>
  );
};
FormInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  prepend: PropTypes.node,
  append: PropTypes.node,
  disabled: PropTypes.bool,
};

FormInput.defaultProps = {
  onChange: () => {},
  value: '',
  label: '',
  prepend: null,
  append: null,
  disabled: false,
};

export default FormInput;
