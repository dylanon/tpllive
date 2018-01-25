import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LogoHeading from '../components/LogoHeading';
import PercentageBar from '../components/PercentageBar';

const mapStateToProps = state => {
    return {
        searches: state.searches
    }
}

class PercentageCalculator extends Component {
    render() {
        // Count occurences of each browser and store in an object
        const browserCounts = this.props.searches.reduce((countObject, currentSearch) => {
            const countObjectCopy = Object.assign({}, countObject);
            const browserName = currentSearch.browser;
            if (countObjectCopy[browserName] === undefined) {
                countObjectCopy[browserName] = 0;
            }
            countObjectCopy[browserName] += 1;
            return countObjectCopy;
        }, {});
        // Unpack the count object into array of objects
        // We will later map over this array to render a component for each
        const browserCountArray = [];
        for (let browserKey in browserCounts) {
            browserCountArray.push({
                browserName: [browserKey],
                percentage: browserCounts[browserKey] / this.props.searches.length * 100
            });
        }

        return (
            <Fragment>
                {browserCountArray.map(browser => {
                    return (
                        <Fragment key={browser.browserName}>
                            <LogoHeading heading={browser.browserName} />
                            <PercentageBar percentage={browser.percentage} />
                        </Fragment>
                    )
                })}
            </Fragment>
        )
    }
}

// Export with props from the Redux store
export default connect(
    mapStateToProps
)(PercentageCalculator);