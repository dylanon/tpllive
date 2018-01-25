import React from 'react';

const LogoHeading = props => {
    const style = {
        width: '48px'
    }
    return (
        <div>
            <img src="http://dashboard.tpllabs.ca/images/chrome.png" alt="Browser logo" style={style}/>
            <h3>{props.heading}</h3>
        </div>
    )
}

export default LogoHeading;