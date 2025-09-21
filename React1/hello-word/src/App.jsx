import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <div className="man">
      <div className="counter">
        <h1>Khali: {count}</h1>
        <div className="counter-buttons">
          <button onClick={() => setCount(count + 1)} disabled={count >= 10}>Count (+)</button>
          <button onClick={() => setCount(count - 1)} disabled={count <= 0}>Count (-)</button>
        </div>
      </div>

      <div className="vs"><h1>V/S</h1></div>

      <div className="counter">
        <h1>Undertaker: {count1}</h1>
        <div className="counter-buttons">
          <button onClick={() => setCount1(count1 + 1)} disabled={count1 >= 10}>Count (+)</button>
          <button onClick={() => setCount1(count1 - 1)} disabled={count1 <= 0}>Count (-)</button>
        </div>
      </div>
    </div>
   
  );
}

export default App;
