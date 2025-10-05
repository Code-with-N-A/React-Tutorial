import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  let a = {
    comapni: "Google",
    name: "Nitsh Amule",
    work: "Softwear Dewlopear",
    age: 22,
    vileg: "Ujjain"
  }
  return (

    <>
      <h1>Styling In <strong style={{ color: "red" }}>Css</strong></h1>
      <div style={{ gap: "20px", alignItems: "center", marginLeft: "40%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "10px", width: "300px", borderRadius: "10px", textAlign: "center", display: "flex", flexDirection: "column", backgroundColor: "hsla(0, 0%, 0%, 1.00)" }}>
        <img style={{ backgroundColor: "yellow", borderRadius: "50%", width: "150px" }} src="data:image/png;base64,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" alt="img" />
        {show && (
          <div>
            <h2 style={{ color: "white" }}>{a.name}</h2>
            <h3 style={{ color: "lightgrey" }}>{a.work}</h3>
            <h4 style={{ color: "lightgrey" }}>Age : {a.age}</h4>
            <h4 style={{ color: "lightgrey" }}>Vileg : {a.vileg}</h4>
          </div>
        )}
        <button onClick={() => { setShow(!show) }} style={{ backgroundColor: "yellow", color: "black", borderRadius: "10px", padding: "10px", border: "none", fontWeight: "bold", cursor: "pointer" }}>Follow</button>

      </div>
    </>
  )
};
export default App;