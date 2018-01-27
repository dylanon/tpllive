import React from 'react';
// import TextStat from './TextStat';
import MostCommonSearchTerm from '../containers/MostCommonSearchTerm';

const SearchStats = props => {
    return (
        <section className="search-stats">
            <h2>Search stats</h2>
            <MostCommonSearchTerm />
            {/* <TextStat title='Average search length' text='18 characters'/> */}
      </section>
    )
}

export default SearchStats;