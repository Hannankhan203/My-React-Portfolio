import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.css';
import './components/color.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <body className={darkMode ? "dark-mode" : "light-mode"}>
      <label htmlFor="theme-checkbox">
        <input type="checkbox" className="styled-checkbox" id="theme-checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
        <span className={`check ${darkMode ? "dark-mode" : "light-mode"}`}></span>
        <span className={`botn ${darkMode ? "dark-mode" : "light-mode"}`}></span>
      </label>
      <Navbar darkMode={darkMode} />
      <HeroSection darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </body>
  )
}

export default App;
