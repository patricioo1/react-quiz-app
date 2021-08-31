import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../../../images/logozawka.png'

const FinalResult = ({userName, score}) => {
    let history = useHistory();

    return (
        <div className='finalResult'>
            <div className="finalResult-borderDecoration"></div>
            <img src={Logo} alt="Logo" />
            <p>Gratulacje,</p>
            <p><span>{`${userName}!`}</span></p>
            <p>Udało Ci się ukończyć quiz z wynikiem: <span>{`${score} pkt`}</span></p>
            <button onClick={() => history.push('/dataresults')}>Tabela wyników</button>
            <div className="finalResult-borderDecoration"></div>
        </div>
    )
}

export default FinalResult;