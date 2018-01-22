import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFeed from './SearchFeed';
import { receiveNewSearch } from './redux/actions';

const mapStateToProps = state => {
    return {
        searches: state.searches
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewSearch: (messageEvent) => {
            dispatch(receiveNewSearch(messageEvent));
        }
    }
}

class SearchFeedListener extends Component {
    componentDidMount() {
        // Establish a WebSocket connection
        const connection = new WebSocket('ws://dashboard.tpllabs.ca:4571/rtsearches');
        // Store each new search that comes over the connection in state
        connection.onmessage = e => this.props.onNewSearch(e);
    }

    render() {
        return <SearchFeed searches={this.props.searches} />
    }
}

// Export SearchFeedListener connected to the Redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFeedListener);