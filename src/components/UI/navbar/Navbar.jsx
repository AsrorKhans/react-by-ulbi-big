import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.module.css';
const setActiveClass = ({isActive}) => isActive ? 'active-link' : '';


const Navbar = () => {
    return (
        <div className="navbar__links">
            <NavLink
                to="/Home"
                className={[`header-link ${setActiveClass}`]}
            >
                Home
            </NavLink>
            <NavLink
                to="/posts"
                className={[`header-link ${setActiveClass}`]}
            >
                Posts
            </NavLink>

            <NavLink
                to="/about"
                className={`header-link ${setActiveClass}`}
            >
                About
            </NavLink>
        </div>

    );
};

export default Navbar;