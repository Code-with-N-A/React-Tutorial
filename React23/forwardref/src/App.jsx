import React, { useRef } from 'react';
import UserInput from './Userinput';

function App() {
  const inputRef = useRef(null);

  const updateInput = () => {
   inputRef.current.value = 100;
  inputRef.current.focus();
  inputRef.current.style.color = 'red';

  }
  return(
    <>
    <h1>ForwardRef in React</h1>
    <UserInput ref={inputRef}/>
    <button onClick={updateInput}>Click</button>
    </>
  )
};
export default App;