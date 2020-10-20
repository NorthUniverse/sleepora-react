import React from 'react';
import { NavLink } from 'react-router-dom';
import facebook from '../../images/socialIcons/Facebook.png';
import instagram from '../../images/socialIcons/Instagram.png';
import linkedIn from '../../images/socialIcons/LinkedIn.png';
import '../../styles/minCss/footer.css';
import { SocialItems } from './SocialItems';

function Footer() {
    function getSocialImageSrc(socialItem) {
        switch (socialItem) {
            case 'facebook': return facebook;
            case 'linkedIn': return linkedIn;
            case 'instagram': return instagram;
            default: break;
        }
    }

    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-link-wrapper">
                    <div className="contact">
                        <NavLink exact to="/contact" activeClassName="active-link">Contact Us</NavLink>
                    </div>
                </div>
                <div className="socialbtns">
                {SocialItems.map((socialItem, index) => {
                    const imgSrc = getSocialImageSrc(socialItem.src);
                    return (
                        <img src={ imgSrc } onClick={()=> window.open(`${socialItem.url}`, "_blank")} alt={ socialItem.altTag }/>
                    )
                })}
                </div>
            </div>
        </React.Fragment>
    );
    
}

export default Footer;