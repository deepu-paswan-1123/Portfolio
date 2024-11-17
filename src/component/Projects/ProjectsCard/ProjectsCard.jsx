import React from 'react';
import './ProjectsCard.css'

const ProjectCard = ({details}) => {
    return (
        <div className='work-experience-card'>
            <div className='project_container'>
                <img className='projects_image' src={details.image} alt="" />
                <h6>{details.title}</h6>

            </div>

            <div className="work-duration">Tools used: {details. tools_used}</div>

            <ul>
                {details.description.map((item)=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
                <li className='links'><a href={details.links}>{details.links}</a></li>
        </div>
    );
}

export default ProjectCard;