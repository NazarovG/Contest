import { connect } from 'react-redux';
import { setSearchFilter, resetSearchFilter } from '../actions/projects';
import SearchBar from '../components/UI/SearchBar/SearchBar';

const mapStateToProps = state => {
  return {
    value: state.projectsFilter.search,
    disabled: state.projects.error || state.projects.fetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => dispatch(setSearchFilter(value)),
    onReset: () => dispatch(resetSearchFilter()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
