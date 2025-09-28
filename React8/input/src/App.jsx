import { useState } from 'react';
import './App.css'

function App() {
  const handleSearch = () => {
    setVele("")
    
  };
  const[vale,setVele] = useState("");

  return (
    <>
      <div className="container">
        <h1>
          <span style={{ color: "blue" }}>G</span>
          <span style={{ color: "red" }}>o</span>
          <span style={{ color: "yellow" }}>o</span>
          <span style={{ color: "blue" }}>g</span>
          <span style={{ color: "green" }}>l</span>
          <span style={{ color: "red" }}>e</span>
        </h1>

        <div className="search-box">
          <input type="text" value={vale} placeholder="Search Google..." onChange={(event)=> setVele(event.target.value)}/>
          <span className="search-icon" onClick={handleSearch}>🔍</span>
        </div>
        <h3>{vale.toLocaleUpperCase()}</h3>
      </div>
    </>
  )
}

export default App;
