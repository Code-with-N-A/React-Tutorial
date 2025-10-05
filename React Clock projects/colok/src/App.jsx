import Clock from "./clock";
import { useState } from "react";

function App(){
  const[color, setColor]=useState("red");
  return(
    <>
    <div className="con">
    <h1>App</h1>
    <select onChange={(e)=>setColor(e.target.value)} style={{marginBottom:"20px",padding:"10px",borderRadius:"10px"}}>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="yellow">Yellow</option>
    </select>
    <Clock color={color} />
    </div>
    </>
  )
};
export default App;