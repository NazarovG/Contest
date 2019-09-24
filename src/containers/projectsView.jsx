import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fetchProjects } from '../actions/projects';
import {
  makeGetVisibleProjects,
  getVisibleProjectsCount,
} from '../selectors/projects';
import withEither from '../hocs/withEither';
import withPagination from '../hocs/withPagination';
import ProjectsList from '../components/ProjectsPanel/ProjectsList/ProjectsList';
import CircularLoader from '../components/UI/loaders/CircularLoader/CircularLoader';
import ErrorAlert from '../components/ProjectsPanel/ProjectsAlerts/ErrorAlert';
import EmptySearchAlert from '../components/ProjectsPanel/ProjectsAlerts/EmptySearchAlert';

const fetchingConditionFn = props => props.fetching;
const errorConditionFn = props => props.error;
const emptySearchConditionFn = props => props.emptySearch;

const WithConditionalRender = compose(
  withEither(fetchingConditionFn, CircularLoader),
  withEither(errorConditionFn, ErrorAlert),
  withEither(emptySearchConditionFn, EmptySearchAlert),
  withPagination(4),
)(ProjectsList);

const ProjectsView = ({
  projects,
  fetching,
  error,
  requestProjects,
  emptySearch,
}) => {
  useEffect(() => {
    requestProjects();
  }, [requestProjects]);
  return (
    <>
      <WithConditionalRender
        fetching={fetching}
        error={error}
        emptySearch={emptySearch}
        action={requestProjects}
        data={projects}
        page={0}
      />
    </>
  );
};

ProjectsView.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  emptySearch: PropTypes.bool.isRequired,
  requestProjects: PropTypes.func.isRequired,
};

const makeMapStateToProps = () => {
  const getVisibleProjects = makeGetVisibleProjects();
  const mapStateToProps = store => {
    return {
      projects: getVisibleProjects(store),
      fetching: store.projects.fetching,
      error: store.projects.error,
      emptySearch: getVisibleProjectsCount(store) < 1,
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return {
    requestProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(ProjectsView);
