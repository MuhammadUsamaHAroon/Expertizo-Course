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
  const [editItems, setEditItems] = useState(null);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(todos));
  }, [todos]);

  const addItem = (e) => {
    if (!input) {
      setAlert(true);
    } else {
      const allToDoData = { id: new Date().getTime().toString(), text: input };
      setTodos([...todos, allToDoData]);
      setInput("");
    }
  };

  const deleteItem = (id) => {
    const copyText = todos.filter((items) => {
      return id !== items.id;
    });
    setTodos(copyText);
  };
  const editItem = (id) => {
    const editTodos = todos.find((items) => {
      return items.id === id;
    });
    setEditToggle(true);
    setInput(editTodos.text);
    setEditItems(id);
  };
  const upDateItems = () => {
    if (input && editToggle) {
      setTodos(
        todos.map((items) => {
          if (items.id === editItems) {
            return { ...items, text: input };
          }
          return items;
        })
      );
      setEditToggle(false);
      setInput("");
      setEditItems(null);
    }
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
                      {!editToggle ? (
                        <Button variant="success" onClick={addItem}>
                          Submit
                        </Button>
                      ) : (
                        <Button variant="primary" onClick={upDateItems}>
                          UpDate
                        </Button>
                      )}
                    </div>
                  </Col>
                </Row>
                {todos.map((items) => {
                  return (
                    <Row key={items.id}>
                      <Col>
                        <div className="todosItem">
                          <div className="todosText">
                            <span>
                              {alert ? (
                                <div>
                                  <SweetAlert
                                    show={alert}
                                    title="ToDos Cannot be Blank For Submit!!"
                                    text={`SweetAlert in React`}
                                    onConfirm={() => setAlert(false)}
                                  />
                                </div>
                              ) : (
                                items.text
                              )}
                            </span>
                          </div>
                          <div className="todosIcons">
                            <BsPencilSquare
                              size={30}
                              color="green"
                              style={{ marginRight: "10px", cursor: "pointer" }}
                              onClick={() => editItem(items.id)}
                            />
                            <ImBin
                              size={25}
                              color="red"
                              style={{ marginRight: "5px", cursor: "pointer" }}
                              onClick={() => deleteItem(items.id)}
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
