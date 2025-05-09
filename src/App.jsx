import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { NavLink } from "react-router-dom";
import "./App.css";

function App({ activeStyle }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [checkboxTranslate, setCheckboxTranslate] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false); // New state for navbar toggle

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    setCheckboxTranslate(darkMode); // Sync the toggle position
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setCheckboxTranslate(!checkboxTranslate);
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen); // Toggle the navbar open/close
  };

  return (
    <Router>
      <div
        className={`app-container ${darkMode ? "dark-mode" : "light-mode"} ${
          navbarOpen ? "navbar-open" : ""
        }`}
      >
        {/* Navbar for desktop */}
        <Navbar
          darkMode={darkMode}
          setCheckboxTranslate={setCheckboxTranslate}
        />

        {/* Desktop Theme Toggle */}
        <div className="theme-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span
              className={`slider round ${
                checkboxTranslate ? "translated" : ""
              }`}
            ></span>
          </label>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="hamburger-menu" onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Mobile Navbar */}
        <div className={`navbar-mobile ${navbarOpen ? "open" : ""}`}>
          <nav>
            <ul>
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
          <div className="theme-toggle-mobile">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <span
                className={`slider round ${
                  checkboxTranslate ? "translated" : ""
                }`}
              ></span>
            </label>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HeroSection darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
