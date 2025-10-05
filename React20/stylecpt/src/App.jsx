import style from "styled-components"
function App() {
  // ye ak tarika hey style component me css likhne ka 
 // riyel life projects me ayse hi jada tar likhi jati hey css isme aap hover activ model vala kam kara sakte ho 

  const Heding  = style.h2`
  color:blue;
  text-align:center;
  podding:10px;
  background-color:lightgray;
  border:1px solid black;

  &:hover{
    color:white;
    background-color:blue;
    cursor:pointer;
  }

  &:active{
    color:yellow;
    background-color:black;
    font-size:30px;
  }

  `


  // ye dusra tarika hey style component me css likhne ka aap inme se kisi ka bhi youse kar akye ho apni jarurat ke hisb se isme hover or activ model vale kam nahi kara sakte
  // const Heding = style.h2({
  //   padding: "10px",
  //   color: "blue",
  //   textAlign: "center",
  //   backgroundColor: "lightgray",
  //   border: "1px solid black",

  // });
  return (

    <>
      <h1>Style Components</h1>
      <Heding>Styled Components 1</Heding>
      <Heding>Styled Components 2</Heding>
      <Heding>Styled Components 3</Heding>
      <Heding>Styled Components 4</Heding>
    </>
  )
};
export default App;