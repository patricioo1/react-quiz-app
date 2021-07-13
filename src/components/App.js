import React, { useState } from 'react';
import './App.css';
import NameOfUser from './NameOfUser';
import Logo from "../images/logozawka.png"
import QuizContent from './QuizContent';
import CounterResult from './CounterResult';
import FinalResult from './FinalResult';


function App() {

  const [userName, setUserName] = useState()
  // const [finishQuiz, setFinishQuiz] = useState(false)
  const [lastClick, setLastClick] = useState(false)

  const handleUserName = () => {
    setUserName(true)
  }

  // const finishQuizContent = () => {
  //   setFinishQuiz(true)
  //   console.log('POSZŁO')
  // }

  const checkIfLastClick = () => {
    setLastClick(true)
  }


  return (
    <div className="App">
      <div className="LogoWrapper">
        <h1>ZawkaQuiz</h1>
        <CounterResult />
        <img src={Logo} alt="Logo" />
      </div>
      {userName ? <QuizContent onFinish={checkIfLastClick} /> : <NameOfUser onStart={handleUserName} />}
      {lastClick ? <FinalResult /> : ''}
    </div>
  );
}

export default App;
