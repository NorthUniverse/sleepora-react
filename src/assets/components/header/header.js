import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import '../../styles/minCss/header.css';
import { TopMenuItems } from './TopMenuItems';
import { useEffect, useState } from 'react'

function Header() {
  const mobileMenuDisplayFlag = false
  const [headerLinkClassName, setLinkClassName] = useState()

  useEffect(() => {
    setLinkClassName(mobileMenuDisplayFlag ? `link-wrapper` : `link-wrapper hide-menu`);
  })

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

            <div className={`${headerLinkClassName}`}>
                {TopMenuItems.map((item, index) => {
                    return (
                        <div className={`${item.cName}`}>
                            <NavLink exact to={item.url} activeClassName="active-link">{item.title}</NavLink>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
}

export default Header;