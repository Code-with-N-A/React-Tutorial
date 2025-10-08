import { useFormStatus } from "react-dom";
import "./App.css";
import { useRef } from "react";
function App() {

  const userRef = useRef(null);
  const passRef = useRef(null);

  const handelSubmit = async () => {

    const username = userRef.current.value;
    const userpass = passRef.current.value;
    if (username === "" || userpass === "") {
      alert("pllis Enter a value");
      return;
    }

    await new Promise(res => setTimeout(res, 2000));
    console.log("Submit")
  }


  function CustumorForm() {
    const { pending } = useFormStatus();
    console.log(pending)

    return (
      <>
        <input type="text" name="" id="user" placeholder="Enter Name" ref={userRef} />
        <input type="password" name="" id="pass" placeholder="Enter Password" ref={passRef} />
        <button disabled={pending} >{pending ? "Prosesing..." : "Submit"}</button>
      </>
    )
  }
  return (
    <>
      <div className="man">
        <h1>useFormStatus</h1>
        <form action={handelSubmit}>
          <CustumorForm />

        </form>
      </div>
    </>
  )
};
export default App;