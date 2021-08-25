import React, { useEffect, useState } from 'react'
// import { auth } from './Firebase'
import db from './Firebase';

const DataFromFirestore = ({score, newUser}) => {
    // const [userIdFromFirestore, setUserFromFirestore] = useState();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const subscriber = db.collection('users').onSnapshot(snapshot => {
            const getUsersFromFirebase = [];
            snapshot.forEach(doc => {
                getUsersFromFirebase.push({...doc.data(),
                key: doc.id})
            // const userIdFromDataBase = doc._delegate._firestore._credentials.currentUser.uid;
            // setUserFromFirestore(userIdFromDataBase)
        })
        setUsers(getUsersFromFirebase)
        setLoading(false);
    })
    return () => subscriber()
    }, [])

    if (loading) {
        return <h1>Ładowanie..</h1>
    }
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
                            <p>{score}</p>
                        </div>
                        )
                    })
                }
            </div>
        );
};

export default DataFromFirestore;