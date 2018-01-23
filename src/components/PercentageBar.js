import React from 'react';

const PercentageBar = props => {
    const style = {
        background: 'tomato',
        height: '10px',
        content: ''
    }
    return (
        <div>
            <div style={style}></div>
            <p>100%</p>
        </div>
    )
}

export default PercentageBar;