import React from 'react';

const CounterResult = ({score}) => {


    return (
        <div className="counterResult">
            <span>Punkty: </span>
            <span>{score}</span>
        </div>
    )
}

export default CounterResult;