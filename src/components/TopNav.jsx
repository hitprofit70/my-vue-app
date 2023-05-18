import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const TopNav = () => {
  const { cart } = useContext(AppContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/sneakers">Sneakers</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/pants">Pants</Link>
            </Nav.Link>
            <Nav.Link className="cart" style={{ marginLeft: "700px" }}>
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <span className="count">{cart.length}</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <select
                className="form-select form-select-sm bg-dark text-light"
                aria-label=".form-select-sm example"
              >
                <option selected className="bg-dark">My Account</option>
                <Link to="/" value="1">Register</Link>
                <Link to="/" value="2">Login</Link>
              </select>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
