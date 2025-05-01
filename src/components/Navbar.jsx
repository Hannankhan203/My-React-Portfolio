import React, { useState, useEffect } from "react";

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

  return (
    <div className="nav-section">
      <nav
        id="Navbar"
        className={`${darkMode ? "dark-mode" : "light-mode"} ${
          isMobile && navTranslate ? "translating-Navbar" : ""
        }`}
      >
        <i
          className={`fas fa-bars menu ${isMobile ? "" : "hide"} ${
            menuPosition ? "menu-position" : ""
          } ${darkMode ? "dark-mode" : "light-mode"}`}
          onClick={() => {
            toggleNavbar();
          }}
        ></i>
        <ul
          className={`nav-options ${
            isMobile && navOptionsTranslate ? "translating-nav-options" : ""
          }`}
        >
          <li className="nav-list">
            <a href="#About" className={darkMode ? "dark-mode" : "light-mode"}>
              About
            </a>
          </li>
          <li className="nav-list">
            <a
              href="#Projects"
              className={darkMode ? "dark-mode" : "light-mode"}
            >
              Projects
            </a>
          </li>
          <li className="nav-list">
            <a href="#Skills" className={darkMode ? "dark-mode" : "light-mode"}>
              Skills
            </a>
          </li>
          <li className="nav-list">
            <a
              href="#Contact"
              className={darkMode ? "dark-mode" : "light-mode"}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
