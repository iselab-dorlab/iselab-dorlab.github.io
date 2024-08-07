"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  let isActive = (href) => pathname === href;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the navigation menu
  const buttonRef = useRef(null); // Ref for the menu toggle button

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header id="header" className="header sticky-top">
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex align-items-center me-auto">
            <img src="assets/img/logo.png" alt="ISE Lab Logo" />
          </Link>
          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-nav-toggle d-xl-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            ref={buttonRef}
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>

          {/* Navigation Menu */}

          <nav
            id="navmenu"
            className={`navmenu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
            ref={menuRef}
          >
            <ul className="d-flex flex-column flex-md-row align-items-md-center">
              <li>
                <Link href="/" className={isActive("/") ? "active" : ""}
                onClick={closeMobileMenu} // Close menu on click
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={isActive("/about-us") ? "active" : ""}
                  onClick={closeMobileMenu} // Close menu on click
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className={isActive("/members") ? "active" : ""}
                  onClick={closeMobileMenu} // Close menu on click
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="/research-topic"
                  className={isActive("/research-topic") ? "active" : ""}
                  onClick={closeMobileMenu} // Close menu on click
                >
                  Research Topic
                </Link>
              </li>
              <li>
                <Link
                  href="/publication"
                  className={isActive("/publication") ? "active" : ""}
                  onClick={closeMobileMenu} // Close menu on click
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={isActive("/contact") ? "active" : ""}
                  onClick={closeMobileMenu} // Close menu on click
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;