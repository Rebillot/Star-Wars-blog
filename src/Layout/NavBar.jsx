import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Context } from "../Store/AppContext";
import { useContext } from "react";
import '../App.css';

function NavBar() {
  const { store,} = useContext(Context);

  return (
    <Navbar bg="" expand="lg">
      <Container >
        <Navbar.Brand href="/home">STAR WARS</Navbar.Brand >
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav >
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
