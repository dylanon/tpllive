import React from 'react';
import LogoHeading from './LogoHeading';
import PercentageBar from './PercentageBar';

const BrowserStats = props => {
    return (
        <section className="browser-stats">
            <h2>Searches by browser</h2>
            <div>
                <LogoHeading />
                <PercentageBar />
            </div>
            <div>
                <LogoHeading />
                <PercentageBar />
            </div>
            <div>
                <LogoHeading />
                <PercentageBar />
            </div>
        </section>
    )
}

export default BrowserStats;