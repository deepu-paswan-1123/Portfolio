import React from 'react';
import { motion } from 'framer-motion';
import { IoArrowBack, IoDownloadOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
    const navigate = useNavigate();

    return (
        <motion.div 
            className="resume-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="resume-header">
                <button className="back-btn" onClick={() => navigate('/')}>
                    <IoArrowBack /> Back to Portfolio
                </button>
                <div className="resume-actions">
                    <a href="/resume.pdf.pdf" download="Deepu_Paswan_Resume.pdf" className="download-cta">
                        <IoDownloadOutline /> Download CV
                    </a>
                </div>
            </div>

            <div className="resume-container">
                <motion.div 
                    className="resume-info"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1>Curriculum Vitae</h1>
                    <p className="subtitle">Frontend Developer & React Enthusiast</p>
                    
                    <div className="resume-highlights">
                        <div className="highlight-item">
                            <span className="dot"></span>
                            <p>Specialized in building high-performance web applications with React.js</p>
                        </div>
                        <div className="highlight-item">
                            <span className="dot"></span>
                            <p>Strong foundation in modern JavaScript, HTML5, and CSS3</p>
                        </div>
                        <div className="highlight-item">
                            <span className="dot"></span>
                            <p>Experienced in UI/UX implementation and responsive design</p>
                        </div>
                    </div>

                    <div className="resume-footer-info">
                        <p>Looking for a passionate developer to join your team?</p>
                        <button className="contact-btn-resume" onClick={() => navigate('/')}>Get in Touch</button>
                    </div>
                </motion.div>

                <motion.div 
                    className="resume-preview glass-card"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="preview-header">
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p>resume.pdf</p>
                    </div>
                    <iframe
                        src="/resume.pdf.pdf#toolbar=0"
                        title="Deepu Paswan Resume"
                        className="pdf-frame"
                    ></iframe>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Resume;