import React from 'react';

const PercentageBar = props => {
    const style = {
        background: 'tomato',
        height: '10px',
        content: '',
        width: `${props.percentage}%`,
        transition: 'width 0.3s ease'
    }
    return (
        <div>
            <div style={style}></div>
            <p>{props.percentage.toFixed(0)}%</p>
        </div>
    )
}

export default PercentageBar;