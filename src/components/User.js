import React, { useState } from 'react';

const NameOfUser = (props) => {
    const [value, setValue] = useState('');
    const [myArray, setMyArray] = useState([]);

    const handleInputValue = (e) => {
        setValue(e.target.value)
        console.log(e.target.value);
    }

    const saveInputValue = () => {
        setMyArray([myArray.unshift(value)])
        if (value === '') {
            setMyArray([myArray.shift(value)])
            console.log(value)
        }
        console.log(value);
        console.log(`${value} pushed to myArray`)
        console.log(myArray)
    }

    return (
        <div className="userName">
            <h3>Podaj swoję imię, aby rozpocząć quiz</h3>
            <input type="text" placeholder="Twoje imię" onChange={(e) => handleInputValue(e)}/>
            <button
            onClick={(e) => {saveInputValue();
                if (value === '') {
                e.preventDefault();
                console.log('Wpisz swoje imię')
                } else {
                    props.onStart();
                }}}>START</button>
        </div>
    );
}

export default NameOfUser;