import "./App.css";
import React, { useState } from "react";
import Count from "./counting";
function App() {
  const[count,setCount]=useState(0);

  function handleClick(){
    console.log("Button clicked "+count);
  }

  return(
    <>
    <h1>Homen life cycle</h1>
    <button onClick={()=>{setCount(count+1)}}>Click <strong style={{color:"red"}}>{count}</strong>
    </button>
    <Count data={handleClick}/>
   
    </>
  )
};
export default App;



