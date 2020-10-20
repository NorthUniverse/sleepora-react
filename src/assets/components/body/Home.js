import React from 'react';
import homeImage from '../../images/home.jpg';
import '../../styles/minCss/home.css';

function homepage() {
    return (
        <React.Fragment>
            <div className="body-home-background-image">
                <img src={ homeImage } alt="mattress picture"/>
            </div>
            <div className="body-home-background-image-mobile">
                <img src="images/gallery/gallery7.jpg" alt="mattress picture mobile"/>
            </div>
            <div className="body-home-text">
                “Laugh and the world laughs with you, snore and you sleep alone.” ― Anthony Burgess
            </div>
        </React.Fragment>
    );
}

export default homepage;