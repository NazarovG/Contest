import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from '../constants/projects';

const initialState = {
  projects: [],
  fetching: true,
  error: false,
};

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        projects: [],
        fetching: true,
        error: false,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.data,
        fetching: false,
        error: false,
      };
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        projects: [],
        fetching: false,
        error: true,
      };
    default:
      return state;
  }
};
