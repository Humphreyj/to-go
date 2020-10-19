import React from 'react';
import '../../styles/footer/footer.scss';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="newsletter_bar">
                    <div className="newsletter-input-container">
                        <input 
                         type="text"
                         className="newsletter-input"
                         placeholder='Enter your email address'
                         />
                         <button className="newsletter-signup-button">Go</button>
                    </div>
                    <div className="newsletter-text-container">
                        <h4 className="signup-header">SIGN UP FOR EXCLUSIVE OFFERS</h4>
                        <p className="signup-text">Sign up to receive exclusive email-only savings & updates.</p>
                    </div>
                </div>
            <div className="footer-links">
                <p className="footer-link">Privacy Policy</p>
                <p className="footer-link">Become a Vendor</p>
                <p className="footer-link">Contact Us</p>
                <p className="footer-link">Careers</p>
            </div>
        </div>
    );
}

export default Footer;
