import React from 'react';

const FinalResult = (props) => {



    return (
        <div className='finalResult'>
            <p>{`Gratulacje ${props.onCheck}`}</p>
            <p>{`Udało Ci się ukończyć quiz z wynikiem: ${props.onChange} pkt`}</p>
        </div>
    )
}

export default FinalResult;