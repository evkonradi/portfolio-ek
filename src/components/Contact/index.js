import React from "react";
import {Element} from "react-scroll";

function Contact() {


    return (
        <section className="section-container">
            <Element name="scrollToContact"></Element>

            <div className="section-left">
                <h2 className="font-size-name">Contact me</h2>
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>       

        </section>
    )
}

export default Contact;