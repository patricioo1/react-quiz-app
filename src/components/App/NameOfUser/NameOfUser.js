import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NameOfUser = (props) => {
    const [value, setValue] = useState('');

    let history = useHistory();

    const handleInputValue = (e) => {
        setValue(e.target.value.trim())
        console.log(value)
    }

    return (
        <div className="userName">
            <h3>Podaj swoję imię, aby rozpocząć quiz</h3>
            <input type="text" placeholder="Twoje imię" onChange={(e) => handleInputValue(e)} />
            <button className="startButton"
                onClick={(e) => {
                    if (value === '') {
                        alert('Wpisz swoje imię aby rozpocząć quiz :)')
                        e.preventDefault();
                    } else {
                        props.onStart();
                        props.onCheck(value);
                        history.push('/content')
                    }
                }}>START</button>
        </div>
    );
}

export default NameOfUser;