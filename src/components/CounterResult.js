import React from 'react';

const CounterResult = (props) => {


    return (
        <div className="counterResult">
            <span>Punkty: </span>
            <span>{props.onSelect}</span>
            {console.log(props.onSelect)}
        </div>
    )
}

export default CounterResult;