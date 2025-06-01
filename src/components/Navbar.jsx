import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

function Navbar({ darkMode }) {
  const navbarRef = useRef(null);
  const linksRef = useRef([]);

  const activeStyle = {
    color: darkMode ? "#64ffda" : "#007bff",
    fontWeight: "bold",
  };

  useEffect(() => {
    // Initial state
    gsap.set(navbarRef.current, { y: -50, opacity: 0 });
    gsap.set(linksRef.current, { y: -20, opacity: 0 });

    // Create main timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Navbar animation
    tl.to(navbarRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      clearProps: "all",
    })
      // Staggered links animation
      .to(
        linksRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.3"
      );

    // Links hover animation
    const hoverHandlers = linksRef.current.map((link) => {
      const hoverAnim = gsap.to(link, {
        y: -2,
        duration: 0.2,
        paused: true,
        ease: "power2.out",
      });

      const onEnter = () => hoverAnim.play();
      const onLeave = () => hoverAnim.reverse();

      link.addEventListener("mouseenter", onEnter);
      link.addEventListener("mouseleave", onLeave);

      return { link, onEnter, onLeave };
    });

    return () => {
      tl.kill();
      hoverHandlers.forEach(({ link, onEnter, onLeave }) => {
        link.removeEventListener("mouseenter", onEnter);
        link.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div className="nav-section">
      <nav
        ref={navbarRef}
        id="Navbar"
        className={`${darkMode ? "dark-mode" : "light-mode"}`}
      >
        <ul className="nav-options">
          <NavLink
            ref={(el) => (linksRef.current[0] = el)}
            to="/about"
            className={`link ${darkMode ? "dark-mode" : "light-mode"}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav-list">About</li>
          </NavLink>
          <NavLink
            ref={(el) => (linksRef.current[1] = el)}
            to="/projects"
            className={`link ${darkMode ? "dark-mode" : "light-mode"}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav-list">Projects</li>
          </NavLink>
          <NavLink
            ref={(el) => (linksRef.current[2] = el)}
            to="/skills"
            className={`link ${darkMode ? "dark-mode" : "light-mode"}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav-list">Skills</li>
          </NavLink>
          <NavLink
            ref={(el) => (linksRef.current[3] = el)}
            to="/contact"
            className={`link ${darkMode ? "dark-mode" : "light-mode"}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="nav-list">Contact</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
