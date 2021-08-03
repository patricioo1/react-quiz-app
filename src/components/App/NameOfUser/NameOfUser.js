import React from 'react';
import { useHistory } from 'react-router-dom';

const NameOfUser = (props) => {

    let history = useHistory();

    return (
        <div className="userName">
            <h3>{`Witaj ${props.userName}!`}</h3>
            <button className="startButton"
                onClick={(e) => {history.push('/content')}}>START</button>
        </div>
    );
}

export default NameOfUser;