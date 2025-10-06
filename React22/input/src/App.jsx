import { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  const inputh = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Hellow"

  }
  return(

    <>
    <h1>UseRef</h1>
    <input ref={inputRef} type="text" name="" id="" placeholder="Enter your name" />
    <button onClick={inputh}>Click</button>
    </>
  )
};
export default App;