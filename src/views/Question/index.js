import React, { useState } from "react";
import "../../views/Question/index.css";
import { Row, Col } from "react-bootstrap";
import Button from "../../Components/Button";
import "../Question";

export default function Question(props) {
  const [btnCheck, setBtnCheck] = useState();
  const handleChange = (e) => {
    const val = e.target.value;
    setBtnCheck(val);
  };
  return (
    <>
      <Row style={{height:'100vh', backgroundColor:'#eee'}}> 
        <Col xl={6}style={{margin:'auto', marginTop: "50px"}}>
          <div className="question-box">
            <Row>
              <Col>
                <div>
                  <h3>{`Question ${props.nextQues + 1}`}</h3>
                  <h4>{props.question}</h4>
                </div>
              </Col>
            </Row>
            {props.option.map((item, index) => {
              return (
                <Row key={index}>
                  <Col>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <input
                        className="form-check-input mx-2"
                        type="radio"
                        name={btnCheck}
                        id="flexRadioDefault2"
                        value={item.optionAnswer}
                        onChange={handleChange}
                      />
                      <p>{item.optionAnswer}</p>
                    </div>
                  </Col>
                </Row>
              );
            })}
            <Row>
              <Col>
                <Button
                  className="mx-2"
                  onClick={props.previousQuestion}
                  text={"Back"}
                />
                {props.btnSubmit ? (
                  <Button
                    className="mx-2"
                    onClick={() => props.submitQuiz()}
                    text={"Submit"}
                  />
                ) : (
                  <Button
                    className="mx-2"
                    onClick={() => props.quizHandler(btnCheck)}
                    text={"Next"}
                  />
                )}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}
