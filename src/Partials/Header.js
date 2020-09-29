import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function App() {
  return (
    <div className="App">
      <Navbar
        collapseOnSelect
        className="hello"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <img src="yclogo.png" width="30" height="30" alt="Central by YC" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Search Bar */}
          <Nav className="searchBar mx-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Form>
          </Nav>
          {/* End of search bar */}
          {/* Spacing */}
          <Nav className="mr-auto"></Nav>

          {/* Right algined items */}
          <Nav className="fontLato">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Profile">Profile</Nav.Link>
            <Nav.Link href="#Storee">Store</Nav.Link>
            <Nav.Link href="#Icon">Icon</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lol</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
