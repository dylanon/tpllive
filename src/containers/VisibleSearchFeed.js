import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFeed from '../components/SearchFeed';

const mapStateToProps = state => {
    return {
        searches: state.searches
    }
}

class VisibleSearchFeed extends Component {
    render() {
        const searches = Array.from(this.props.searches);
        // Sort reverse chronologically
        searches.sort((a,b) => {
            return b.receivedAt - a.receivedAt;
        });
        // Limit the number of searches displayed
        const visibleSearches = searches.slice(0, 20);
        
        return <SearchFeed searches={visibleSearches} />
    }
}

// Export VisibleSearchFeed connected to the Redux store
export default connect(
    mapStateToProps
)(VisibleSearchFeed);