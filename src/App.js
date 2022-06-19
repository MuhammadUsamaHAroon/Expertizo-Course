import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/navBar";
import { Container, Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import SweetAlert from "react-bootstrap-sweetalert";
function App() {
  const [todos, setTodos] = useState(() => {
    const getTodos = localStorage.getItem("ToDos");
    if (getTodos) {
      return JSON.parse(getTodos);
    } else {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [editToggle, setEditToggle] = useState(false);
  // const [editItems, setEditItems] = useState(null);
  const [editIndex, setEditIndex] = useState();
  const [alert, setAlert] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(todos));
  }, [todos]);
  console.log(checkBox);
  const addItem = () => {
    if (!input) {
      setAlert(true);
      return;
    } else {
      const copyTodo = [...todos];
      copyTodo.push(input);
      setTodos(copyTodo);
      setCheckBox([editIndex]);
    }
    resetTodo();
  };

  const deleteItem = (index) => {
    const copyTodo = [...todos];
    copyTodo.splice(index, 1);
    setTodos(copyTodo);
    resetTodo();
  };
  const editItem = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
    setEditToggle(true);
  };
  const upDateItems = () => {
    const copyTodo = [...todos];
    copyTodo[editIndex] = input;
    setTodos(copyTodo);
    resetTodo();
  };
  const resetTodo = () => {
    setInput("");
    setEditToggle(false);
  };
  const handleChange = (index) => {
    
    setCheckBox(todos[index]);
    const copyTodo = [...todos]
    setTodos(copyTodo)
    // console.log(todos)
    // setCheckBox(!checkBox)
  };
  
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col xl={7} lg={8} md={8} sm={10} xs={12} style={{ margin: "auto" }}>
            <div className="todosContainer mt-5">
              <Row>
                <Col>
                  <div className="todosHead">
                    <h3 className="mt-2">ToDos Items ({todos.length})</h3>
                  </div>
                </Col>
              </Row>
              <div className="todosBody">
                <Row>
                  <Col>
                    <div className="todosInput">
                      <input
                        placeholder="Enter ToDos Here..."
                        className="form-control"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                      />
                      {editToggle ? (
                        <Button variant="primary" onClick={upDateItems}>
                          UpDate
                        </Button>
                      ) : (
                        <Button variant="success" onClick={addItem}>
                          Submit
                        </Button>
                      )}
                    </div>
                  </Col>
                </Row>
                {todos.map((items, index) => {
                  return (
                    <Row key={index}>
                      <Col>
                        <div
                          className="todosItem"
                          style={{
                            backgroundColor:
                              editIndex === index ? "lightgray" : [],
                          }}
                        >
                          <div className="todosText">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={checkBox}
                              readOnly
                              onChange={() => handleChange(index)}
                            />
                            <span
                              className={checkBox?'line-through':'none-line'}
                            >
                              {alert ? (
                                <SweetAlert
                                  show={alert}
                                  title="ToDos Cannot be Blank For Submit!!"
                                  text={`SweetAlert in React`}
                                  onConfirm={() => setAlert(false)}
                                />
                              ) : (
                                items
                              )}
                            </span>
                          </div>
                          <div className="todosIcons">
                            <BsPencilSquare
                              size={30}
                              color="green"
                              style={{ marginRight: "10px", cursor: "pointer" }}
                              onClick={() => editItem(index)}
                            />
                            <ImBin
                              size={25}
                              color="red"
                              style={{ marginRight: "5px", cursor: "pointer" }}
                              onClick={() => deleteItem(index)}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
