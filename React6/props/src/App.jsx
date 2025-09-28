import { useState } from "react";
import "./App.css";
import  User from "./User"
import Ar from "./Erres"
function App(){
  const[count,stor] = useState(0);
  // let age = 21
  let useObj = {
    Name: "Nitesh Amule",
    Age: 20,
    City: "India",
    Phone_NO: 9303546247
  };

  let mycollage = ["ITI","IIT","CSE","DSA"];

  return(
    <>
    <Ar collage={mycollage}/>
    {/* <User age={age}/> */}
    <User user={useObj}/>
    <h1>{count}</h1>
    <button onClick={()=> stor(count + 1)}disabled={(count === 10)}>Click</button>
    
    </>
  )
}
export default App;