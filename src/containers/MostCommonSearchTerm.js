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
        // Create an inventory object
        const termInventory = searches.reduce((countObject, search) => {
            // Copy the countObject
            const nextCountObject = Object.assign({}, countObject);
            // Split the search terms by spaces, store terms in array
            const terms = search.terms.trim().split(' ');
            terms.forEach(term => {
                const lowerCaseTerm = term.toLowerCase();
                // Set count to 0 for new terms
                if (nextCountObject[lowerCaseTerm] === undefined) {
                    nextCountObject[lowerCaseTerm] = 0;
                }
                // Increase the count for the term
                nextCountObject[lowerCaseTerm] += 1;
            });
            // Return an object with terms as property keys, and number of occurences as values
            return nextCountObject;
        }, {});
        // Unpack the inventory object into an array
        const termArray = [];
        for (let key in termInventory) {
            termArray.push({
                term: key,
                frequency: termInventory[key]
            });
        }
        // Find the maximum frequency
        const maxFrequency = termArray.reduce((maxFrequency, term) => {
            if (term.term !== 'the' && term.term !== 'of') {
                // Don't count common prepositions: 'the', 'of', 'a'
                return Math.max(maxFrequency, term.frequency);
            } else {
                return maxFrequency;
            }
        }, 0);
        console.log(maxFrequency);
        // Return an array of items that match the maximum frequency
        const mostCommonSearchTerms = termArray.filter(term => {
            // Would also need to filter out common prepositions here 'the', 'of', 'a'
            return term.frequency === maxFrequency;
        });
        console.log(mostCommonSearchTerms);

        return <TextStat title='Most common search terms' text='dog' />
    }
}

// Export with props from the Redux store
export default connect(
    mapStateToProps
)(MostCommonSearchTerm);