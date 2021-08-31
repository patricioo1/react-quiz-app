import React from 'react'
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import db from './Firebase';
import Logo from '../../../images/logozawka.png'
import Ilustration from '../../../images/zawodnik.png'

const LoginPanel = ({onClick, onChange, onCheck, onLogin}) => {

  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  let history = useHistory();

  const logoutFacebook = () => {
        firebase.auth().signOut().then(() => {
            console.log('Wylogowano');
        }).catch(error => {
            console.log(error);
        })
    }

  const facebookSignIn = () => {
    firebase.auth().signInWithPopup(facebookProvider)
    .then(result => {
      console.log(result);
      const firstName = result.additionalUserInfo.profile.first_name;
      onClick(firstName)
      const email = result.additionalUserInfo.profile.email;
      const id = result.additionalUserInfo.profile.id;
      const uid = result.user.uid;
      console.log(uid);
      onCheck(uid)
      const newUser = result.additionalUserInfo.isNewUser;
      if (newUser) {
        onChange(newUser)
        dataFirestore(firstName, email, id, uid);
        history.push('/username')
      } else {
        logoutFacebook();
        history.push('/username')
      }
    }).catch(error => {
      console.log(error.code);
      console.log(error.message);
    })
  }

  const dataFirestore = (firstName, email, id, uid) => {
    db.settings({ timestampInSnapshots: true })
    db.collection('users').doc(uid).set({
      firstname: firstName,
      email: email,
      id: id
    })
    .then(() => {
      console.log('Document succesfully written!');
    })
    .catch(error => {
      console.log('Error adding document', error);
    })
  }



  return (
    <div className='facebookLogin'>
      <div className='facebookLogin-description'>
        <img src={Logo} alt="Logo" />
        <h1>Quiz z okazji 70-lecia Klubu <span>Zawisza Pajęczno</span></h1>
        <p>Quiz powstał w celach rozrywkowych. Logując się wyrażasz zgodę na przetwarzanie swoich danych osobowych, tj. imię oraz email, które będą użyte w celach informacyjnych, w tabeli wyników. Jeśli się nie zgadzasz, zrezygnuj z gry teraz.</p>
        <button onClick={() => facebookSignIn()}>Zaloguj się przez Facebooka</button>
      </div>
      <div className="facebookLogin-ilustration">
        <img src={Ilustration} alt="Ilustracja zawodnika" />
      </div>
    </div>
  );
};

export default LoginPanel;