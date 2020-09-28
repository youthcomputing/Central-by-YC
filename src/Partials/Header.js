import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

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
            
            <Nav.Link className="navItems"  href="#Profile">Home</Nav.Link>
            <Nav.Link className="navItems"  href="#Profile">Profile</Nav.Link>
            <Nav.Link className="navItems" href="#Store">Store</Nav.Link>
            <Nav.Link href="#Icon">
              
                <DropdownButton id="dropdown-item-button" alignRight title={<img width="30" height="30" src="Profile Icon.png" alt="">
              
              </img>}>
                  <Dropdown.ItemText>Account</Dropdown.ItemText>
                  
                  <Dropdown.Item>Logout</Dropdown.Item>
                </DropdownButton>
              </Nav.Link>

            {/* This is the dropdown menu */}
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
