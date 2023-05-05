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
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link to="/sneakers">
              <Nav.Link>Sneakers</Nav.Link>
            </Link>
            <Link to="/pants">
              <Nav.Link>Pants</Nav.Link>
            </Link>
            <Link to="/cartpage">
              <Nav.Link className="cart">
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
                <span className="count">0</span>
              </Nav.Link>
            </Link>
            {/* <Nav.Link>
              My Account
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
