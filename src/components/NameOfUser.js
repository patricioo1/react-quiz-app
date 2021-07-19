import React, { useState } from 'react';

const NameOfUser = (props) => {
    const [value, setValue] = useState('');
    const [myArray, setMyArray] = useState([]);

    const handleInputValue = (e) => {
        setValue(e.target.value.trim())
    }

    const saveInputValue = () => {
        setMyArray([myArray.unshift(value)])
        props.onChange(value)
        console.log(value);
        console.log(`${value} pushed to myArray`)
        console.log(myArray)
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
                        saveInputValue();
                        props.onStart();
                    }
                }}>START</button>
        </div>
    );
}

export default NameOfUser;