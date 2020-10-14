import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import '../../styles/minCss/header.css';
import { TopMenuItems } from './TopMenuItems';

function Header() {
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
                {TopMenuItems.map((item, index) => {
                    
                    const activeLink = window.location.pathname.includes(item.url) ? "active-link" : "";
                    console.log(window.location.pathname);
                    return (
                        <div className={`${item.cName} menuItem ${activeLink}`}>
                            <Link to={item.url}>{item.title}</Link>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
}

export default Header;