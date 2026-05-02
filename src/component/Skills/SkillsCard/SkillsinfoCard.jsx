import React from 'react';
import { motion } from 'framer-motion';
import '../SkillsCard/SkillsinfoCard.css';

const SkillsinfoCard = ({heading, skills}) => {
    return (
        <div className='skills-info-card glass-card'>
            <h6>{heading}</h6>
            <div className="skills-info-content">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill_info">
                            <p>{item.skill}</p>
                            <p className="percentage">{item.percentage}</p>
                        </div>

                        <div className="skill-progress-bg">
                            <motion.div 
                                className="skill-progress" 
                                initial={{ width: 0 }}
                                whileInView={{ width: item.percentage }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SkillsinfoCard;

