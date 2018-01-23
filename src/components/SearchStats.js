import React from 'react';
import TextStat from './TextStat';

const SearchStats = props => {
    return (
        <section className="search-stats">
            <h2>Search stats</h2>
            <TextStat />
            <TextStat />
            <TextStat />
      </section>
    )
}

export default SearchStats;