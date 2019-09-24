import { createSelector } from 'reselect';

const getProjects = state => state.projects.projects;
const getProjectsSearchFilter = state => state.projectsFilter.search;
const getProjectsMultiFilter = state => state.projectsFilter.multi;

export const makeGetVisibleProjects = () => {
  return createSelector(
    getProjects,
    getProjectsSearchFilter,
    getProjectsMultiFilter,
    (projects, searchFilter, multiFilter) => {
      const activeFilters = multiFilter.filter(item => {
        return item.checked === true;
      });
      const filtredProjects = projects.filter(item => {
        return (
          item.title.match(new RegExp(searchFilter, 'i')) &&
          activeFilters.every(element => {
            return item.filters.indexOf(element.value) >= 0;
          })
        );
      });
      return filtredProjects;
    },
  );
};

export const getVisibleProjectsCount = createSelector(
  makeGetVisibleProjects(),
  projects => {
    return Array.isArray(projects) && projects.length;
  },
);
