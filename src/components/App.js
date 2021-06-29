import React, { useState } from 'react';
import './App.css';
import NameOfUser from './NameOfUser';
import Logo from "../images/logozawka.png"
import QuizContent from './QuizContent';


function App() {

  const [userName, setUserName] = useState()

  const handleUserName = () => {
    setUserName(true)
  }



  return (
    <div className="App">
      <div className="LogoWrapper">
        <h1>ZawkaQuiz</h1>
        <img src={Logo} alt="Logo" />
      </div>
      {userName ? <QuizContent /> : <NameOfUser onStart={handleUserName} />}
    </div>
  );
}

export default App;
