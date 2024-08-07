"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  let isActive = (href) => pathname === href;

  return (
    <header id="header" className="header sticky-top">
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-end">
          <Link href="/" className="logo d-flex align-items-center me-auto">
            <img src="assets/img/logo.png" alt="ISE Lab Logo" />
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link href="/" className={isActive("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={isActive("/about-us") ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className={isActive("/members") ? "active" : ""}
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="/research-topic"
                  className={isActive("/research-topic") ? "active" : ""}
                >
                  Research Topic
                </Link>
              </li>
              <li>
                <Link
                  href="/publication"
                  className={isActive("/publication") ? "active" : ""}
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={isActive("/contact") ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
