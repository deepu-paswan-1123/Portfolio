import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        // Reset form fields
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='contact-form-content'>
            <form target="_blank" action='https://formsubmit.co/vijaydeepu737@gmail.com' method='POST' onSubmit={handleFormSubmit}>
                <div className="name-container">
                    <input 
                        type="text" 
                        name='firstname' 
                        placeholder='First Name' 
                        required 
                        value={formData.firstname} 
                        onChange={handleInputChange} 
                    />
                    <input 
                        type="text" 
                        name='lastname' 
                        placeholder='Last Name' 
                        required 
                        value={formData.lastname} 
                        onChange={handleInputChange} 
                    />
                </div>
                <input 
                    type="email" 
                    name='email' 
                    placeholder='Email' 
                    required 
                    value={formData.email} 
                    onChange={handleInputChange} 
                />
                <textarea 
                    type="text" 
                    name="message" 
                    rows={3} 
                    placeholder='Message' 
                    required 
                    value={formData.message} 
                    onChange={handleInputChange} 
                />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
