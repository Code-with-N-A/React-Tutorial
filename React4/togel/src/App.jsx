import "./App.css"
import { useState } from "react";
function App(){
  const [display,setDisplay] = useState(true)
  const [count,setCount] = useState(0)
  const toggel = () =>{
    setDisplay(!display);
    setCount(prev => (prev < 10 ? prev + 1: prev))
    };
  
  return(
    <>
    <h1>Hellow Togel</h1>
    <p>{count}</p>
    {
      display && <h1> Nitesh Amule</h1>

    }
    <button onClick={toggel} disabled={count >= 10}>{display ? "Hide" : "Show"}</button>
    </>
  )
}
export default App;
