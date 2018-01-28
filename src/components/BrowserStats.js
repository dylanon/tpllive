import React from 'react';
import moment from 'moment';
import PercentageCalculator from '../containers/PercentageCalculator';
import './BrowserStats.css';

const BrowserStats = props => {
    const now = moment();
    return (
        <section className="browser-stats">
            <h2>Searches by browser</h2>
            <p>Showing browser stats collected from {now.format('MMMM Do YYYY')} at {now.format('h:mm a')}.</p>
            <ul className="browser-list">
                <PercentageCalculator />
            </ul>
        </section>
    )
}

export default BrowserStats;