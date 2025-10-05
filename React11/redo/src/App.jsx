import { useState } from "react";
import "./App.css";
function App() {
  const [gender, setGender] = useState("male");
  const [cuntry, setCuntry] = useState("usa");
  return (
    <>
      <h2>Hendal redio btn</h2>
      <h4>Select Gender</h4>
      <input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" id="male" value="male" checked={gender == "male"} />
      <label htmlFor="male">Male</label>
      <input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" id="female" value="female" checked={gender == "female"} />
      <label htmlFor=" female"> Female</label>

      <h2>Slected Fender: <strong style={{color:"red"}}>{gender.toLocaleUpperCase()}</strong></h2>


      <h2>Celect cety</h2>
      <select defaultValue={"usa"} onChange={(e)=> setCuntry(e.target.value)}>
        <option value="india">India</option>
        <option value="frans">Frans</option>
        <option value="usa">USA</option>
        <option value="chaina">Chaina</option>
      </select>
      <h2>Slected Cuntry: <strong style={{color:"red"}}>{cuntry.toLocaleUpperCase()}</strong></h2>

    </>
  )
};
export default App;