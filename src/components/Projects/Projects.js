import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import './Projects.css';
import SingleProject from './SingleProject/SingleProject';
import ProjectModal from '../ProjectModal/ProjectModal';

function Projects() {
    const { theme } = useContext(ThemeContext);
    const [selectedProject, setSelectedProject] = useState(null);
    
    const openProjectModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };
    
    const closeProjectModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Stuff I've built</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--grid">
                            {projectsData.map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                    onClick={() => openProjectModal(project)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={closeProjectModal} 
                />
            )}
        </>
    );
}

export default Projects;