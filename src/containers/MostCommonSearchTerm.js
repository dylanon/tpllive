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
        return <TextStat title='Most common search term' text='dog' />
    }
}

export default connect(
    mapStateToProps
)(MostCommonSearchTerm);