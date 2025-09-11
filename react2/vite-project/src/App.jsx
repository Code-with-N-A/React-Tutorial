function App() {
  return (
    <>

      <h2>{sum()}</h2>
      <h1>Component in React</h1>
      <Fruit></Fruit>
      <Colors></Colors>

    </>
  )
}

function Fruit() {
  return (
    <h1>Apple</h1>
  )
}


function Colors() {
  return (
    <h1>red</h1>

  )
}
function sum() {
  return 10+10
}
export default App;
// export default Fruit;