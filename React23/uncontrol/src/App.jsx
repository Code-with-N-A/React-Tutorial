import { useRef } from "react";

function App() {
 const useRefs = useRef();
 const passRef = useRef();

  const hendelForm=(e)=>{
    e.preventDefault();
   const name=document.querySelector("#name").value;
   const password=document.querySelector("#password").value;
   console.log(name,password);
  }


  const hendelFormRef=(e)=>{
    e.preventDefault();
    const name=useRefs.current.value;
    const password=passRef.current.value;
    console.log(name,password);  
  }
  return(
    <>
    <h1>Uncntrol componets</h1>
    <form action="" method="post" onSubmit={hendelForm}>
      <input type="text" name="" id="name" placeholder="Name"/> <br /><br />
      <input type="password" name="" id="password" placeholder="password"/> <br /><br />
      <button>Submit</button>
    </form>
    <hr />
        <h1>Uncntrol componets with useRef</h1>

    <form action="" method="post" onSubmit={hendelFormRef}>
      <input type="text" placeholder="Name" ref={useRefs}/> <br /><br />
      <input type="password" placeholder="password" ref={passRef}/> <br /><br />
      <button>Submit Ref</button>
    </form>
    </>
  )
};
export default App;