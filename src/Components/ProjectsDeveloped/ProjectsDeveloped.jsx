import React from 'react';
import './ProjectsDeveloped.css';

const ProjectsDeveloped = ({ name, description }) => {
    return (
        <div className="project">
            <h2 className="project-name">{name}</h2>
            <p className="project-description">{description}</p>
        </div>
    );
};

export default ProjectsDeveloped;
