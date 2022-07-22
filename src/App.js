import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Question from "./views/Question";
import ScoreCard from "./views/ScoreCard";
import Initially from "./views/Initially";
import Register from "./views/Register";
import Login from "./views/Login";
import swal from "sweetalert";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function App() {
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user);
      } else {
        // User is signed out
        console.log("Empty");
      }
    });
  });
  
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
  const [screen, setScreen] = useState("Register");
  const [submit, setSubmit] = useState(false);
  const question = quiz[nextQues].question;
  const option = quiz[nextQues].option;

  console.log(score);
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
      swal({
        title: "You Need To Forward!",
        text: "select Any option and click next button!",
        icon: "warning",
      });
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
  const changeScreen = (currentScreen) => {
    setScreen(currentScreen);
  };
  const reQuiz = () => {
    setNextQues(0);
    setScreen("Start");
    setSubmit(false);
    setScore(null);
  };
  const loginToInitially = () => {
    setScreen("Start");
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
          <Register screen={screen} changeScreen={changeScreen} />
        )}
        {screen === "Login" && (
          <Login
            changeScreen={changeScreen}
            loginToInitially={loginToInitially}
          />
        )}
        {screen === "ScoreCard" && <ScoreCard score={score} reQuiz={reQuiz} changeScreen={changeScreen}/>}
        {screen === "Start" && <Initially start={start} />}
      </Container>
    </div>
  );
}

export default App;
