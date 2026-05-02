import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './ResumeSection.css';

const ResumeSection = () => {
    return (
        <motion.section 
            className="resume-section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="resume-section-content glass-card">
                <div className="resume-text">
                    <h5>Download My CV</h5>
                    <p>Want to see my full professional background? Grab a copy of my latest resume here.</p>
                    
                    <div className="resume-btn-group">
                        <a href="/resume.pdf.pdf" download="Deepu_Paswan_Resume.pdf" className="download-cta-main">
                            <FiDownload /> Download PDF
                        </a>
                        <Link to="/Resume" className="view-cta-main">
                            <FiEye /> View Online
                        </Link>
                    </div>
                </div>

                <div className="resume-visual">
                    <div className="resume-mockup">
                        <div className="mockup-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="mockup-body">
                            <div className="line long"></div>
                            <div className="line medium"></div>
                            <div className="line short"></div>
                            <div className="line long"></div>
                            <div className="line medium"></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ResumeSection;
