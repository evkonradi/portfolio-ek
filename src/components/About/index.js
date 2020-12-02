import React from "react";
import imgAboutMe from '../../assets/AboutMe.jpg';
import {Element} from "react-scroll";

function About() {

    return (

        <section id="about-me" className="section-container">
            <Element name="scrollToAbout"></Element>

            <div className="section-left">
                <h2 className="font-size-name">About Me</h2>
            </div>
            <div className="section-right">
                <div className="class-float-left class-padding-right-20">
                    <img src={imgAboutMe} alt="About me" className="aboutMeImage"></img>
                </div>
                <div>
                    <p className="about-me-p font-size-text">
                        Hi, my name is Elena Konradi…
                    </p>
                    <p className="about-me-p font-size-text">
                        I am a highly organized and technical IT professional. I worked on wide ranges of projects including full-stack application development, 
                        database administration and support of enterprise-level database systems. 
                    </p>
                    <p className="about-me-p font-size-text">
                        With a strong understanding of relational databases, I successfully implement and develop web applications. My proficiency includes 
                        leading projects from concept through implementation and post support. 
                    </p>
                    <p className="about-me-p font-size-text">
                        I am also adept at collaborating at all organizational levels to define the scope and meet stakeholders’ expectations. I can explain technical 
                        details to non-technical people and translate business requirements into a successfully working application.
                    </p>
                    <p className="about-me-p font-size-text">
                        I love technology. I am self-motivated with a passion in developing data-driven applications and processes. I bring to the table 
                        technical aptitude, strong analytical, troubleshooting, and problem-solving skills. My approach to any problem includes detailed analysis, 
                        research and finding the most appropriate solution to achieve the best results.
                    </p>
                </div>
            </div>
            <div className="class-clear-both"></div>
        </section>
    );
}

export default About;