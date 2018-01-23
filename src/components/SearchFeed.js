import React from 'react';

const SearchFeed = props => {
    return (
        <ul className="search-feed">
            {props.searches.map(search => {
                return <li key={search.receivedAt}>"{search.terms}" ({search.browser})</li>
            })}
        </ul>
    )
}

export default SearchFeed;