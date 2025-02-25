import React from 'react';
import './Contact.css';

const Contact = ({ socialMediaName, socialMediaLink, socialMediaIcon }) => {
    return (
        <div className="contact">
            <a href={socialMediaLink} target="_blank" rel="noopener noreferrer" className="contact__link">
                <img src={socialMediaIcon} alt={socialMediaName} className="contact__icon" />
            </a>
        </div>
    );
};

export default Contact;
