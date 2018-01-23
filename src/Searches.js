import React from 'react';
import SearchFeedListener from './containers/SearchFeedListener';

const Searches = props => {
    return (
        <section className="searches">
            <h2>Real-time searches</h2>
            <SearchFeedListener />
        </section>
    )
}

export default Searches;