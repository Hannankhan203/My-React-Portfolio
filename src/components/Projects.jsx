import React from 'react';
import WeatherAppImg from '../assets/Weather app.PNG'
import ScientificCalculator from '../assets/Scientific Calculator.PNG'
import Notes from '../assets/Notes.PNG'
import CurrencyConverter from '../assets/Currency Converter.PNG'
import CoursingSite from '../assets/Coursing Site.PNG'


function Projects() {
    const projectsArray = [
        {
            title: "Weather App",
            src: WeatherAppImg,
            alt: "Weather App",
            tech: "HTML, CSS, JavaScript, OpenWeather API"
        },
        {
            title: "Scientific Calculator",
            src: ScientificCalculator,
            alt: "Scientific Calculator",
            tech: "HTML, CSS, JavaScript"
        },
        {
            title: "Notes App",
            src: Notes,
            alt: "Notes App",
            tech: "HTML, CSS, JavaScript"
        },
        {
            title: "Currency Converter",
            src: CurrencyConverter,
            alt: "Currency Converter",
            tech: "HTML, CSS, JavaScript, Open Exchange API"
        },
        {
            title: "Coursing Site",
            src: CoursingSite,
            alt: "Coursing Site",
            tech: "HTML, CSS, JavaScript"
        },
    ]

    return (
        <section id="Projects">
            <div className="projects-section">
                <h2 className="projects-heading">My Projects</h2>
                <div className="projects">
                    {projectsArray.map((project, index)=> (
                        <div className="project">
                            <h4 className="pro-head">{project.title}</h4>
                            <img className='pro-img' src={project.src} alt={project.alt} />
                            <p className="pro-tech">{project.tech}</p>
                            <button className="view-btn">View</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;