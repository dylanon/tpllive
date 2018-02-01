import React from 'react';
import './SearchFeed.css';
import SearchItem from './SearchItem';

const SearchFeed = props => {
    // All searches on torontopubliclibrary.ca share this base URL:
    const searchUrlBase = 'https://www.torontopubliclibrary.ca/search.jsp?Ntt=';
    return (
        <ul className="search-feed">
            {props.searches.map(search => {
                const searchUrlQuery = encodeURIComponent(search.terms);
                return (
                    <SearchItem 
                        key={search.receivedAt}
                        search={search}
                        searchUrlBase={searchUrlBase}
                        searchUrlQuery={searchUrlQuery} 
                    />
                )
            })}
        </ul>
    )
}

export default SearchFeed;