import React from 'react';
import './ExperienceCard.css'

const ExperienceCard = ({details}) => {
    return (
        <div className='work-experience-card glass-card'>
            <div className="card-header">
                <h6>{details.title}</h6>
                <div className="work-duration">
                    <span>{details.Date}</span>
                </div>
            </div>

            <ul className="experience-list">
                {details.responsibilites.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard;

