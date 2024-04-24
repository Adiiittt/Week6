import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // state? useState
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button onClick={() => setSelectedId(1)}>1</button>

      <button
        onClick={function () {
          setSelectedId(2);
        }}
      >
        2
      </button>

      <button
        onClick={function () {
          setSelectedId(3);
        }}
      >
        3
      </button>
      <button
        onClick={function () {
          setSelectedId(4);
        }}
      >
        4
      </button>

      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  // implement effect here
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then((response) => {
          setTodo(response.data.todo);
        });
    }, 100);
  }, [id]);

  return (
    <div>
      Id: {id}
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
