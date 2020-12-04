import React from "react";
import resumePDF from '../../assets/resume/Resume_ElenaKonradi.pdf';
import iconReact from '../../assets/react.png';
import iconDB from '../../assets/db.png';
import iconNode from '../../assets/node.png';
import iconGraph from '../../assets/graphQL.png';
import iconGitHub from '../../assets/github1.png';
import iconCSS from '../../assets/css.png';
import {Element} from "react-scroll";
// import { Divider } from "@chakra-ui/react"

function Resume() {

    const skills = [
        {
            skill: "React",
            desc: "Building user interfaces and UI components",
            icon: iconReact
        },
        {
            skill: "MongoDB | SQL Server | Oracle | MySQL",
            desc: "SQL and NoSQL databases",
            icon: iconDB
        },
        {
            skill: "Node.JS | Express.JS",
            desc: "Power back-end projects",
            icon: iconNode
        },
        {
            skill: "GraphQL",
            desc: "Data query and manipulation language for APIs",
            icon: iconGraph
        },
        {
            skill: "Git | GitHub",
            desc: "Version control and source code management",
            icon: iconGitHub
        },
        {
            skill: "HTML5 | CSS",
            desc: "Structuring and presenting web page content",
            icon: iconCSS
        },
    ]
    // const frontEnd = ['HTML','CSS','JavaScript','responsive design','React','Bootstrap'];
    // const backEnd = ['MERN stack','APIs','Node', 'Express','MySQL, Sequelze','MongoDB, Mongoose','REST','GraphQL','SQL Server','Oracle','ASP.NET','C#'];

    return (
        <section className="section-container-bg">
        <div className="section-container">
            <Element name="scrollToExpertise"></Element>

            <div className="section-left">
                <h2 className="font-size-heading">My Expertise</h2>
            </div>     

            <div className="section-right">
                <p className="p-resume font-size-text">
                        Below are some technologies I am familiar with.<br></br><br></br>
                </p>

                <ul className='grid-skills'>
                        {skills.map((skill) => (
                            <li key={skill.skill} className="grid-skill">
                                <div className="grid-skill-1">
                                    <img src={skill.icon} alt={skill.skill} className="skill-icon" />
                                </div>
                                <div className="grid-skill-2">
                                    <p className="font-size-menu skill-heading">{skill.skill}</p>
                                    <p className="font-size-text">{skill.desc}</p>
                                </div>
                            </li>
                        ))}
                </ul>                    

                <p className="p-resume font-size-text">
                    Download my <a href={resumePDF} target="_blank" rel="noopener noreferrer" className='resumeDownload font-size-text'>RESUME</a> here.
                </p>

            </div>   
            
            {/* <div className="divider-wrapper">
                <div className="divider-line"><Divider /></div>
            </div> */}

        </div>
        </section>
    )
}

export default Resume;