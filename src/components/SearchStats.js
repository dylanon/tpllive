import React from 'react';
import TextStat from './TextStat';

const SearchStats = props => {
    return (
        <section className="search-stats">
            <h2>Search stats</h2>
            <TextStat title='Most common search term' text='dog' />
            <TextStat title='Average search length' text='18 characters'/>
      </section>
    )
}

export default SearchStats;