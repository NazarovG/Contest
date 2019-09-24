import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectsList.scss';

const ProjectsList = ({ data }) => {
  return (
    <div className="projects-list">
      {data.map(item => {
        return <ProjectCard data={item} key={item.place} />;
      })}
    </div>
  );
};
ProjectsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProjectsList;
