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
                    //console.log(imgSrc);
                    return (
                        <img src={ imgSrc } onClick={()=> window.open(`${socialItem.url}`, "_blank")} alt={ socialItem.altTag }/>
                    )
                })}
                    {/* <img src={ facebook } onClick={()=> window.open("https://www.facebook.com", "_blank")} alt="Facebook"/>
                    <img src={ linkedIn } onClick={()=> window.open("https://www.linkedin.com", "_blank")} alt="LinkedIn"/>
                    <img src={ instagram } onClick={()=> window.open("https://www.instagram.com", "_blank")} alt="Instagram"/> */}
                </div>
            </div>
        </React.Fragment>
    );
    
}

export default Footer;