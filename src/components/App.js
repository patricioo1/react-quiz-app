import React, { useState } from 'react';
import './App.css';
import NameOfUser from './NameOfUser';
import Logo from "../images/logozawka.png"
import QuizContent from './QuizContent';
import CounterResult from './CounterResult';


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

  const selectAnswer = (score) => {
    setIncrementScore(score)
    console.log(score)
    console.log(incrementScore)
  }

  return (
    <div className="App">
      <div className="LogoWrapper">
        <h1>ZawkaQuiz</h1>
        <CounterResult score={incrementScore} />
        <img src={Logo} alt="Logo" />
      </div>
      {userName ? <QuizContent score={selectAnswer} onChange={checkUserName} /> : <NameOfUser onStart={handleUserName} onChange={sendUserName} />}
    </div>
  );
}

export default App;
