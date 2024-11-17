import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="Cv-container">

            <div className="resume-pdf-container">
                <iframe
                    src="/resume.pdf.pdf" // Adjust the path if needed
                    width="100%"
                    title="Deepu Paswan Resume"
                ></iframe>
            </div>

        </div>
    );
};

export default Resume;





//   <section>
                  
//                   <a href="/public/dpresume.pdf.pdf" download="Deepu_Paswan_Resume.pdf">
//                       <button className="download-btn contact-btn">Download Resume</button>
//                   </a>
//               </section>