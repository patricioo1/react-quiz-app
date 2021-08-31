import React from 'react'
import db from '../../Authenticate/Firebase'

const FinishButton = ({onClick, userUid, score, newUser}) => {

    const updateDataFirestore = () => {
        if (newUser) {
            db.collection('users').doc(userUid).update({
                score: score
            });
        }
    }

    return (
        <>
            <button className='finishButton' onClick={() => {onClick(); updateDataFirestore()}}>ZAKOŃCZ</button>
        </>
    )
}

export default FinishButton;