import React, { useContext, useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { withRouter } from "react-router-dom";

import { FirebaseContext } from "../Contexts/FirebaseContext";

import * as ROUTES from "../Constants/Routes";

const Signup = (props) => {
  const { auth, provider } = useContext(FirebaseContext);

  const [showPassword, _setShowPassword] = useState(false);
  const [showConfirm, _setShowConfirm] = useState(false);
  const _toggleShowPassword = () => {
    _setShowPassword(!showPassword);
  };
  const _toggleShowConfirm = () => {
    _setShowConfirm(!showConfirm);
  };

  const [firstName, _setFirstName] = useState("");
  const [lastName, _setLastName] = useState("");
  const [username, _setUsername] = useState("");
  const [email, _setEmail] = useState("");
  const [password, _setPassword] = useState("");
  const [confirm, _setConfirm] = useState("");

  const [errorMessage, _setErrorMessage] = useState(null);
  const [loading, _setLoading] = useState(false);

  const isValid = () => {
    return (
      password === confirm &&
      firstName !== "" &&
      lastName !== "" &&
      username !== "" &&
      email !== "" &&
      password !== ""
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      _setLoading(true);
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          _setErrorMessage("");
          _setLoading(false);
        })
        .catch((error) => {
          _setErrorMessage(error.message);
          _setLoading(false);
        });
    } else {
      if (password !== confirm) _setErrorMessage("Passwords do not match!");
      else if (firstName === "")
        _setErrorMessage("First name cannot be left blank!");
      else if (lastName === "")
        _setErrorMessage("Last name cannot be left blank!");
      else if (username === "")
        _setErrorMessage("Username cannot be left blank!");
      else if (email === "") _setErrorMessage("Email cannot be left blank!");
      else if (password === "")
        _setErrorMessage("Password cannot be left blank!");
    }
  };

  const onSubmitGoogle = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        _setErrorMessage("");
        _setLoading(false);
        console.log(result.user);
      })
      .catch((error) => {
        _setErrorMessage(error.message);
        _setLoading(false);
      });
  };

  /* const isAttendee = props.location.state.attendee; */
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
                value={firstName}
                onChange={(event) => _setFirstName(event.target.value)}
                className="inputText col-sm signupInput"
              />
              <Form.Control
                type="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => _setLastName(event.target.value)}
                className="inputText col-sm signupInput"
              />
            </div>
            <div class="row">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => _setEmail(event.target.value)}
                className="inputText col-sm signupInput"
              />
            </div>
            <div class="row">
              <Form.Control
                type="username"
                placeholder="Username"
                value={username}
                onChange={(event) => _setUsername(event.target.value)}
                className="inputText col-sm signupInput"
              />
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => _setPassword(event.target.value)}
                className="inputText col-sm signupInput"
              />
            </div>
            <div class="row">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(event) => _setConfirm(event.target.value)}
                className="inputText col-sm signupInput"
              />
            </div>
            <Form.Group>
              <br></br>
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                disabled={loading}
                block
              >
                Next
              </Button>
              <br></br>
              <hr></hr>
              <Button
                variant="danger"
                type="submit"
                onClick={onSubmitGoogle}
                disabled={loading}
              >
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
          {errorMessage && (
            <div className="error-message">Error: {errorMessage}</div>
          )}
        </Card.Body>
      </Card>
      );
    </div>
  );
};

export default Signup;
