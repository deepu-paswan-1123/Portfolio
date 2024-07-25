import React, { useState } from 'react';
import { SKILLS } from '../Utils/data';
import SkillsCard from './SkillsCard/SkillsCard';
import SkillsinfoCard from './SkillsCard/SkillsinfoCard';
import './Skills.css';

const Skills = () => {
    const [selectedSkill,setSelectedSkill]=useState(SKILLS[0]);

    const handleSelecteSkill=(data)=>{
        setSelectedSkill(data);
    }

    return (
        <>
            <div className="skills-container">
                <h5>Technical Proficiency</h5>

                <div className="skills-content">
                    <div className="skills">
                        {
                            SKILLS.map((item) => (
                                <SkillsCard
                                    key={item.title}
                                    iconUrl={item.icon}
                                    title={item.title}
                                    isActive={selectedSkill.title===item.title}
                                    onClick={()=>{handleSelecteSkill(item)}}
                                />
                            ))
                        }
                    </div>

                    <div className="skills-info">
                        <SkillsinfoCard
                            heading={selectedSkill.title}
                            skills={selectedSkill.skills}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
