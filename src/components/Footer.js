import React from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <footer className="footer">
            <p className="footer__author">An experiment by <a href="https://dylanon.com">Dylan On</a></p>
            <p className="footer__technologies">React, Redux, JavaScript, WebSockets, HTML5, and CSS3</p>
        </footer>
    )
}

export default Footer;