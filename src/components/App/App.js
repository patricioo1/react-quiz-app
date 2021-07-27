import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NameOfUser from './NameOfUser/NameOfUser';
import Logo from "../../images/logozawka.png"
import QuizContent from './QuizContent/QuizContent';
import CounterResult from './CounterResult/CounterResult';
import SignIn from './Authenticate/SignIn';
import Register from './Authenticate/Register';


function App() {
  const [userName, setUserName] = useState()
  const [incrementScore, setIncrementScore] = useState(0)
  const [checkUserName, setCheckUserName] = useState()

  const handleUserName = () => {
    setUserName(true)
  }

  const sendUserName = (value) => {
    setCheckUserName(value)
    console.log(value)
    console.log(checkUserName)
  }

  const selectAnswer = () => {
    setIncrementScore(incrementScore + 1)
    console.log(incrementScore)
  }


  return (
    <div className="App">
      <div className="LogoWrapper">
        <div className="CounterContainer">
          <h1>ZawkaQuiz</h1>
          {userName ? <CounterResult score={incrementScore} /> : ''}
        </div>
            <img src={Logo} alt="Logo" />
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
          <SignIn />
          </Route>
          <Route path="/register">
          <Register />
          </Route>
          <Route path="/username">
          <NameOfUser onStart={handleUserName} onCheck={sendUserName} />
          </Route>
          <Route path="/content">
          <QuizContent onScore={selectAnswer} score={incrementScore} userName={checkUserName} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
