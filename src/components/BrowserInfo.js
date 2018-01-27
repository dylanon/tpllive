import React from 'react';
import LogoHeading from './LogoHeading';
import PercentageBar from './PercentageBar';
import './BrowserInfo.css';

const BrowserInfo = props => {
    return (
        <div className="browser-info">
            <LogoHeading logoPath={props.logo} heading={props.name} />
            <PercentageBar percentage={props.percentage} />
        </div>
    )
}

export default BrowserInfo;