
import "./App.css"
import { useState } from "react";
import User from "./prectis1";
function App(){
  const[userValu,computerValu] = useState("AmuleStack");
  function collname(){
    computerValu(prompt("Enter your name"));
    frut()
  };
  const frut=()=>{
    confirm(userValu);
  }
  return(
    <>
    <div className="mean">
    <h1>Hii bro <strong>{"@"+userValu.toLocaleUpperCase()}</strong></h1>
    <User/>
    <button onClick={collname}>Click</button>
    </div>
    </>
  );
};

export default App;