import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../images/socialIcons/Facebook.png';
import instagram from '../../images/socialIcons/Instagram.png';
import linkedIn from '../../images/socialIcons/LinkedIn.png';
import '../../styles/minCss/footer.css';

function Footer() {
    return (
        <React.Fragment>
            <div className="link-wrapper">
                <div className="contact menu-item">
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="footer">
                <div className="footer-link-wrapper">
                    <div className="contact">
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
                <div className="socialbtns">
                    <Link to="https://www.facebook.com">
                        <img src={ facebook } alt="Facebook"/>
                    </Link>
                    <Link to="https://www.linkedin.com">
                        <img src={ linkedIn } alt="LinkedIn"/>
                    </Link>
                    <Link to="https://www.instagram.com">
                        <img src={ instagram } alt="Instagram"/>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;