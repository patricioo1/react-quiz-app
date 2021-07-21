import React from 'react';

const CounterResult = (props) => {


    return (
        <div className="counterResult">
            <span>Punkty: </span>
            <span>{props.score}</span>
        </div>
    )
}

export default CounterResult;