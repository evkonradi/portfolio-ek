import React, { useState } from "react";
import imgTeactMeTo from '../../assets/projects/teach-me-to.jpg';
import imgCardSocial from '../../assets/projects/cardsocial.png';
import imgRentz from '../../assets/projects/rentzsite.jpg';
import imgBadgetTracker from '../../assets/projects/badget-tracker.jpg';
import imgTectBlog from '../../assets/projects/tech-blog.jpg';
import imgCommerceAPI from '../../assets/projects/e-commerce-APIs.jpg';
import imgWeather from '../../assets/projects/weather-dashboard.jpg';

function Portfolio() {

    const [projects] = useState([
        {
            fileName : imgTeactMeTo,
            // fileName : 'teach-me-to.jpg',
            title: 'Teach Me To',
            technology: 'Mongo|Express|React|Node|GraphQL|PWA',
            githubLink: 'https://github.com/evkonradi/teach-me-to',
            deployedLink: 'https://floating-spire-39046.herokuapp.com/'
        },
        {
            fileName : imgCardSocial,
            title: 'Card Social',
            technology: 'Node.js|Express|MySQL|Sequelize|MVC|JavaScript',
            githubLink: 'https://github.com/evkonradi/CardSocial',
            deployedLink: 'https://cryptic-shelf-96558.herokuapp.com/'
        },
        {
            fileName : imgRentz,
            title: 'Rentz Rentals',
            technology: 'Server APIs|JavaScript|CSS Foundation',
            githubLink: 'https://github.com/evkonradi/Rentz',
            deployedLink: 'https://evkonradi.github.io/Rentz/'
        },
        {
            fileName : imgBadgetTracker,
            title: 'Badget Tracker',
            technology: 'Node|Express|MongoDB|PWA|Heroku|Atlas MongoDB',
            githubLink: 'https://github.com/evkonradi/badget-tracker',
            deployedLink: 'https://arcane-ravine-44020.herokuapp.com/'
        },
        {
            fileName : imgTectBlog,
            title: 'Tech Blog',
            technology: 'Node|Express|MySQL|MVC|ORM',
            githubLink: 'https://github.com/evkonradi/techBlog',
            deployedLink: 'https://immense-reaches-05057.herokuapp.com/'
        },
        {
            fileName : imgCommerceAPI,
            title: 'E-Commerce Server-side APIs',
            technology: 'Node|Express|MySQL|Insomnia',
            githubLink: 'https://github.com/evkonradi/e-commerce',
            deployedLink: 'https://drive.google.com/file/d/11fDNyAmj2zRqzddM2fHlUWQJWdoG6hqJ/view?usp=sharing'
        },
        {
            fileName : imgWeather,
            title: 'Weather Dashboard',
            technology: 'HTML|JavaScript|Bootstrap|Server-side APIs',
            githubLink: 'https://github.com/evkonradi/WeatherDashboard',
            deployedLink: 'https://evkonradi.github.io/WeatherDashboard/'
        }
    ])

    return (
        <section id="projects" className="section-container">
            <div className="section-left">
                <h2 className="font-size-heading">Portfolio</h2>
                <p className="about-me-p font-size-text">
                    <br></br>
                    Below I introduce some of my projects. Please click the links for each project to proceed to the GitHub repository and deployed application.
                    <br></br>
            </p>
            </div>
            <div className="section-right work-grid">
                {projects.map((project, i) => (
                        <article key={project.title} className={`work-grid-item work-grid-item-${i+2}`}>
                            <img src={project.fileName} alt={project.title} className="work-grid-item-img"></img>
                            <p className="work-card-title">{project.title}</p>
                            <p className="work-card-subtitle">{project.technology}</p>
                            <p className="work-card-subtitle">{project.githubLink}</p>
                            <p className="work-card-subtitle">{project.deployedLink}</p>
                        </article>
            ))}
            </div>


            {/* <div className="section-right work-grid">
                <article className="work-grid-item work-grid-item-1">
                    <div className="card work-card-flex">
                        <a href = "https://github.com/evkonradi/teach-me-to" className="work-card-link">
                            <p className="work-card-title">Teach Me To</p>
                            <p className="work-card-subtitle">Mongo|Express|React|Node|GraphQL|PWA</p>
                        </a>
                    </div>
                </article>
                {projects.map((project, i) => (
                        <article key={project.title} className={`work-grid-item work-grid-item-${i+2}`}>
                            <div className="card work-card-flex">
                                <a className="work-card-link" href ={`${project.githubLink}`}  >
                                    <p className="work-card-title">{project.title}</p>
                                    <p className="work-card-subtitle">{project.technology}</p>
                                </a>
                            </div>
                        </article>
            ))}
            </div> */}

        </section>
    )
}

export default Portfolio;