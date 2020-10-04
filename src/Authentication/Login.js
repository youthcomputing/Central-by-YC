import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { FaGoogle,FaFacebookF } from 'react-icons/fa';

const Login = () => {
  return (
    <div >
      <Card  className="login" style={{ width: '38rem' }}>
        <Card.Body>
        <Form>
          <Form.Group controlId="formLogin">
            <Button variant="link">Login</Button>
            <Button variant="link" >Signup</Button>
          </Form.Group>
          <br></br>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-blue">USERNAME</Form.Label>
            <Form.Control type="email" placeholder="Enter your Email" className="inputText"/>
          </Form.Group>
          <br></br>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-blue">PASSWORD</Form.Label>
            <Form.Control type="password" placeholder="Enter your Password" className="inputText"/>
          </Form.Group>
          <Form.Group>
            <br></br>
            <Button variant="primary" type="submit" block>LOGIN</Button>
            <br></br>
            <hr></hr>
            <Button variant="danger" type="submit" ><FaGoogle/>  Continue with Google  </Button>
            <Button variant="secondary" type="submit" ><FaFacebookF/>  Continue with Facebook  </Button>
          </Form.Group>      
        </Form>
        <Card.Text className="text-grey">
         By clicking "Continue with Google/Facebook/Login" above, you acknowledge that you have read, 
         understood, and agree to Central's Privacy Policy and Terms and Conditions
        </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
  )
};

export default Login;
