import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  SET_SEARCH_FILTER,
  SET_MULTI_FILTER,
} from '../constants/projects';

import getProjects from '../api/projects';

const projectsRequest = () => ({
  type: FETCH_PROJECTS_REQUEST,
});

const projectsSuccess = data => ({
  type: FETCH_PROJECTS_SUCCESS,
  data,
});

const projectsFailure = () => ({
  type: FETCH_PROJECTS_FAILURE,
});

export const setSearchFilter = value => ({
  type: SET_SEARCH_FILTER,
  value,
});

export const resetSearchFilter = () => ({
  type: SET_SEARCH_FILTER,
});

export const setMultiFilter = (value, checked) => ({
  type: SET_MULTI_FILTER,
  value,
  checked,
});

export const fetchProjects = () => dispatch => {
  dispatch(projectsRequest());
  getProjects()
    .then(res => {
      setTimeout(() => {
        dispatch(projectsSuccess(res.data));
      }, 2000);
    })
    .catch(() => {
      setTimeout(() => {
        dispatch(projectsFailure());
      }, 2000);
    });
};
