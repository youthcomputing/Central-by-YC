import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import * as ROUTES from "../../Constants/Routes";
import { withRouter } from 'react-router-dom'


const App = (props) => {

  
  return (
    
    
      <Navbar   className="color container-fluid" expand="lg" variant="dark">
        {/* This is the logo in the NavBar */}
        <Navbar.Brand href="/">
          <img src="yclogo.png" width="30" height="30" alt="Central by YC" />
        </Navbar.Brand>
        {/* This is the logo in the NavBar */}

        {/* This is the search bar */}
        
          <Form className="searchBar " inline >
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2 "
            />
          </Form>
          
       
        {/* This is the search bar */}
        
        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Spacing between search bar and nav links*/}
          <Nav className=" mr-auto "></Nav>
            {/* Spacing between search bar and nav links*/}
            {/* Right algined items */}
      
            

            <Nav>
            <Button
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Home
              </Button>

           <Button
                variant="link"
                onClick={() => props.history.push(ROUTES.LOGIN)}
              >
                Login
              </Button>

              <Button
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Store
              </Button>

            {/* This is the dropdown menu */}
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
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </DropdownButton>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>




  );
}

export default withRouter(App);
