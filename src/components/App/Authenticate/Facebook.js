import React from 'react'
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import db from './Firebase';

const Facebook = (props) => {

  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  let history = useHistory();

  const facebookSignIn = () => {
    firebase.auth().signInWithPopup(facebookProvider)
    .then(result => {
      console.log(result);
      const firstName = result.additionalUserInfo.profile.first_name;
      props.onClick(firstName)
      const email = result.additionalUserInfo.profile.email;
      props.onGo(email)
      const id = result.additionalUserInfo.profile.id;
      const newUser = result.additionalUserInfo.isNewUser;
      props.onChange(newUser)
      dataFirestore(firstName, email, id);
      history.push('/username')
    }).catch(error => {
      console.log(error.code);
      console.log(error.message);
    })
  }

  const dataFirestore = (firstName, email, id) => {
    db.settings({ timestampInSnapshots: true })
    db.collection("users").add({
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
    <div>
        <button onClick={() => {facebookSignIn()}}>Facebook</button>
    </div>
  );
};

export default Facebook;