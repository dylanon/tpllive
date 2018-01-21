import React from 'react';
import SearchFeed from './SearchFeed';

const Searches = props => {
    return (
        <section className="searches">
            <h2>Real-time searches</h2>
            <SearchFeed />
        </section>
    )
}

export default Searches;