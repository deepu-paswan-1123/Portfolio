import React from 'react';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import ContactForm from '../ContactForm/ContactForm';
import { motion } from 'framer-motion';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <motion.section 
            className="contact-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div className="contact-info-list">
                    <ContactInfoCard
                        iconUrl={<MdOutlineMailOutline className="address" />}
                        text="vijaydeepu737@gmail.com"
                        link="mailto:vijaydeepu737@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl={<FaGithub className="address" />}
                        text="github.com/deepu-paswan-1123"
                        link="https://github.com/deepu-paswan-1123"
                    />
                </div>
                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>
            </div>
        </motion.section>
    );
};

export default ContactMe;

