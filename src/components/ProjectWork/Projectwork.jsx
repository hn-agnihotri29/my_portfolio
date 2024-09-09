import React from "react";
import './ProjectWork.style.scss';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectWork = ({ 
    projectName, 
    projectDescription, 
    imageUrl, 
    technologies, 
    githubLink, 
    liveDemoLink 
}) => {
    return (
        <div className="project">
            <div className="project-image">
                <img src={imageUrl} alt={`${projectName} Screenshot`} />
            </div>  
            <div className="project-details">
                <h3>{projectName}</h3>
                <p>{projectDescription}</p>
                <div className="technologies">
                    {technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={githubLink} className="btn code-btn" target="_blank" rel="noopener noreferrer">
                        Code <FaGithub className="icon"/>
                    </a> 
                    {liveDemoLink && (
                        <a href={liveDemoLink} className="btn live-demo" target="_blank" rel="noopener noreferrer">
                            Live Demo <FaExternalLinkAlt className="icon"/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectWork;
 