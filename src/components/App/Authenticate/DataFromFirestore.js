import React, { useState } from 'react'
import firebase from 'firebase';
import db from './Firebase';

const DataFromFirestore = (props) => {
    const [currentUserId, setCurrentUser] = useState();
    const [userIdFromFirestore, setUserFromFirestore] = useState();

    const loginUser = () => {
        const user = firebase.auth().currentUser;
        if (user !== null && props.newUser === true) {
            const uid = user.uid;
            setCurrentUser(uid)
        }
    }

    const dataFromFirestore = () => {
        db.collection('users').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                console.log(doc);
                const userIdFromDataBase = doc._delegate._firestore._credentials.currentUser.uid;
                setUserFromFirestore(userIdFromDataBase)
            })
        })
    }

    if (currentUserId === userIdFromFirestore) {
    return (
      <div className='resultsTable'>
          <h2>Tabela wyników</h2>
          <div className='resultsTable-description'>
              <p>Imię</p>
              <p>Email</p>
              <p>Uzyskane punkty</p>
          </div>
          <div className='resultsTable-data'>
            <p>{props.userName}</p>
            <p>{props.email}</p>
            <p>{props.score}</p>
          </div>
      </div>
    );
    }
};

export default DataFromFirestore;