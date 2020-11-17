import React from "react";
import resumePDF from '../../assets/resume/Resume_ElenaKonradi.pdf';

function Resume() {

    const frontEnd = ['HTML','CSS','JavaScript','responsive design','React','Bootstrap'];
    const backEnd = ['MERN stack','APIs','Node', 'Express','MySQL, Sequelze','MongoDB, Mongoose','REST','GraphQL','SQL Server','Oracle','ASP.NET','C#'];

    return (
        <section className="section-container">
            <div className="section-left">
                <h2>Resume</h2>
            </div>     
            <div className="section-right">
                <p className="about-me-p">
                    Download my <a href={resumePDF} target="_blank" rel="noopener noreferrer" className='resumeDownload font-size-heading'>Resume</a> here.
                </p>
                    <h3>Front-end Proficiencies</h3>
                    <ul className='ul-resume'>
                        {frontEnd.map((skill) => (
                            <li key={skill}>
                                <span>
                                        {skill}
                                </span>
                            </li>
                        ))}
                    </ul>                    
                    <h3>Back-end Proficiencies</h3>
                    <ul className='ul-resume'>
                        {backEnd.map((skill) => (
                            <li key={skill}>
                                <span>
                                        {skill}
                                </span>
                            </li>
                        ))}
                    </ul>                    
            </div>       

        </section>
    )
}

export default Resume;