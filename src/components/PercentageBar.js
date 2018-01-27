import React from 'react';
import './PercentageBar.css';

const PercentageBar = props => {
    const style = {
        // Max width is 75% of container - Percent Text takes 25%
        width: `${props.percentage <= 100 ? props.percentage * 75 / 100 : 75}%`,
    }
    return (
        <div className="percentage-bar">
            <div className="percentage-bar__bar" style={style}></div>
            <p className="percentage-bar__percent-text">{props.percentage.toFixed(0)}%</p>
        </div>
    )
}

export default PercentageBar;