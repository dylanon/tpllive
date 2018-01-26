import React from 'react';


const SearchFeed = props => {
    // All searches on torontopubliclibrary.ca share this base URL:
    const searchUrlBase = 'https://www.torontopubliclibrary.ca/search.jsp?Ntt=';
    return (
        <ul className="search-feed">
            {props.searches.map(search => {
                const searchUrlQuery = encodeURIComponent(search.terms);
                return (
                    <a href={searchUrlBase + searchUrlQuery} target="_blank">
                        <li key={search.receivedAt}>"{search.terms}"</li>
                    </a>
                )
            })}
        </ul>
    )
}

export default SearchFeed;