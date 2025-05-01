import React from 'react';
import WeatherAppImg from '../assets/Weather app.PNG'
import ScientificCalculator from '../assets/Scientific Calculator.PNG'
import Notes from '../assets/Notes.PNG'
import CurrencyConverter from '../assets/Currency Converter.PNG'
import CoursingSite from '../assets/Coursing Site.PNG'


function Projects({ darkMode }) {
    const projectsArray = [
        {
            title: "Weather App",
            src: WeatherAppImg,
            alt: "Weather App",
            tech: "HTML, CSS, JavaScript, OpenWeather API",
            href: "https://hannankhan203.github.io/Weather-App/",
        },
        {
            title: "Scientific Calculator",
            src: ScientificCalculator,
            alt: "Scientific Calculator",
            tech: "HTML, CSS, JavaScript",
            href: "https://hannankhan203.github.io/Scientific-Calculator/",
        },
        {
            title: "Notes App",
            src: Notes,
            alt: "Notes App",
            tech: "HTML, CSS, JavaScript",
            href: "https://hannankhan203.github.io/Notes/",
        },
        {
            title: "Currency Converter",
            src: CurrencyConverter,
            alt: "Currency Converter",
            tech: "HTML, CSS, JavaScript, Open Exchange API",
            href: "https://hannankhan203.github.io/Currency-Converter/",
        },
        {
            title: "Coursing Site",
            src: CoursingSite,
            alt: "Coursing Site",
            tech: "HTML, CSS, JavaScript",
            href: "https://hannankhan203.github.io/Coursing-Site/",
        },
    ]

    return (
        <section id="Projects">
            <div className={`projects-section ${darkMode ? "dark-mode" : "light-mode"}`}>
                <h2 className={`projects-heading ${darkMode ? "dark-mode" : "light-mode"}`}>My Projects</h2>
                <div className="projects">
                    {projectsArray.map((project, index)=> (
                        <div className={`project ${darkMode ? "dark-mode" : "light-mode"}`}>
                            <h4 className="pro-head">{project.title}</h4>
                            <img className='pro-img' src={project.src} alt={project.alt} />
                            <p className="pro-tech">{project.tech}</p>
                            <button className={`view-btn ${darkMode ? "dark-mode" : "light-mode"}`}><a href={project.href} target='_blank' className={darkMode ? "dark-mode" : "light-mode"}>View</a></button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;