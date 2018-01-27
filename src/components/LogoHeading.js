import React from 'react';
import './LogoHeading.css';

const LogoHeading = props => {
    return (
        <div className="logo-heading">
            <img className="logo-heading__logo" src={props.logoPath} alt="Browser logo"/>
            <h3 className="logo-heading__heading">{props.heading}</h3>
        </div>
    )
}

export default LogoHeading;