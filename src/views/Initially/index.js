import React from "react";
import "../Initially/index.css";
import Button from "../../Components/Button";
import { Row, Col } from "react-bootstrap";
export default function Initially(props) {
  return (
    <>
      <Row style={{height:'120vh',backgroundColor:'#eee'}}>
        <Col
          xl={6}
          lg={7}
          md={8}
          sm={10}
          xs={12}
          style={{ margin: "auto", marginTop: "50px" }}
        >
          <div className="Box">
            <Row>
              <Col>
                <h1>Quiz App</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="topic-box">
                  <h3>topics name:</h3>
                  <span>
                    HTML, CSS and JavaScript.attempt this quiz and check your
                    skills.
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="instruc-box">
                  <h3>Instruction:</h3>
                  <span>total number of questions 5.</span>
                  <p>each question carry 5 marks.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItem: "right",
                }}
              >
                <Button
                  text={"Start Quiz"}
                  onClick={props.start}
                  style={{
                    border: "solid black 0.5px",
                    marginTop: "30px",
                    marginLeft: "10px",
                    borderRadius: "10px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                    outLine: "none",
                    backgroundColor: "coral",
                    color: "#fff",
                    textTransform: "capitalize",
                    marginRight: "30px",
                    marginBottom: "20px",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="note-box">
                  <h3>note</h3>
                  <span>
                    Click the 'Submit' button given in the right bottom of this
                    page to Submit your answers.
                  </span>
                  <p>Do not refresh the Page.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}
