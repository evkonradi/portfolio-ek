import React from "react";

function Footer() {

    var today = new Date();
    var year = today.getFullYear();

    return (
        <footer>
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