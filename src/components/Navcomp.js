import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../CSS/Nav.css'

function Navcomp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='Navbar'>
    
        <Navbar.Brand href="#home" id='Brand'>Author Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
           
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default Navcomp;