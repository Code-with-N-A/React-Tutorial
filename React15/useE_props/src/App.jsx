import "./App.css";
import Counter from "./Counter";
import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  return(
    <>
      <h1>Welcome to My App</h1>
      <Counter count={count} data={data} />
      <button onClick={()=>setCount(count + 1)}>Counter: <strong style={{color:"red"}}>{count}</strong></button>
      <button onClick={()=>setData(data - 1)}>Counter: <strong style={{color:"red"}}>{data}</strong></button>


    </>
  )

};
export default App;