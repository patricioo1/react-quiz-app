import React, { useState } from 'react';
import './App.css';
import NameOfUser from './NameOfUser';
import Logo from "../images/logozawka.png"
import QuizContent from './QuizContent';
import CounterResult from './CounterResult';


function App() {

  const [userName, setUserName] = useState()
  const [incrementScore, setIncrementScore] = useState()
  const [checkUserName, setCheckUserName] = useState([])

  const handleUserName = () => {
    setUserName(true)
  }

  const getUserName = (value) => {
    setCheckUserName([checkUserName.push(value)])
    console.log(checkUserName)
  }

  const selectAnswer = (score) => {
    setIncrementScore(score)
    console.log(score)
  }

  return (
    <div className="App">
      <div className="LogoWrapper">
        <h1>ZawkaQuiz</h1>
        <CounterResult onSelect={incrementScore} />
        <img src={Logo} alt="Logo" />
      </div>
      {userName ? <QuizContent onSelect={selectAnswer} onChange={checkUserName} /> : <NameOfUser onStart={handleUserName} onChange={getUserName} />}
    </div>
  );
}

export default App;
