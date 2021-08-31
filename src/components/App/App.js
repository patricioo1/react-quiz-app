import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NameOfUser from './NameOfUser/NameOfUser';
import QuizContent from './QuizContent/QuizContent';
// eslint-disable-next-line no-unused-vars
import FinalResult from './QuizContent/FinalResult/FinalResult';
import DataTableFirestore from './Authenticate/DataTableFirestore';
import LoginPanel from './Authenticate/LoginPanel';


function App() {
  const [incrementScore, setIncrementScore] = useState(0)
  const [userName, setUserName] = useState('')
  const [newUser, setNewUser] = useState();
  const [userUid, setUserUid] = useState();

  const selectAnswer = () => {
    setIncrementScore(incrementScore + 1)
    console.log(incrementScore)
  }

  const nameOfUser = (user) => {
    setUserName(user)
  }

  const ifNewUser = (user) => {
    setNewUser(user)
    console.log(user);
  }

  const getUserUid = (uid) => {
    setUserUid(uid)
  }

  return (
    <div className="App">
      <div className="secondaryColorWhite">
        <p>70 lat</p>
        <p>Zawisza</p>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPanel onClick={nameOfUser} onChange={ifNewUser} onCheck={getUserUid} />
          </Route>
          <Route path="/username">
            <NameOfUser userName={userName} />
          </Route>
          <Route path="/content">
            <QuizContent onScore={selectAnswer} score={incrementScore} userName={userName} userUid={userUid} newUser={newUser} />
          </Route>
          <Route path="/results">
            <FinalResult />
          </Route>
          <Route path="/dataresults">
            <DataTableFirestore newUser={newUser} score={incrementScore} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
