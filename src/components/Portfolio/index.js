import React, { useState } from "react";
import imgTeactMeTo from '../../assets/projects/teach-me-to.jpg';
import imgCardSocial from '../../assets/projects/cardsocial.jpg';
import imgRentz from '../../assets/projects/rentzsite.jpg';
import imgBadgetTracker from '../../assets/projects/badget-tracker.jpg';
import imgTectBlog from '../../assets/projects/tech-blog.jpg';
import imgCommerceAPI from '../../assets/projects/e-commerce-APIs.jpg';
import imgWeather from '../../assets/projects/weather-dashboard.jpg';
import imgShopRedux from '../../assets/projects/shop-redux.jpg';
import {Element} from "react-scroll";
// import { Divider } from "@chakra-ui/react";

function Portfolio() {

    const [projects] = useState([
        {
            fileName : imgTeactMeTo,
            // fileName : 'teach-me-to.jpg',
            title: 'Teach Me To',
            technology: 'Mongo | Express | React | Node | GraphQL | PWA',
            githubLink: 'https://github.com/evkonradi/teach-me-to',
            deployedLink: 'https://floating-spire-39046.herokuapp.com/',
            desc: 'This application is a place to search for articles, images, and videos on how to get better in a specific area of interest.'
        },
        {
            fileName : imgCardSocial,
            title: 'Card Social',
            technology: 'Node.js | Express | MySQL | Sequelize | MVC | JavaScript',
            githubLink: 'https://github.com/evkonradi/CardSocial',
            deployedLink: 'https://cryptic-shelf-96558.herokuapp.com/',
            desc: 'Card Social was made for people who want to constantly exchange personal, social, or business information. It allows to create personal, business, or social card with just the information you want to be displayed on this card. Then you can share the card code or QR code with your friends, business partners or new acquaintances so that they could easily retrieve your information when they need it.'
        },
        {
            fileName : imgRentz,
            title: 'Rentz Rentals',
            technology: 'Server APIs | JavaScript | CSS Foundation',
            githubLink: 'https://github.com/evkonradi/Rentz',
            deployedLink: 'https://evkonradi.github.io/Rentz/',
            desc: 'This site can help someone who is looking for a place to rent. It puts available in the search area rentals on the Google Map and allows a user to get directions to the rental.'
        },
        {
            fileName : imgBadgetTracker,
            title: 'Badget Tracker',
            technology: 'Node | Express | MongoDB | PWA | Heroku | Atlas MongoDB',
            githubLink: 'https://github.com/evkonradi/badget-tracker',
            deployedLink: 'https://arcane-ravine-44020.herokuapp.com/',
            desc: 'This application is for Badget Tracking that allows for offline functionality. The user is able to add expenses and deposits to their budget with or without a connection.'
        },
        {
            fileName : imgTectBlog,
            title: 'Tech Blog',
            technology: 'Node | Express | MySQL | MVC | ORM',
            githubLink: 'https://github.com/evkonradi/techBlog',
            deployedLink: 'https://immense-reaches-05057.herokuapp.com/',
            desc: 'Tech Blog application allows users to create posts and leave comments. A user needs to login to be able to create, edit or delete a post, as well as to leave a comment.'
        },
        {
            fileName : imgCommerceAPI,
            title: 'E-Commerce Server-side APIs',
            technology: 'Node | Express | MySQL | Insomnia',
            githubLink: 'https://github.com/evkonradi/e-commerce',
            deployedLink: 'https://drive.google.com/file/d/11fDNyAmj2zRqzddM2fHlUWQJWdoG6hqJ/view?usp=sharing',
            desc: 'This is the back end for an e-commerce site. It allows you to enter, delete, update and select products, categories, tags and product tags through the server-side APIs.'
        },
        {
            fileName : imgWeather,
            title: 'Weather Dashboard',
            technology: 'HTML | JavaScript | Bootstrap | Server-side APIs',
            githubLink: 'https://github.com/evkonradi/WeatherDashboard',
            deployedLink: 'https://evkonradi.github.io/WeatherDashboard/',
            desc: 'Weather Dashboard allows to see the current weather and 5 days forecast for a selected city.'
        },
        {
            fileName : imgShopRedux,
            title: 'Redux State for e-commerce',
            technology: 'Redux | React | MongoDB | Node.js/Express.js',
            githubLink: 'https://github.com/evkonradi/shop-shop-redux',
            deployedLink: 'https://secret-taiga-93993.herokuapp.com/',
            desc: 'This project consisted of refactoring the e-commerce platform from using React Context API to using Redux for Global State.'
        }        
    ]);

    function btnClicked(event){
        var linkBtn = event.target.getAttribute("data-link");
        window.open(linkBtn, "_blank"); 
    }

    return (
        <section id="projects" className="section-container-bg section-container-bg-tilt">
            <div  className="section-container">
                <Element name="scrollToProjects"></Element>

                <div className="section-left">
                    <h2 className="font-size-heading">Projects</h2>
                    <p className="font-size-text">
                        <br></br>
                        Below I introduce some of my projects. Please click the links for each project to proceed to the GitHub repository and deployed application.
                        <br></br>
                </p>
                </div>
                <div className="section-right work-grid">
                    {projects.map((project, i) => (
                            <article key={project.title} className={`work-grid-item work-grid-item-${i+2}`}>
                                <img src={project.fileName} alt={project.title} className="work-grid-item-img"></img>
                                <br></br>
                                <p className="font-size-text"><span className="project-title-bg">{project.title}</span></p>
                                <p className="font-size-card padding-card">{project.desc}</p>
                                <p className="font-size-card">{project.technology}</p>
                                <br></br>
                                <button className="button-style font-size-card" data-link={project.githubLink} onClick={btnClicked}>GitHub</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="button-style font-size-card" data-link={project.deployedLink} onClick={btnClicked}>Deployed</button>
                            </article>
                ))}
                </div>
                {/* <div className="divider-wrapper">
                    <div className="divider-line"><Divider /></div>
                </div> */}

            </div>
        </section>
    )
}

export default Portfolio;