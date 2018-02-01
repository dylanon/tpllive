import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import './SearchItem.css';

class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false
        }
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }

    render() {
        // Configure transition
        const duration = 400;

        const defaultStyles = {
            transition: `opacity ${duration}ms ease, transform 0.3s ease`,
            opacity: 0
        }
        
        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 }
        }

        return (
            <Transition in={this.state.mounted} timeout={duration}>
                {transitionState => {
                    return (
                        <a className="search-feed__link" 
                            href={this.props.searchUrlBase + this.props.searchUrlQuery} 
                            target="_blank" 
                            style={{
                                ...defaultStyles,
                                ...transitionStyles[transitionState]
                            }}
                        >
                            <li className="search-feed__li">
                                {this.props.search.terms}
                            </li>
                        </a>
                    )
                }}
            </Transition>
        )
    }
}

export default SearchItem;