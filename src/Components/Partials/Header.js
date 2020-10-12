import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown'



function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect className="Box" expand="lg" variant="dark">
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
              className="mr-sm-2 "
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
          <Nav  className="fontLato "  >
            <NavLink className="navItems" activeClassName="active" to="/"  >Home</NavLink>
            <NavLink className="navItems " activeClassName="active" to="/login" >
              Login
            </NavLink>
            <NavLink className="navItems" activeClassName="active" to="/selectUser" >
              Store
            </NavLink>
          </Nav>
          <Nav>


            
            {/* This is the dropdown menu */}
            <Nav.Link href="#Icon">
              <DropdownButton
                id="dropdown-item-button"
                alignLeft
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



//new nav bar


//     <Navbar className="color" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>
  );
}

export default App;
