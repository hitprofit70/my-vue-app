import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link className="nav-home">Home</Nav.Link>
            </Link>
            <Link to="/sneakers">
              <Nav.Link>Sneakers</Nav.Link>
            </Link>
            <Link to="/pants">
              <Nav.Link>Pants</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
