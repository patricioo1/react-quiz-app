import React, { useEffect, useState } from 'react'
// import { auth } from './Firebase'
import db from './Firebase';

const DataFromFirestore = (props) => {
    // const [currentUserId, setCurrentUser] = useState();
    const [userIdFromFirestore, setUserFromFirestore] = useState();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        db.collection('users').get().then(snapshot => {
            snapshot.forEach(doc => {
            const userIdFromDataBase = doc._delegate._firestore._credentials.currentUser.uid;
            setUserFromFirestore(userIdFromDataBase)
            const data = doc.data()
            setUsers([data])
            setLoading(false);
        })
        })
    }, [])


    // if (loading) {
    //     return <h1>Loading..</h1>
    // }

    //  if (currentUserId === userIdFromFirestore) {
        return (
            <div className='resultsTable'>
                <h2>Tabela wyników</h2>
                <div className='resultsTable-description'>
                    <p>Imię</p>
                    <p>Email</p>
                    <p>Uzyskane punkty</p>
                </div>
                {users.map((user, id) => {
                    return (
                        <div key={id} className="resultsTable-data">
                            <p>{user.firstname}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                    })
                }
            </div>
        );
    // }
    // return null;
};

export default DataFromFirestore;