import "./App.css"
import User from "./User";
import NewU from "./new";
function App(){
  return(
    <>
    <h1>APP file</h1>
    <User name="Nitesh Amule"/>
    <User/>
    <NewU age = {12}/>
    <NewU color="orange">
      <h1 style={{margin:"20px"}}>hii bro MRG</h1>
      <p>My Name IS Lorema</p>
      <button style={{margin:"20px", backgroundColor:"green", color:"#FFF"}}>Submit</button>
    </NewU>
    <NewU>
      <h1>hii bro GRG</h1>
      <p>My Name Is GIG</p>
      <button onClick={()=> alert("Hii brow")} style={{margin:"20px", backgroundColor:"yellow"}}>Submit</button>
    </NewU>
    </>
  )
}
export default App;