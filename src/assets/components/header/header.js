import React from 'react';
import logo from '../../images/logo.PNG';

function Header(props) {
    return (
        <React.Fragment>
            <div className="banner">
                <div className="banner-image">
                    <img src= { logo } alt="banner picture"/>
                </div>
                <div className="banner-text">
                    Sleepora Mattresses
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;