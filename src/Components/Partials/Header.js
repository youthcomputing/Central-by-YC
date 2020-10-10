import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  return (
    <div className="App">
      <Navbar className="hello" expand="sm" variant="dark">
        {/* This is the logo in the NavBar */}
        <Navbar.Brand href="/">
          <img src="yclogo.png" width="30" height="30" alt="Central by YC" />
        </Navbar.Brand>
        {/* This is the logo in the NavBar */}

        {/* This is the search bar */}
        <Nav>
          <Form className="searchBar " inline align>
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
            />
          </Form>
        </Nav>
        {/* This is the search bar */}

        {/* Responsive nav bar */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Spacing between search bar and nav links*/}
          <Nav className="mr-auto"></Nav>
          {/* Spacing between search bar and nav links*/}

          {/* Right algined items */}
          <Nav variant="pills" className="fontLato">
            <Nav.Link className="navItems " href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navItems" href="/login">
              Login
            </Nav.Link>
            <Nav.Link className="navItems" href="Store">
              Store
            </Nav.Link>
          </Nav>
          <Nav>
            {/* This is the dropdown menu */}
            <Nav.Link href="#Icon">
              <DropdownButton
                id="dropdown-item-button"
                alignRight
                title={
                  <img
                    width="30"
                    height="30"
                    src="Profile Icon.png"
                    alt=""
                  ></img>
                }
              >
                <Dropdown.ItemText>Account</Dropdown.ItemText>
                <Dropdown.Item>Logout</Dropdown.Item>
              </DropdownButton>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
