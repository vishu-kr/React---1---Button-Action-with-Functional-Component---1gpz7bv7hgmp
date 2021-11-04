import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [state, setstate] = useState("")  
  function myFunc(){
    setstate("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
  }
  return (
    <div id="main">
      <p id="para">{state}</p>
      <button id="click" onClick={myFunc}>Click me</button>
    </div>
  );
}


export default App;
