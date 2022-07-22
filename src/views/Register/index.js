import React, { useState } from "react";
import "../Register/index.css";
import { Row, Col, Button } from "react-bootstrap";
import { registerUser } from "../../Config";
import swal from "sweetalert";
import { async } from "@firebase/util";
import ClipLoader from "react-spinners/ClipLoader";

export default function Register(props) {
  // const [alert, setAlert] = useState(false);
  const [loader, setLoader] = useState(false);
  // const [color, setColor] = useState('#eee')
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
  });
  const onHandleChange = (name, val) => {
    setUserDetails({ ...userDetails, [name]: val });
  };
  const signUp = async () => {
    if (
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.email ||
      !userDetails.password ||
      !userDetails.number
    ) {
      swal({
        title: "Fill The All Fileds",
        text: "You clicked the button!",
        icon: "warning",
      });
    } else {
      setLoader(true);
      try {
        const result = await registerUser(userDetails);
        setUserDetails({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          number: "",
        });
        props.changeScreen("Login");
      } catch (e) {
        alert(e.message);
      } finally {
        setLoader(false);
      }

      // registerUser(userDetails, props.signUpToLogin);
      // setUserDetails({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   password: "",
      //   number: "",
      // });
    }
  };
  return (
    <>
      <Row>
        <Col
          xl={6}
          lg={7}
          md={8}
          sm={10}
          xs={11}
          style={{ margin: "auto", marginTop: "50px" }}
        >
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
                  placeholder="First Name"
                  className="form-control"
                  type={"text"}
                  value={userDetails.firstName}
                  name="firstName"
                  onChange={(e) => onHandleChange("firstName", e.target.value)}
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
                  placeholder="Last Name"
                  className="form-control mt-4"
                  type={"text"}
                  value={userDetails.lastName}
                  name="lastName"
                  onChange={(e) => onHandleChange("lastName", e.target.value)}
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
                  className="form-control mt-4"
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
                xs={10}
                style={{ margin: "auto" }}
              >
                <input
                  placeholder="Contact Number"
                  className="form-control mt-4"
                  type={"text"}
                  value={userDetails.number}
                  name="number"
                  onChange={(e) => onHandleChange("number", e.target.value)}
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
                  {loader ? (
                    <div className="sweet-loading">
                      <ClipLoader color="brown" loader={loader} size={40} />
                    </div>
                  ) : (
                    "Register"
                  )}
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="bottom-text">
                  <span>you have already account</span>
                  <span
                    className="text-login"
                    onClick={() => props.changeScreen("Login")}
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
