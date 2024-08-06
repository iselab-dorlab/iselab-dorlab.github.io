import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header" className="header sticky-top">
            <div className="branding d-flex align-items-center">
                <div className="container position-relative d-flex align-items-center justify-content-end">
                    <NavLink to="/" className="logo d-flex align-items-center me-auto">
                        <img src="assets/img/logo.png" alt="ISE Lab Logo" />
                    </NavLink>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/members"
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    Members
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/research-topic"
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    Research Topic
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/publication"
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    Publications
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
