import React, {useState} from 'react';
import './App.css';
import NameOfUser from './User';
import Logo from "../images/logozawka.png"
import QuizContent from './QuizContent';


function App() {

  const [username, setUserName] = useState(undefined)

  const handleUserName = () => {
    setUserName(true)
  }



  return (
    <div className="App">
      <div className="LogoWrapper">
        <h1>ZawkaQuiz</h1>
        <img src={Logo} alt="Logo" />
      </div>
        {username ? <QuizContent /> : <NameOfUser onStart={handleUserName}/>}
      </div>
  );
}

export default App;
