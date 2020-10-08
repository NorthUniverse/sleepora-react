import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import '../../styles/minCss/header.css';

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

            <div className="link-wrapper">
                <div clasclassName="index menu-item active-link">
                    <Link to="/">Home</Link>
                </div>
                <div className="catalog menu-item">
                    <Link to="/catalog">Catalog</Link>
                </div>
                <div className="gallery menu-item">
                    <Link to="/gallery">Gallery</Link>
                </div>
                <div className="about menu-item">
                    <Link to="/about">Our Story</Link>
                </div>
                <div className="contact menu-item">
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;