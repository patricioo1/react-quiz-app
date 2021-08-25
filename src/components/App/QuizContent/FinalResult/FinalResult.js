import React from 'react';
import { useHistory } from 'react-router-dom';

const FinalResult = ({userName, score}) => {
    let history = useHistory();

    return (
        <div className='finalResult'>
            <p>{`Gratulacje ${userName}`}</p>
            <p>{`Udało Ci się ukończyć quiz z wynikiem: ${score} pkt`}</p>
            <button onClick={() => history.push('/dataresults')}>Tabela wyników</button>
        </div>
    )
}

export default FinalResult;