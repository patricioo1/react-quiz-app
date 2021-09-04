import React, { useEffect, useState } from 'react'
import db from './Firebase';
import Logo from '../../../images/logozawka.png'
import { useHistory } from 'react-router-dom';

const DataTableFirestore = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    let history = useHistory();

    const mainPage = () => {
        history.push('/')
    }

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
                <button onClick={() => mainPage()}>Zagraj jeszcze raz</button>
            </div>
        );
};

export default DataTableFirestore;