import React from "react";
import {Element} from "react-scroll";

function Contact() {


    return (

        <section className="section-container-bg section-container-bg-gray" >

        <div className="section-container">
            <Element name="scrollToContact"></Element>

            <div className="section-left">
                <h2 className="font-size-heading">Contact me</h2>
            </div>     
            <div className="section-right font-size-text">
                <p>
                        Elena Konradi
                </p>
                <p>
                        Email: evkonradi@gmail.com
                </p>
                <p>
                        Phone: (512) 423-4516
                </p>
                <p>
                        Location: Austin, TX
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/elenakonradi" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="LinkedIn profile"><img src={require(`../../assets/linkedin.png`)} alt='linkedin icon' className="icon-contact-me" /></a>
                    <a href="mailto:evkonradi@gmail.com" rel="noopener noreferrer" data-toggle="tooltip" title="Email"><img src={require(`../../assets/mail.png`)} alt='email icon' className="icon-contact-me" /></a>
                    <a href="https://github.com/evkonradi" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="GinHub"><img src={require(`../../assets/github.png`)} alt='github icon' className="icon-contact-me" /></a>
                </p>
            </div>       

        </div>
        </section>
    )
}

export default Contact;