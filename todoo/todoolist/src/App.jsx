import { useState } from "react";
import "./App.css";
function App() {
  let [tasck,setTasck] = useState([]);

  let addMtasck = (e)=>{
    e.preventDefault();
    let username = e.target.addname.value.trim();
    // console.log(username);
    username = username.toUpperCase();
    if(username === ""){
      alert("pllis Enter your Tasack");
      return;
    }
   
    if(!tasck.includes(username)){
      let flist = [...tasck, username]
      // console.log(...tasck+username)
      setTasck(flist);
      e.target.addname.value = "";

    }
    else{
      alert(`your data olredi agjust :- ${username}`)
      return;
    }

  };
    let list = tasck.map((values , index) =>{
      return(
        <TodooList index={index} values={values}
          key={values}
          tasck = {tasck}
          setTasck = {setTasck}
        />
      )
    })
  return(
    <>
    <h1>Todoo List </h1>
    <form onSubmit={addMtasck}>
      <input type="text" name="addname" />
      <button>Add</button>
    </form>

    <div className="contenor">
      <ul>
       {list}
      </ul>
    </div>
    </>
  )
};
export default App;


function  TodooList({values, index, tasck, setTasck}) {
  let [steats, setSteats] = useState(false);
  let deleteRow = () =>{
    let finelDelete = tasck.filter((v,i)=> i != index)
    setTasck(finelDelete);
  }

  let checkStets = () =>{
    setSteats(!steats)
  }
  return(
    <li className={(steats)? 'complisttodoo' : ''} onClick={checkStets}>{index+1}. {values} <span onClick={deleteRow}>Dlete</span></li>
  )
};