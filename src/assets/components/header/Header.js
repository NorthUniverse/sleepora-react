import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import '../../styles/minCss/header.css';
import { TopMenuItems } from './TopMenuItems';
import { useEffect, useState } from 'react'

function Header() {
    let [toggleMobileMenu, setMobileMenuDisplay] = useState(window.innerWidth < 1000 ? false : true) 

    return (
        <React.Fragment>
            <div className="banner">
                <div className="banner-image">
                    <NavLink exact to="/">
                        <img src= { logo } alt="banner picture"/>
                    </NavLink>
                </div>
                <div className="banner-text">
                    <NavLink exact to="/">
                        Sleepora Mattresses
                    </NavLink>
                </div>
            </div>

            <div className="mobile-banner">
                <div className={toggleMobileMenu ? "menu-btn open" : "menu-btn"} onClick={() => setMobileMenuDisplay(!toggleMobileMenu)}>
                    <div className="menu-btn-burger"></div>
                </div>
                <div className="mobile-banner-text">
                    Sleepora Mattresses
                </div>
                <div className="mobile-banner-image">
                    <img src= { logo } alt="banner picture"/>
                </div>
            </div>

            { toggleMobileMenu ? (<div className="link-wrapper">
                {TopMenuItems.map((item, index) => {
                    return (
                        <div className={`${item.cName} mobile-menu-styles`}>
                            <NavLink exact to={item.url} activeClassName="active-link" className="each-menu-item">{item.title}</NavLink>
                        </div>
                    )
                })}
            </div>) : null }
        </React.Fragment>
    );
}

export default Header;