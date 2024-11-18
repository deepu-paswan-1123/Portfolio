import React from 'react';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import ContactForm from '../ContactForm/ContactForm';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    {/* Email */}
                    <ContactInfoCard
                        iconUrl={<MdOutlineMailOutline className="address" />}
                        text="vijaydeepu737@gmail.com"
                        link="mailto:vijaydeepu737@gmail.com"
                    />
                    {/* GitHub */}
                    <ContactInfoCard
                        iconUrl={<FaGithub className="address" />}
                        text="github.com/deepu-paswan-1123"
                        link="https://github.com/deepu-paswan-1123"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
