import Login,{Profiles, Seting, userkey}  from "./user";
function App(){
  return(
    <div>
      <Login/>
      <Profiles />
      <Seting />
      <h3>{userkey}</h3>
      <h1>My name is Nitesh Amule</h1>
    </div>
  )
}

export default App;
