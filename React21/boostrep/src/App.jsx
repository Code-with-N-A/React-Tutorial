import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function App() {
  return(
    <>
   
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    <div style={{textAlign:"center",marginTop:"20px"}}>

    <h1>
      React Boostrep
    </h1>
    <Button onClick={()=>alert("Hii Brow danger")} variant="danger">Submit</Button>
    <Button onClick={()=>alert("Hii Brow success")} variant="success">Submit</Button>
    <Button onClick={()=>alert("Hii Brow warning")} variant="warning">Submit</Button>
    <Alert variant="success">This is a success alert—check it out!</Alert>
    <Alert variant="danger">This is a success alert—check it out!</Alert>
    <Alert variant="warning">This is a success alert—check it out!</Alert>
    </div>
    </>
    
    
  )
};
export default App;