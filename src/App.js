import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Register from "./views/Register";
import Login from "./views/Login";
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
  const [screen, setScreen] = useState("Register");

  const changeScreen = (currentScreen) => {
    setScreen(currentScreen);
  };

  return (
    <div className="App">
      <Container fluid>
        {screen === "Register" && (
          <Register screen={screen} changeScreen={changeScreen} />
        )}
        {screen === "Login" && <Login changeScreen={changeScreen} />}
      </Container>
    </div>
  );
}

export default App;
