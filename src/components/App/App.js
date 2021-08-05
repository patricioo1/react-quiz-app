import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NameOfUser from './NameOfUser/NameOfUser';
import Logo from "../../images/logozawka.png"
import QuizContent from './QuizContent/QuizContent';
// import CounterResult from './CounterResult/CounterResult';
// eslint-disable-next-line no-unused-vars
import Firebase from './Authenticate/Firebase'
import Facebook from './Authenticate/Facebook';
import FinalResult from './QuizContent/FinalResult/FinalResult';
import DataFromFirestore from './Authenticate/DataFromFirestore';


function App() {
  const [incrementScore, setIncrementScore] = useState(0)
  const [userName, setUserName] = useState('')
  const [newUser, setNewUser] = useState();
  const [email, setEmail] = useState();

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

  const userEmail = (value) => {
    setEmail(value)
  }


  return (
    <div className="App">
      <div className="LogoWrapper">
        <div className="CounterContainer">
          <h1>ZawkaQuiz</h1>
          {/* {<CounterResult score={incrementScore} />} */}
        </div>
            <img src={Logo} alt="Logo" />
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Facebook onClick={nameOfUser} onChange={ifNewUser} onGo={userEmail} />
          </Route>
          <Route path="/username">
            <NameOfUser userName={userName} />
          </Route>
          <Route path="/content">
            <QuizContent onScore={selectAnswer} score={incrementScore} userName={userName} />
          </Route>
          <Route path="/results">
            <FinalResult />
          </Route>
          <Route path="/dataresults">
            <DataFromFirestore newUser={newUser} score={incrementScore} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
