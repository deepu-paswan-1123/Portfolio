import React, { useState } from 'react';
import { SKILLS } from '../Utils/data';
import SkillsCard from './SkillsCard/SkillsCard';
import SkillsinfoCard from './SkillsCard/SkillsinfoCard';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleselectSkill = (data) => {
        setSelectedSkill(data);
    }

    return (
        <motion.section 
            className="skills-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h5>Technical Proficiency</h5>

            <div className="skills-content">
                <div className="skills">
                    {
                        SKILLS.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <SkillsCard
                                    iconUrl={item.icon}
                                    title={item.title}
                                    isActive={selectedSkill.title===item.title}
                                    onClick={()=>{handleselectSkill(item)}}
                                />
                            </motion.div>
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
        </motion.section>
    );
}

export default Skills;
