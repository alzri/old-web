import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../api/projects.json';

const ProjectCardLayout = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <div className='projects-grid'>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    projectLink={project.projectLink}
                    projectIcon={project.projectIcon}
                    projectBanner={project.projectBanner}
                    projectTitle={project.projectTitle}
                    projectDesc={project.projectDesc}
                    gridClass={project.gridClass}
                />
            ))}
        </div>
    );
};

export default ProjectCardLayout;
