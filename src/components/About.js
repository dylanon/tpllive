import React from 'react';
import './About.css';

const About = props => {
    return (
        <section className="about">
            <p>Live feed of searches and browser stats from the <a href="https://www.tpl.ca" target="_blank">Toronto Public Library</a> website.</p>
            <p>Data provided by <a href="https://opendata.tplcs.ca/" target="_blank">Toronto Public Library Open Data</a>.</p>
        </section>
    )
}

export default About;