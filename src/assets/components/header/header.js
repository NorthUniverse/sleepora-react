import React from 'react';

function Header(props) {
    return (
        <React.Fragment>
            <div className="banner">
                <div className="banner-image">
                    <img src="../../images/logo.PNG" alt="banner picture"/>
                </div>
                <div className="banner-text">
                    Sleepora Mattresses
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;