import { Navbar, Nav, Button, InputGroup, FormControl } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchedSongs } from "../redux/actions";

function MyNav() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(fetchSearchedSongs(searchQuery));
    }
  };

  return (
    <aside className="col col-2">
      <Navbar className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Navbar.Brand className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul className="p-0">
                <li>
                  <Nav.Link href="#">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <form onSubmit={handleSearchSubmit}>
                    <InputGroup className="input-group mt-3">
                      <FormControl
                        type="text"
                        className="form-control"
                        placeholder="Search for an artist"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                      <Button variant="outline-secondary" className="btn-sm" type="submit">
                        GO
                      </Button>
                    </InputGroup>
                  </form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </Navbar>
    </aside>
  );
}
export default MyNav;
