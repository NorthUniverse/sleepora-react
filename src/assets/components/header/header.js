import React from 'react';
import { NavLink } from 'react-router-dom';
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

            <div className="mobile-banner">
                <div className="menu-btn">
                    <div className="menu-btn-burger"></div>
                </div>
                <div className="mobile-banner-text">
                    Sleepora Mattresses
                </div>
                <div className="mobile-banner-image">
                    <img src= { logo } alt="banner picture"/>
                </div>
            </div>

            <div className="link-wrapper">
                {TopMenuItems.map((item, index) => {
                    return (
                        <div className={`${item.cName} menuItem`}>
                            <NavLink exact to={item.url} activeClassName="active-link">{item.title}</NavLink>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
}

export default Header;