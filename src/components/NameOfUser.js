import React, { useState } from 'react';

const NameOfUser = (props) => {
    const [value, setValue] = useState('');

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
                        // saveInputValue();
                        props.onStart();
                        props.onCheck(value);
                    }
                }}>START</button>
        </div>
    );
}

export default NameOfUser;