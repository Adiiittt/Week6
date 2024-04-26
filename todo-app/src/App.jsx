import { useState } from "react";
let GLOBAL_ID = 4;
function App() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: GLOBAL_ID++,
        title: "new todo",
        description: "new todo desc",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, index) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
