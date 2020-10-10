import React, { useContext, useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { withRouter } from "react-router-dom";

import { FirebaseContext } from "../Contexts/FirebaseContext";

import * as ROUTES from "../Constants/Routes";

const Login = (props) => {
  const { auth, persistence, provider } = useContext(FirebaseContext);

  const [showPassword, _setShowPassword] = useState(false);
  const _toggleShowPassword = () => {
    _setShowPassword(!showPassword);
  };

  const [email, _setEmail] = useState("");
  const [password, _setPassword] = useState("");

  const [forgotPasswordOpen, _setForgotPasswordOpen] = useState(false);

  const [signupHover, _setSignupHover] = useState(false);

  const [errorMessage, _setErrorMessage] = useState(null);
  const updateErrorMessage = (message) => {
    _setErrorMessage(message);
  };

  const [loading, _setLoading] = useState(false);

  const isValid = () => {
    return email !== "" && password !== "";
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      _setLoading(true);
      auth
        .setPersistence(persistence.SESSION)
        .then(() =>
          auth
            .signInWithEmailAndPassword(email, password)
            .then((authUser) => {
              console.log("Successfully logged in!");
              updateErrorMessage("");
            })
            .catch((error) => {
              updateErrorMessage(error.message);
            })
        )
        .then(() => {
          _setLoading(false);
        });
    } else {
      if (email === "") updateErrorMessage("Email cannot be blank!");
      else updateErrorMessage("Password cannot be blank!");
    }
  };

  const onSubmitGoogle = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        _setErrorMessage("");
        _setLoading(false);
        console.log("Successfully logged in with Google!");
      })
      .catch((error) => {
        _setErrorMessage(error.message);
        _setLoading(false);
      });
  };

  return (
    <div>
      <Card className="login" style={{ width: "38rem" }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formLogin">
              <Button variant="link">Login</Button>
              <Button
                variant="link"
                onClick={() => props.history.push(ROUTES.selectUser)}
              >
                Signup
              </Button>
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-blue">USERNAME</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(event) => _setEmail(event.target.value)}
                className="inputText"
              />
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-blue">PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(event) => _setPassword(event.target.value)}
                className="inputText"
              />
            </Form.Group>
            <Form.Group>
              <br></br>
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                disabled={loading}
                block
              >
                LOGIN
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
            By clicking "Continue with Google/Facebook/Login" above, you
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

export default withRouter(Login);
