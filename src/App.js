import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import NavBar from "../src/Components/Navbar/navBar";
import Question from "./views/Question";
import ScoreCard from "./views/ScoreCard";
import Initially from "./views/Initially";
import Register from "./views/Register";
import Login from "./views/Login";
function App() {
  const quiz = [
    {
      question: "HTML stands for?",
      option: [
        { optionAnswer: "(B) Hyper Txt Makeup Language", isCorrect: false },
        { optionAnswer: "(A) Hyper Text Markup Language", isCorrect: true },
        { optionAnswer: "(C) Hydro Text Markup Lanugage", isCorrect: false },
      ],
    },
    {
      question: "what is CSS?",
      option: [
        { optionAnswer: "(B) Cdsak", isCorrect: false },
        { optionAnswer: "(C) Cdsak", isCorrect: false },
        { optionAnswer: "(A) Cascading Style sheet", isCorrect: true },
      ],
    },
    {
      question: "How do you call a function named 'myFunction'?",
      option: [
        { optionAnswer: "(B) call function myFunction()", isCorrect: false },
        { optionAnswer: "(A) myFunction()", isCorrect: true },
        { optionAnswer: "(C) call myFunction()", isCorrect: false },
      ],
    },
    {
      question:
        "How to write an IF statement for executing some code if 'i' is NOT equal to ?",
      option: [
        { optionAnswer: "(B) if i = !5 then", isCorrect: false },
        { optionAnswer: "(A) if(i != 5)", isCorrect: true },
        { optionAnswer: "(C) if (i <> 5) ", isCorrect: false },
      ],
    },
    {
      question: "How does a WHILE loop start?",
      option: [
        { optionAnswer: "(B) while(i <=10; i++)", isCorrect: false },
        { optionAnswer: "(C) while(i = 1 to 10) ", isCorrect: false },
        { optionAnswer: "(A) while(i <= 10)", isCorrect: true },
      ],
    },
  ];
  const [nextQues, setNextQues] = useState(0);
  const [score, setScore] = useState(0);
  const [screen, setScreen] = useState('Register')
  const [submit, setSubmit] = useState(false);

  const question = quiz[nextQues].question;
  const option = quiz[nextQues].option;

  // console.log(question+' '+option)
  console.log(score);

  useEffect(() => {
    localStorage.setItem("Screens", JSON.stringify(screen));
  }, [screen]);
  const start = () => {
    setScreen("Question");
  };
  const quizHandler = (optionValue) => {
    const optionVal = option.find((items) => {
      return items.optionAnswer === optionValue;
    });
    console.log(optionVal.isCorrect);
    if (optionVal.isCorrect === true) {
      setScore(score + 5);
    } else {
      console.log(false);
    }
    const nextQuestion = nextQues + 1;
    if (nextQuestion < quiz.length) {
      setNextQues(nextQuestion);
    } else {
      setSubmit(true);
    }
  };
  const previousQuestion = () => {
    const preQues = nextQues - 1;
    if (nextQues > 0) {
      setNextQues(preQues);
      setSubmit(false);
    } else {
      alert("jjkskjdj");
    }
    if (nextQues > 0 && nextQues < 4) {
      setScore(score - 5);
    } else {
      setScore(score - 10);
    }
  };
  const submitQuiz = () => {
    setScreen("ScoreCard");
  };
  const signUpToLogin = () => {
    setScreen("Login");
  };
  const loginToSignUp = () => {
    setScreen("Register");
  };
  const reQuiz = () => {
    setNextQues(0);
    setScreen("Question");
    setSubmit(false);
    setScore(null);
  };

  return (
    <div className="App">
      <Container fluid>
        {screen === "Question" && (
          <Question
            nextQues={nextQues}
            question={question}
            option={option}
            quizHandler={quizHandler}
            previousQuestion={previousQuestion}
            btnSubmit={submit}
            submitQuiz={submitQuiz}
          />
        )}
        {screen === "Register" && (
          <Register screen={screen} signUpToLogin={signUpToLogin} />
        )}
        {screen === "Login" && <Login loginToSignUp={loginToSignUp} />}
        {screen === "ScoreCard" && <ScoreCard score={score} reQuiz={reQuiz} />}
        {screen === "Start" && <Initially start={start} />}
      </Container>
    </div>
  );
}

export default App;
