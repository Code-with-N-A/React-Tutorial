import { useState } from "react";
function App(){
  const[count, setCount] = useState(0);
  return(
    <>
    <h1>hii multi condition {count}</h1>
    <button onClick={()=>setCount(count+1)}>Counts</button>
    {
      count == 0? <h1>condition 0</h1>:
      count == 1?<h1>conD 1</h1>:
      count == 2?<h1>conD 2</h1>:
      count == 3?<h1>conD 3</h1>:
      count == 4?<h1>conD 4</h1>:<p>Not Mch valu</p>
    }
    </>
  )
}
export default App;