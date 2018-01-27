import React from 'react';

const TextStat = props => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default TextStat;