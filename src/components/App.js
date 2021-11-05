import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [msg, setmsg] = useState("")  
  function myFunc(){
    if (msg===""){
    setmsg(msg=<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
    }
  };
  return (
    <div id="main">
     
      <button id="click" onClick={myFunc}>Click me</button>
      {msg}
    </div>
  );
}


export default App;
