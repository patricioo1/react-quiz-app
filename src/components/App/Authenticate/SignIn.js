import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from './Firebase';

const SignIn = (props) => {
    const [error, setError] = useState('')

    let history = useHistory();
    const emailRef = useRef(null);
    const passwordRef = useRef(null)
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
            if (user) {
                console.log('Zalogowano pomyślnie');
                history.push('/username')
            }
        }).catch(error => {
            console.log(error);
            setError('Nie ma takiego konta')
        })
    }

    return (
      <div className='signIn'>
        <h2>Logowanie</h2>
        <form>
            <label>Email</label>
            <input ref={emailRef} type="email" />
            <label>Hasło</label>
            <input ref={passwordRef} type="password" />
            <p>Zapomniałem hasła</p>
        </form>
        <div className="accountMessage">
            <p>{error}</p>
            <p>Nie masz konta? <a href="/register">Zarejestruj się!</a></p>
        </div>
            <button onClick={(e) => signIn(e)}>Zaloguj się</button>
    </div>
    );
};

export default SignIn;