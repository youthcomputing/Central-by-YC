import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import * as ROUTES from "../Constants/Routes";
const Signup = (props) => {
  const isAttendee = props.location.state.attendee;
  return (
    <div>
      <Card className="login" style={{ width: "38rem" }}>
        <Card.Body class="container">
          <Card.Title class="signupTitle">Create An Account</Card.Title>
          <br />
          <Form>
            <div class="row">
              <Form.Control
                type="firstname"
                placeholder="First Name"
                className="inputText col-sm signupInput"
              />
              <Form.Control
                type="lastname"
                placeholder="Last Name"
                className="inputText col-sm signupInput"
              />
            </div>
            <div class="row">
              <Form.Control
                type="email"
                placeholder="Email"
                className="inputText col-sm signupInput"
              />
            </div>
            <div class="row">
              <Form.Control
                type="username"
                placeholder="Username"
                className="inputText col-sm signupInput"
              />
              <Form.Control
                type="password"
                placeholder="Password"
                className="inputText col-sm signupInput"
              />
            </div>
            <div class="row">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                className="inputText col-sm signupInput"
              />
            </div>
            <Form.Group>
              <br></br>
              <Button variant="primary" type="submit" block>
                Next
              </Button>
              <br></br>
              <hr></hr>
              <Button variant="danger" type="submit">
                <FaGoogle /> Continue with Google{" "}
              </Button>
              <Button variant="secondary" type="submit">
                <FaFacebookF /> Continue with Facebook{" "}
              </Button>
            </Form.Group>
          </Form>
          <Card.Text className="text-grey">
            By clicking "Continue with Google/Facebook/Next" above, you
            acknowledge that you have read, understood, and agree to Central's
            Privacy Policy and Terms and Conditions
          </Card.Text>
        </Card.Body>
      </Card>
      );
    </div>
  );
};

export default Signup;
