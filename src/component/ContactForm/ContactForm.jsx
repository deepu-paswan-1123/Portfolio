import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ytj9t03', 'template_uvpcfmp', form.current, {
        publicKey: 'uiRj6QY8G3i0SloZD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
            <div className='contact-form-content'>
                <form ref={form} onSubmit={sendEmail}>
    
                    <div className="name-container">
                        <input 
                            type="text" 
                            name='from_name' 
                            placeholder='First Name' 
                            required 
                        
                        />
                        <input 
                            type="text" 
                            name='first_name2' 
                            placeholder='from_name' 
                            required 
                            
                        />
                    </div>
                    <input 
                        type="email" 
                        name='from_email' 
                        placeholder='Email' 
                        required 
            
                    />
                    <textarea 
                        type="text" 
                        name="message" 
                        rows={3} 
                        placeholder='Message'
                    />
                    <button type='submit'>Send</button>
                </form>
            </div>
        );

};

export default ContactForm;

