
function App() {
  let a = "Apple"; 

  const b = () => {
    a = "Mango"; 
    console.log("New Value:", a); 
  };

  return (
    <>
      <h1>Fruits: {a}</h1>
      <button onClick={b}>Submit</button>
    </>
  );
}

export default App;
