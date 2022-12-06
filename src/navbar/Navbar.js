import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./logo-insoft.png"


function NavbarInsoft(props) {
  function botonAyuda(){
    window.location.href = "mailto:ayudaprovedores@insoft.com";
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
    <Container>
      <Navbar.Brand href="/"><img style={{maxHeight:"40px"}} src={logo} alt="logo insoft"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="clientes" active={props.clientes}>Clientes</Nav.Link>
          <Nav.Link href="pedidos" active={props.pedidos}>Pedidos</Nav.Link>
          <Nav.Link href="ventas" active={props.ventas}>Ventas</Nav.Link>
         
        </Nav>
        <NavDropdown title={props.nombreUsuario} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
            <NavDropdown.Item onClick={botonAyuda}>
              Ayuda
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
              Cerrar sesión
            </NavDropdown.Item>
          </NavDropdown>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarInsoft;
