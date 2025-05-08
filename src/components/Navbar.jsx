import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ darkMode, setCheckboxTranslate }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [navTranslate, setNavTranslate] = useState(false);
  const [menuPosition, setMenuPosition] = useState(false);
  const [navOptionsTranslate, setNavOptionsTranslate] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 768px)`);
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const toggleNavbar = () => {
    setNavTranslate((prev) => !prev);
    setCheckboxTranslate((prev) => !prev);
    setNavOptionsTranslate((prev) => !prev);
    setMenuPosition((prev) => !prev);
  };

  // Active link style
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <div className="nav-section">
      <nav
        id="Navbar"
        className={`${darkMode ? "dark-mode" : "light-mode"} ${
          isMobile && navTranslate ? "" : "translating-Navbar"
        }`}
      >
        <i
          className={`fas fa-bars menu ${isMobile ? "" : "hide"} ${
            menuPosition ? "" : "menu-position"
          } ${darkMode ? "dark-mode" : "light-mode"}`}
          onClick={toggleNavbar}
          aria-label="Toggle navigation menu"
        ></i>
        <ul
          className={`nav-options ${
            isMobile && navOptionsTranslate ? "" : "translating-nav-options"
          }`}
        >
          <li className="nav-list">
            <NavLink
              to="/about"
              className={`link ${darkMode ? "dark-mode" : "light-mode"}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              to="/projects"
              className={`link ${darkMode ? "dark-mode" : "light-mode"}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              to="/skills"
              className={`link ${darkMode ? "dark-mode" : "light-mode"}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Skills
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              to="/contact"
              className={`link ${darkMode ? "dark-mode" : "light-mode"}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
  