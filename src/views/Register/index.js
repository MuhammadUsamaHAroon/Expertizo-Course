import React, { useState } from "react";
import "../Register/index.css";
import { Row, Col, Button } from "react-bootstrap";
import { registerUser } from "../../Config";
import swal from 'sweetalert'
export default function Register(props) {
  const [alert, setAlert] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onHandleChange = (name, val) => {
    setUserDetails({ ...userDetails, [name]: val });
  };
  const signUp = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.password) {
      swal({
        title:'Fill The All Fileds',
        text: "You clicked the button!",
        icon:'warning'
      })
      return;
    } else {
      registerUser(userDetails);
      setUserDetails({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <>
      <Row>
        <Col xl={6} style={{ margin: "auto", marginTop: "50px" }}>
          <div className="signUp-box">
            <Row>
              <Col>
                <h1>SignUp</h1>
              </Col>
            </Row>
            <Row>
              <Col
                xl={6}
                lg={6}
                md={8}
                sm={10}
                xs={10}
                style={{ margin: "auto" }}
              >
                <input
                  placeholder="Full Name"
                  className="form-control"
                  type={"text"}
                  value={userDetails.name}
                  name="name"
                  onChange={(e) => onHandleChange("name", e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col
                xl={6}
                lg={6}
                md={8}
                sm={10}
                xs={10}
                style={{ margin: "auto" }}
              >
                <input
                  placeholder="Email"
                  className="form-control mt-4"
                  type={"email"}
                  value={userDetails.email}
                  name="email"
                  onChange={(e) => onHandleChange("email", e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col
                xl={6}
                lg={6}
                md={8}
                sm={10}
                xs={10}
                style={{ margin: "auto" }}
              >
                <input
                  placeholder="Password"
                  className="form-control mt-3"
                  type={"password"}
                  value={userDetails.password}
                  name="password"
                  onChange={(e) => onHandleChange("password", e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col
                xl={6}
                lg={6}
                md={8}
                sm={10}
                xs={12}
                style={{ margin: "auto" }}
              >
                <Button className="mt-4 btn btn-success" onClick={signUp}>
                  Register
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="bottom-text">
                  <span>you have already account</span>
                  <span
                    className="text-login"
                    onClick={() => props.signUpToLogin()}
                  >
                    Login
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
