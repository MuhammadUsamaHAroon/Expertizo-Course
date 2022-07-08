import React, { useState } from "react";
import "../../views/Login/index.css";
import { Row, Col, Button } from "react-bootstrap";
import { loginUser } from "../../Config";
export default function Login(props) {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const onHandleChange = (name, value) => {
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  const SignUp = () => {
    loginUser(loginDetails);
  };
  return (
    <>
      <Row>
        <Col xl={6} style={{margin:'auto', marginTop:'50px'}}>
          <div className="login-box">
            <Row>
              <Col>
                <h1>Login</h1>
              </Col>
            </Row>
            <Row>
              <Col xl={6} lg={6} md={8} sm={10} xs={10} style={{margin:'auto'}}> 
                <input
                  placeholder="Email"
                  className="form-control"
                  type="text"
                  value={loginDetails.email}
                  onChange={(e) => onHandleChange("email", e.target.value)}
                  
                />
              </Col>
            </Row>
            <Row>
              <Col xl={6} lg={6} md={8} sm={10} xs={10} style={{margin:'auto'}}>
                <input
                  placeholder="Password"
                  className="form-control mt-3"
                  type="password"
                  value={loginDetails.password}
                  onChange={(e) => onHandleChange("password", e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col xl={6} lg={6} md={8} sm={10} xs={12} style={{margin:'auto'}}>
                <Button className="mt-4" onClick={SignUp}>
                  Login
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="bottom-text">
                  <span>you have create an account</span>
                  <span
                    className="text-Register"
                    onClick={() => props.loginToSignUp()}
                  >
                    Register
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}
