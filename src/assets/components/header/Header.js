import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import '../../styles/minCss/header.css';
import { TopMenuItems } from './TopMenuItems';
import { useEffect, useState } from 'react'

function Header() {
    let isDesktopView = window.innerWidth > 1000 ? true : false
    let [toggleMobileMenu, setMobileMenuDisplay] = useState(isDesktopView) 

    return (
        <React.Fragment>
            <div className="banner">
                <div className="banner-image">
                    <NavLink exact to="/" onClick={() => setMobileMenuDisplay(isDesktopView)}>
                        <img src= { logo } alt="banner picture"/>
                    </NavLink>
                </div>
                <div className="banner-text">
                    <NavLink exact to="/" onClick={() => setMobileMenuDisplay(isDesktopView)}>
                        Sleepora Mattresses
                    </NavLink>
                </div>
            </div>

            <div className="mobile-banner">
                <div className={toggleMobileMenu ? "menu-btn open" : "menu-btn"} onClick={() => setMobileMenuDisplay(!toggleMobileMenu)}>
                    <div className="menu-btn-burger"></div>
                </div>
                <div className="mobile-banner-text">
                    <NavLink exact to="/" onClick={() => setMobileMenuDisplay(false)}>
                        Sleepora Mattresses
                    </NavLink>
                </div>
                <div className="mobile-banner-image">
                    <NavLink exact to="/" onClick={() => setMobileMenuDisplay(false)}>
                        <img src= { logo } alt="banner picture"/>
                    </NavLink>
                </div>
            </div>

            { toggleMobileMenu ? (<div className="link-wrapper">
                {TopMenuItems.map((item, index) => {
                    return (
                        <div className={`${item.cName} mobile-menu-styles`}>
                            <NavLink exact to={item.url} activeClassName="active-link" className="each-menu-item" onClick={() => setMobileMenuDisplay(isDesktopView ? true : !toggleMobileMenu)}>{item.title} </NavLink>
                        </div>
                    )
                })}
            </div>) : null }
        </React.Fragment>
    );
}

export default Header;