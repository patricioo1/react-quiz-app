import React from 'react';

const FinalResult = (props) => {



    return (
        <div className='finalResult'>
            <p>{`Gratulacje ${props.userName}`}</p>
            <p>{`Udało Ci się ukończyć quiz z wynikiem: ${props.score} pkt`}</p>
        </div>
    )
}

export default FinalResult;