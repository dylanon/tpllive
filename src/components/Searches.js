import React from 'react';
import SearchFeedListener from '../containers/SearchFeedListener';
import './Searches.css';

const Searches = props => {
    return (
        <section className="searches">
            <h2>Real-time searches</h2>
            <p>Click a search to explore results on <a href="https://www.tpl.ca" target="_blank" rel="noopener noreferrer">tpl.ca</a>!</p>
            <SearchFeedListener />
        </section>
    )
}

export default Searches;