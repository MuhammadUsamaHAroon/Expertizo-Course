import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/navBar";
import { Container, Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import SweetAlert from "react-bootstrap-sweetalert";
function App() {
  const quiz = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      option: [
        { optionAnswer: "(A) <js>", isCorrect: false },
        { optionAnswer: "(B) <javascript>", isCorrect: false },
        { optionAnswer: "(C) <script>", isCorrect: true },
      ],
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      option: [
        {
          optionAnswer:
            "(A) both the <head> section and <body> section are correct",
          isCorrect: true,
        },
        { optionAnswer: "(B) the <head> section", isCorrect: false },
        { optionAnswer: "(C) the <body> section", isCorrect: false },
      ],
    },
    {
      question: "HTML stands for?",
      option: [
        { optionAnswer: "(A) Hyper Text Markup Language", isCorrect: true },
        { optionAnswer: "(B) Hyper Txt Makeup Language", isCorrect: false },
        { optionAnswer: "(C) Hydro Text Markup Lanugage", isCorrect: false },
      ],
    },
    {
      question: "what is CSS?",
      option: [
        { optionAnswer: "(A) Cascading Style sheet", isCorrect: true },
        { optionAnswer: "(B) Cdsak", isCorrect: false },
        { optionAnswer: "(C) Cdsak", isCorrect: false },
      ],
    },
    {
      question: "How do you write Hello World in an alert box?",
      option: [
        { optionAnswer: "(A) alert('Hello World')", isCorrect: true },
        { optionAnswer: "(B) alertBox('Hello World')", isCorrect: false },
        { optionAnswer: "(C) mgeBox('Hello World')", isCorrect: false },
      ],
    },
    {
      question: "How do you create a function in JavaScript?",
      option: [
        { optionAnswer: "(A) function myFunction()", isCorrect: true },
        { optionAnswer: "(B) function:myFunction()", isCorrect: false },
        { optionAnswer: "(C) function = myFunction()", isCorrect: false },
      ],
    },
    {
      question: "How do you call a function named 'myFunction'?",
      option: [
        { optionAnswer: "(A) myFunction()", isCorrect: true },
        { optionAnswer: "(B) call function myFunction()", isCorrect: false },
        { optionAnswer: "(C) call myFunction()", isCorrect: false },
      ],
    },
    {
      question: "How to write an IF statement in JavaScript?",
      option: [
        { optionAnswer: "(A) if(i == 5)", isCorrect: true },
        { optionAnswer: "(B) if i == 5 then", isCorrect: false },
        { optionAnswer: "(C) if i = 5 ", isCorrect: false },
      ],
    },
    {
      question:
        "How to write an IF statement for executing some code if 'i' is NOT equal to ?",
      option: [
        { optionAnswer: "(A) if(i != 5)", isCorrect: true },
        { optionAnswer: "(B) if i = !5 then", isCorrect: false },
        { optionAnswer: "(C) if (i <> 5) ", isCorrect: false },
      ],
    },
    {
      question: "How does a WHILE loop start?",
      option: [
        { optionAnswer: "(A) while(i <= 10)", isCorrect: true },
        { optionAnswer: "(B) while(i <=10; i++)", isCorrect: false },
        { optionAnswer: "(C) while(i = 1 to 10) ", isCorrect: false },
      ],
    },
  ];

  const [input, setInput] = useState("");
  const [curQues, setCurQues] = useState(0);
  const [alert, setAlert] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const [grade, setGrade] = useState('')
  console.log(score);

  let quizPercent = (score/100)*100;
  let grade = ''
  console.log(quizPercent)
  if(quizPercent<50){
    grade='Failed'
  }else if(quizPercent<=60){
    grade='D'
  }
  else if(quizPercent<=70){
    grade='C'
  }
  else if(quizPercent<=80){
    grade='B'
  }
  else if(quizPercent<=90){
    grade='A'
  }
  else{
    grade='A+'
  }
  const quizHandler = (isCorrect) => {
    // const copyQuiz = [...quiz];
    // console.log(isCorrect)
    
    if (isCorrect === true) {
      setScore(score + 10);
    } else {
      console.log("false");
    }
    const nextQues = curQues + 1;
    if (nextQues < quiz.length) {
      setCurQues(nextQues);
    } else {
      setAlert(true);
      setShowScore(true);
    }
  };
  const decreseQuiz = () => {
    const preQues = curQues - 1;
    if (curQues > 0) {
      setCurQues(preQues);
    } else {
      alert("You Have Already Start Quiz!!");
    }
  };
  return (
    <div>
      <NavBar />
      <Container style={{ border: "solid red" }}>
        {showScore ? (
          <div>
            <h1>{`Your Total Score is: ${score}`}</h1>
            <h1>{`Your Total % is: ${quizPercent}%`}</h1>
            <h1>{`Your Grade is: ${grade}`}</h1>
          </div>
          
        ) : (
          <>
            {alert ? (
              <div>
                <SweetAlert
                  show={alert}
                  title="You Have Reached The End Of The Quiz!!"
                  text={`SweetAlert in React`}
                  onConfirm={() => setAlert(false)}
                />
              </div>
            ) : (
              <div className="quizContainer">
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <div className="quizQuestion">
                          <span>{curQues + 1} </span>
                          <span>{quiz[curQues].question}</span>
                          <span className="quizNum">{`${curQues + 1} ${
                            quiz.length
                          }`}</span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    {/* <div > */}
                    {quiz[curQues].option.map((items, index) => {
                      return (
                        <Row key={index}>
                          <Col>
                            <div className="quizOptionList">
                              <button
                                className="quizOption"
                                onClick={() => quizHandler(items.isCorrect)}
                              >
                                {items.optionAnswer}
                              </button>
                            </div>
                          </Col>
                        </Row>
                      );
                    })}
                    <Row>
                      <Col>
                        <div
                          style={{
                            // border: "solid",
                            display: "flex",
                            justifyContent: "left",
                            alignItems: "left",
                            // marginLeft:'165px
                            marginTop: "15px",
                          }}
                        >
                          {curQues.length < 12 ? (
                            <button
                              style={{
                                textTransform: "capitalize",
                                cursor: "pointer",
                                borderRadius: "10px",
                                backgroundColor: "coral",
                                color: "white",
                                border: "none",
                                width: "70px",
                                height: "35px",
                                textAlign: "center",
                              }}
                            >
                              Submit
                            </button>
                          ) : (
                            <>
                              <button
                                style={{
                                  textTransform: "capitalize",
                                  cursor: "pointer",
                                  borderRadius: "10px",
                                  backgroundColor: "coral",
                                  color: "white",
                                  border: "none",
                                  width: "70px",
                                  height: "35px",
                                  textAlign: "center",
                                  marginRight: "15px",
                                }}
                                onClick={decreseQuiz}
                              >
                                back
                              </button>
                            </>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
