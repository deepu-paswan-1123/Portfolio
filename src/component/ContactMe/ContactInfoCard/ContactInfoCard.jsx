import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text, link }) => {
    return (
        <div className="contact-details-card">
            <div className="icon">
                <span>{iconUrl}</span>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className='dp_link'>{text}</a>
        </div>
    );
};

export default ContactInfoCard;
