import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Context } from "../Store/AppContext";
import { useContext } from "react";

function NavBar() {
  const { store, actions } = useContext(Context);
  console.log(store.favoritos, "what the fuck is this");

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">STAR WARS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-end">
            <NavDropdown title="Favorites" id="basic-nav-dropdown">
              <ul>
                {store.favoritos.map((favorito, index) => (
                  <li key={index}>{favorito}</li>
                ))}
              </ul>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    
  );
}

export default NavBar;
