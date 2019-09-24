import React from 'react';
import PropTypes from 'prop-types';
import IconSearch from '../icons/Search';
import IconCancel from '../icons/Cancel';
import Input from '../FormInput/FormInput';
import Button from '../Button/Button';

const SearchBar = ({ value, onChange, onReset, disabled }) => {
  const handleChange = target => {
    onChange(target.value);
  };
  const currentAppend =
    value.length > 0 ? (
      <Button type="button" onClick={onReset} variant="icon">
        <IconCancel width="20" height="20" />
      </Button>
    ) : (
      <IconSearch />
    );
  return (
    <div className="search-bar">
      <Input
        value={value}
        placeholder="Поиск..."
        id="search-projects"
        onChange={handleChange}
        append={currentAppend}
        disabled={disabled}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  disabled: PropTypes.bool,
};
SearchBar.defaultProps = {
  value: '',
  onChange: () => {},
  onReset: () => {},
  disabled: false,
};

export default SearchBar;
