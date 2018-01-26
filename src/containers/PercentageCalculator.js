import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LogoHeading from '../components/LogoHeading';
import PercentageBar from '../components/PercentageBar';

// Browser logos
import browser from '../assets/browser.html_256x256.png';
import chrome from '../assets/chrome.svg';
import edge from '../assets/edge.svg';
import firefox from '../assets/firefox.svg';
import internetExplorer from '../assets/internet-explorer_9-11_256x256.png';
import opera from '../assets/opera.svg';
import safari from '../assets/safari_256x256.png';
import samsung from '../assets/samsungInternet.svg';

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
            // Determine appropriate browser logo
            const lowerCaseBrowserKey = browserKey.toLowerCase();
            let browserLogo;
            if (lowerCaseBrowserKey.includes('chrome')) {
                browserLogo = chrome;
            } else if (lowerCaseBrowserKey.includes('edge')) {
                browserLogo = edge;
            } else if (lowerCaseBrowserKey.includes('firefox')) {
                browserLogo = firefox;
            } else if (lowerCaseBrowserKey.includes('internet') && lowerCaseBrowserKey.includes('explorer')) {
                browserLogo = internetExplorer;
            } else if (lowerCaseBrowserKey.includes('opera')) {
                browserLogo = opera;
            } else if (lowerCaseBrowserKey.includes('safari')) {
                browserLogo = safari;
            } else if (lowerCaseBrowserKey.includes('samsung')) {
                browserLogo = samsung;
            } else {
                browserLogo = browser;
            }
            // Construct an object with browser info and push it to an array
            browserCountArray.push({
                name: [browserKey],
                logo: browserLogo,
                percentage: browserCounts[browserKey] / this.props.searches.length * 100
            });
        }

        return (
            <Fragment>
                {browserCountArray.map(browser => {
                    return (
                        <Fragment key={browser.name}>
                            <LogoHeading logoPath={browser.logo} heading={browser.name} />
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