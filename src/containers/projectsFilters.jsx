import React from 'react';
import { connect } from 'react-redux';
import { setMultiFilter } from '../actions/projects';
import Checkbox from '../components/UI/Checkbox/Checkbox';

const ProjectsFilters = ({ setFilter, filters, disabled }) => {
  const handleChange = target => {
    setFilter(target.value, target.checked);
  };

  const createCheckbox = filters.map(item => {
    const { label, value, checked } = item;
    return (
      <Checkbox
        checked={checked}
        label={label}
        value={value}
        key={value}
        disabled={disabled}
        onChange={handleChange}
      />
    );
  });
  return createCheckbox;
};

const mapStateToProps = state => {
  return {
    filters: state.projectsFilter.multi,
    disabled: state.projects.error || state.projects.fetching,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setFilter: (value, checked) => dispatch(setMultiFilter(value, checked)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectsFilters);
