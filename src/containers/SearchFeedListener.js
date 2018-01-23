import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisibleSearchFeed from './VisibleSearchFeed';
import { receiveNewSearch } from '../redux/actions';
import moment from 'moment';

const mapDispatchToProps = dispatch => {
    return {
        onNewSearch: (messageEvent, timestamp) => {
            dispatch(receiveNewSearch(messageEvent, timestamp));
        }
    }
}

class SearchFeedListener extends Component {
    componentDidMount() {
        // Establish a WebSocket connection
        const connection = new WebSocket('ws://dashboard.tpllabs.ca:4571/rtsearches');
        // Store each new search that comes over the connection in state
        connection.onmessage = e => this.props.onNewSearch(e, Number(moment().format('x')));
    }

    render() {
        return <VisibleSearchFeed />
    }
}

// Export SearchFeedListener connected to the Redux store
export default connect(
    null,
    mapDispatchToProps
)(SearchFeedListener);