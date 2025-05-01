import React from "react";

function Navbar({ darkMode }) {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <nav id="Navbar" className={darkMode ? "dark-mode" : "light-mode"}>
      <ul className="nav-options">
        <li className="nav-list">
          <a href="#About" className={darkMode ? "dark-mode" : "light-mode"}>
            About
          </a>
        </li>
        <li className="nav-list">
          <a href="#Projects" className={darkMode ? "dark-mode" : "light-mode"}>
            Projects
          </a>
        </li>
        <li className="nav-list">
          <a href="#Skills" className={darkMode ? "dark-mode" : "light-mode"}>
            Skills
          </a>
        </li>
        <li className="nav-list">
          <a href="#Contact" className={darkMode ? "dark-mode" : "light-mode"}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
