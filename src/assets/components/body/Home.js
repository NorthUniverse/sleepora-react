import React from 'react';
import homeImage from '../../images/home.jpg';
import mobileHomeImage from '../../images/gallery/gallery7.jpg';
import '../../styles/minCss/home.css';

function homepage() {
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="body-home-background-image">
                    <img src={ homeImage } alt="mattress picture"/>
                </div>
                <div className="body-home-background-image-mobile">
                    <img src={ mobileHomeImage } alt="mattress picture mobile"/>
                </div>
                <div className="body-home-text">
                    “Laugh and the world laughs with you, snore and you sleep alone.” ― Anthony Burgess
                </div>
            </div>
        </React.Fragment>
    );
}

export default homepage;