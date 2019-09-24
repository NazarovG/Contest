import { combineReducers } from 'redux';
import { projects } from './projects';
import { projectsFilter } from './projectsFilter';

export const rootReducer = combineReducers({
  projects,
  projectsFilter,
});
