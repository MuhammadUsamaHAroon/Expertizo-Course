import React, { useEffect } from "react";
import Button from "../../Components/Button";
import { Row, Col } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth"
import { async } from "@firebase/util";

export default function ScoreCard(props) {
  
    const logOut =  ()=>{
    const auth = getAuth();
     signOut(auth).then(() => {
  // Sign-out successful.
  alert('Logout SuccessFully')
  props.changeScreen('Register')
}).catch((error) => {
  // An error happened.
  alert(error.message)
});
}

  
  let totalMarks = props.score;
  const totalPercent = (totalMarks / 25) * 100;
  let grade = "";
  if (totalMarks < 5) {
    grade = "Failed";
  } else if (totalMarks < 10) {
    grade = "D";
  } else if (totalMarks < 15) {
    grade = "C";
  } else if (totalMarks < 20) {
    grade = "B";
  } else if (totalMarks < 25) {
    grade = "A";
  } else {
    grade = "A+";
  }
  return (
    <>
      <Row>
        <Col>
        <Row>
          <Col>
          <button onClick={logOut}>
            Logout
          </button>
          </Col>
        </Row>
          <Row>
            <Col>
              <h3>Score Card</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Score:
                <b style={{ color: grade === "Failed" ? "red" : "green" }}>
                  {totalMarks}
                </b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Percent % is:
                <b style={{ color: grade === "Failed" ? "red" : "green" }}>
                  {totalPercent}%
                </b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Grade is:
                <b style={{ color: grade === "Failed" ? "red" : "green" }}>
                  {grade}
                </b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={props.reQuiz} text={"Restart Quiz"} />
            </Col>
          </Row>
          
        </Col>
      </Row>
    </>
  );
}
