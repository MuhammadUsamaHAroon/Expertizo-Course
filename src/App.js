import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "react-bootstrap";

function App() {
  {
    /* TASK 1  */
  }

  const txt = "Hello World";
  console.log(txt);

  {
    /* TASK 2  */
  }

  const obj = {
    naam: "Hello World Object",
  };
  console.log(obj.naamnaam);

  {
    /* TASK 3  */
  }

  const arr = ["We", "are", "United"];
  console.log(arr[0] + " " + arr[1] + " " + arr[2]);

  {
    /* TASK 4  */
  }

  const arrObj = [
    { name: "Hello World 1", id: 0 },
    { name: "Hello World 2", id: 1 },
    { name: "Hello World 3", id: 2 },
  ];

  {
    /* TASK 5  */
  }

  const complex = [
    { id: 0, company: "XYZ", jobs: ["JavaScript", "React"] },
    { id: 1, company: "ABC", jobs: ["Angular", "Ionic"] },
  ];
  return (
    <div className="App">
      {/* TASK 1  */}

      <h1>Task 1: const name = "Hello World";</h1>
      <p>
        <b>{txt}</b>
      </p>
      <hr />

      {/* TASK 2 */}

      <h1>`Task 2: const object = naam: "Hello World Object"`</h1>
      <p>
        <b>{obj.naam}</b>
      </p>
      <hr />

      {/* TASK 3 */}

      <h1>
        Task 3: const data = ['We', 'are', 'United'] //Show these in separate
        tags
      </h1>
      {arr.map((items, index) => {
        return (
          <ul style={{ width: "5%", margin: "auto" }} key={index}>
            <b>
              <li>{items}</li>
            </b>
          </ul>
        );
      })}
      <hr />

      {/* TASK 4 */}

      <h1>Task 4:Write Array Object //Show these in separate tags</h1>
      {arrObj.map((items) => {
        return (
          <ul style={{ width: "10%", margin: "auto" }} key={items.id}>
            <b>
              <li>{items.name}</li>
            </b>
          </ul>
        );
      })}
      <hr />

      {/* TASK 5 */}
      <h1>Task 5: Write Array Object //Show these in a Table</h1>
      <br />
      <br />
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Jobs</th>
              <th>Jobs</th>
            </tr>
          </thead>
          {complex.map((items, index) => {
            return (
              <tbody key={items.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{items.company}</td>
                  <td>{items.jobs.slice(1, 3)}</td>
                  <td>{items.jobs.slice(0, 1)}</td>
                </tr>
              </tbody>
            );
          })}
        </Table><br/><br/>
      </Container>
    </div>
  );
}

export default App;
