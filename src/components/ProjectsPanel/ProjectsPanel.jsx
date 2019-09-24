import React from 'react';
import './ProjectsPanel.scss';
import Panel from '../Panel/Panel';
import ProjectsSearch from '../../containers/projectsSearch';
import ProjectsFilters from '../../containers/projectsFilters';
import ProjectsView from '../../containers/projectsView';

const ProjectsPanel = () => {
  return (
    <Panel className="projects-panel">
      <div className="container">
        <Panel.Header
          title="Конкурсные проекты"
          filters={<ProjectsFilters />}
          searchbar={<ProjectsSearch />}
        ></Panel.Header>
        <Panel.Main>
          <ProjectsView />
        </Panel.Main>
      </div>
    </Panel>
  );
};

export default ProjectsPanel;
