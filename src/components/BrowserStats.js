import React from 'react';
import PercentageCalculator from '../containers/PercentageCalculator';
import './BrowserStats.css';

const BrowserStats = props => {
    return (
        <section className="browser-stats">
            <h2>Searches by browser</h2>
            <PercentageCalculator />
        </section>
    )
}

export default BrowserStats;