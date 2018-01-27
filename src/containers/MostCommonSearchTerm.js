import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextStat from '../components/TextStat';

const mapStateToProps = state => {
    return {
        searches: state.searches
    }
}

class MostCommonSearchTerm extends Component {
    render() {
        const searches = this.props.searches;
        // For every search:
        // Split the search terms by spaces, store terms in array
        // Count the terms and store the count on an object
        // Iterate over the object, return an array of the most frequent terms
        // searches.map
        searches.forEach(search => {
            const terms = search.terms.trim().split(' ');
            console.log(terms);
        });
        return <TextStat title='Most common search terms' text='dog' />
    }
}

// Export with props from the Redux store
export default connect(
    mapStateToProps
)(MostCommonSearchTerm);