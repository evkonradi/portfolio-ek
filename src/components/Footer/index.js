import React from "react";

function Footer() {

    var today = new Date();
    var year = today.getFullYear();

    return (
        <footer>
            <div>
                <a href="https://www.linkedin.com/in/elenakonradi" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="LinkedIn profile"><img src={require(`../../assets/linkedin.png`)} alt='linkedin icon' className="icon-footer" /></a>
                <a href="mailto:evkonradi@gmail.com" rel="noopener noreferrer" data-toggle="tooltip" title="Email"><img src={require(`../../assets/mail.png`)} alt='email icon' className="icon-footer" /></a>
                <a href="https://github.com/evkonradi" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="GinHub"><img src={require(`../../assets/github.png`)} alt='github icon' className="icon-footer" /></a>
            </div>
            <div className="copyright">
                <a href="https://www.freepik.com/photos/coffee">Coffee photo created by master1305 - www.freepik.com</a>
            </div>
            <div>
                <p className="copyright">&#169; {year} Elena Konradi</p>
            </div>
        </footer>
  
    );
}

export default Footer;