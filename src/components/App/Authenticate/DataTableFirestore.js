import React, { useEffect, useState } from 'react'
// import { auth } from './Firebase'
import db from './Firebase';
import Logo from '../../../images/logozawka.png'

const DataTableFirestore = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const subscriber = db.collection('users').onSnapshot(snapshot => {
            const getUsersFromFirebase = [];
            snapshot.forEach(doc => {
                getUsersFromFirebase.push({...doc.data(),
                key: doc.id})
        })
        setUsers(getUsersFromFirebase)
        setLoading(false);
    })
    return () => subscriber()
    }, [])

    if (loading) {
        return (
            <div className="resultsTable">
                <h1>Ładowanie...</h1>
            </div>
        )
    }
        return (
            <div className='resultsTable'>
                <div className="resultsTable-hero">
                <h2>Zawisza <span>Pajęczno</span></h2>
                <img src={Logo} alt="Logo" />
                </div>
                <h2>Tabela wyników</h2>
                <div className='resultsTable-description'>
                    <p>Imię</p>
                    <p>Email</p>
                    <p>Punkty</p>
                </div>
                {users.sort((a, b) => {
                    console.log(a.score);
                    return parseInt(a.score) < parseInt(b.score) ? 1 : -1;
                }).map((user, id) => {
                    return (
                        <div key={id} className="resultsTable-data">
                            <p>{user.firstname}</p>
                            <p>{user.email}</p>
                            <p>{user.score}</p>
                        </div>
                        )
                    })
                }
            </div>
        );
};

export default DataTableFirestore;