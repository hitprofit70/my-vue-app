import { useContext } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const TopNav = () => {
  const { cart } = useContext(AppContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white">My Shopping</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active text-white">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sneakers">
                  <a className="nav-link active text-white">Sneakers</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pants">
                  <a className="nav-link active text-white">Pants</a>
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "800px" }}>
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
              </li>
              <li className="nav-item dropdown text-white">
              <NavDropdown className="text-white" title="My Account" id="basic-nav-dropdown text-white">
              <Link to="/login">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              </Link>
              <Link to="/register">
              <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
              </Link>
            </NavDropdown>
                {/* <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
