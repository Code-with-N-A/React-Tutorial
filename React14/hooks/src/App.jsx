import React, { useEffect, useState } from "react";
function App() {
  const[count, setCount] = useState(0);
  const[data, setData] = useState(0);

  // aysi chige pass karte hey useEffect me jo hame websit lode hote hi lod karna ho or btn ya kisi clik par kuchh na karna ho to
  //  useEffect me empty array pass karte ka youse hota hey jise ye barbar fungtion ko dusre btn ke click par call karne se rokata hey
  useEffect(()=>{
      collOne();

    },[]);
  // aysi chige pass karte hey useEffect me jo hame websit lode hote hi lod karna ho or btn ya kisi clik par kuchh karna ho to
  //  useEffect me array ke ander us state ka name pass karte ka youse hota hey jise ye us state ke value change hone par fungtion ko call karata hey
  useEffect(()=>{
      colKlcik();
  },[data]);

  function collOne(){
    console.log("Collection One")
  }
  function colKlcik(){
    console.log("Collection TO")
  }
  
  return(
    <>
      <h1>Hello, world! </h1>
      <button onClick={()=>setCount(count + 1)}>SetCount {count}</button>
      <button onClick={()=>setData(data + 1)}>SetData {data}</button>
    </>
  )
};
export default App;