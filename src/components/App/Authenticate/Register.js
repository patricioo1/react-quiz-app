import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from './Firebase';

const Register = (props) => {
    const [error, setError] = useState('')

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    let history = useHistory();

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user);
            if (user) {
                history.push('/')
            }
        }).catch(error => {
            console.log(error);
            setError('Musisz się zarejestrować')
        })
    }

    return (
      <div className='signUp'>
          <h2>Rejestracja</h2>
        <form>
            <label>Email</label>
            <input ref={emailRef} type="email" />
            <label>Hasło</label>
            <input ref={passwordRef} type="password" />
        </form>
        <p>{error}</p>
            <button onClick={(e) => signUp(e)}>Zarejestruj się</button>
      </div>
    );
};

export default Register;