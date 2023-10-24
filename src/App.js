import React, { useState } from 'react';
import './App.css';

function App() {
  // useState Hook Use 
  const [userChar, setUserChar] = useState("");
  const [userNum, setUserNum] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(8);

  function generatePassword() {
    let pass = ""
    let str = userChar + userNum
    for (let i = 0; i < value; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }

  return (
    <>
      <h1 style={{ padding: '10px 30px' }}>Password Generator</h1>
      <div style={{ padding: '10px 20px' }}>
        <input type='text' placeholder='Enter a Character' style={{ padding: '10px 20px', margin: '0px 10px' }} value={userChar} onChange={(e) => setUserChar(e.target.value)} />
        <input type='text' placeholder='Enter a Number' style={{ padding: '10px 20px' }} value={userNum} onChange={(e) => setUserNum(e.target.value)} />
        <button style={{ padding: '10px 20px', margin: '0px 10px' }} onClick={generatePassword}>Generate Password</button>
      </div>
      <div style={{ margin: '2px 30px' }}>
        <input type='text' placeholder='Your Password' style={{ padding: '10px 20px', width: '100vh' }} value={password} onChange={() => null} /> <br />
      </div>
    </>
  );
}

export default App;
