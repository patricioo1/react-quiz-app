import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../../images/logozawka.png'
import Zawisza from '../../../images/zawisza1951.jpg'

const NameOfUser = ({userName}) => {

    let history = useHistory();

    return (
        <div className="userName">
            <div className="userName-description">
                <img src={Logo} alt="Logo" />
                <h3>Witaj, <span>{`${userName}!`}</span></h3>
                <p>Życzę Ci jak najlepszego wyniku i chciałbym przedstawić Ci zasady quizu:</p>
                <p>&bull; możesz grać tyle razy ile zechcesz, ale musisz wiedzieć, że do tabeli wyników liczy się tylko i wyłącznie Twój pierwszy rezultat</p>
                <p>&bull; za udzielenie prawidłowej odpowiedzi otrzymujesz 1 punkt</p>
                <p>&bull; jeśli wyjdziesz z quizu, niestety zostaniesz wylogowany i nie będziesz mógł już poprawić swojego wyniku</p>
                <button className="startButton"
                    onClick={() => {history.push('/content')}}>START</button>
            </div>
            <div className="userName-image">
            <img src={Zawisza} alt="Zdjęcie Zawiszy 1951 rok" />
            </div>
        </div>
    );
}

export default NameOfUser;