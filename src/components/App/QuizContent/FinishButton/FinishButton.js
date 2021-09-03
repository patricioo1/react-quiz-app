import React from 'react'
import db from '../../Authenticate/Firebase'
import firebase from 'firebase'

const FinishButton = ({onClick, userUid, score, newUser}) => {

    const logoutFacebook = () => {
        firebase.auth().signOut().then(() => {
            console.log('Wylogowano');
        }).catch(error => {
            console.log(error);
        })
    }

    const updateDataFirestore = () => {
        if (newUser) {
            db.collection('users').doc(userUid).update({
                score: score
            });
        }
        logoutFacebook();
    }

    return (
        <>
            <button className='finishButton' onClick={() => {onClick(); updateDataFirestore()}}>ZAKOŃCZ</button>
        </>
    )
}

export default FinishButton;