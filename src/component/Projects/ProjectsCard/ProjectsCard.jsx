import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectsCard.css'

const ProjectCard = ({details}) => {
    return (
        <div className='project-card glass-card'>
            <div className="project-image-container">
                <img className='project-image' src={details.image} alt={details.title} />
                <div className="project-overlay">
                    <a href={details.links} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub /> View Code
                    </a>
                </div>
            </div>

            <div className="project-info">
                <h6>{details.title}</h6>
                <div className="tech-stack">
                    {details.tools_used.split(',').map((tool, index) => (
                        <span key={index} className="tech-tag">{tool.trim()}</span>
                    ))}
                </div>

                <ul className="project-description">
                    {details.description.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;