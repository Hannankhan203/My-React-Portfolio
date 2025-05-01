import React from "react";

function Navbar() {
  return (
    <nav id="Navbar">
      <ul className="nav-options">
        <li className="nav-list"><a href="#About">About</a></li>
        <li className="nav-list"><a href="#Projects">Projects</a></li>
        <li className="nav-list"><a href="#Skills">Skills</a></li>
        <li className="nav-list"><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
