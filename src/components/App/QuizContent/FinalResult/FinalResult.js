import React from 'react';
import { useHistory } from 'react-router-dom';

const FinalResult = (props) => {
    let history = useHistory();


    return (
        <div className='finalResult'>
            <p>{`Gratulacje ${props.userName}`}</p>
            <p>{`Udało Ci się ukończyć quiz z wynikiem: ${props.score} pkt`}</p>
            <button onClick={() => history.push('/dataresults')}>Tabela wyników</button>
        </div>
    )
}

export default FinalResult;