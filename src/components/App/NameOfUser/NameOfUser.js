import React from 'react';
import { useHistory } from 'react-router-dom';

const NameOfUser = ({userName}) => {

    let history = useHistory();

    return (
        <div className="userName">
            <h3>{`Witaj ${userName}!`}</h3>
            <button className="startButton"
                onClick={(e) => {history.push('/content')}}>START</button>
        </div>
    );
}

export default NameOfUser;