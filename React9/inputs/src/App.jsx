import { useState } from "react";
import "./App.css";

function App(){
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
 

  return (
    <div className="contenor">
      <h1>Control Components</h1>
      <form onSubmit={(e)=> e.preventDefault()}>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter Name" 
        />
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Password" 
        />
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter Email" 
        />
                
        <button 
          type="button"
          onClick={()=>{
            setName('');
            setEmail('');
            setPassword('');
          }}
        >
          Submit
        </button>

        <h3>
          {"Name: "+name.toLocaleUpperCase()}<br/>
          {"Password: "+password.toLocaleUpperCase()}<br/>
          {"Email: "+email.toLocaleLowerCase()}
        </h3>
      </form>
    </div>
  )
}

export default App;
