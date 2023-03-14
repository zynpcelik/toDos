import "./App.css";
import AddInput from "./AddInput";
import List from "./List";
import { nanoid } from "nanoid";
import React, { useState } from "react";

const data = [
  { text: "learn js", completed: false, id: nanoid() },
  { text: "learn jui jitsu", completed: false, id: nanoid() },
  { text: "buy two smart cleaning vacuum", completed: false, id: nanoid() },
];

function App() {
  const [todos, setTodos] = useState(data);

  const toggleInput = (id) => {
    let list = todos;
    let listItem = todos.findIndex((todo) => todo.id === id);
    list[listItem].completed = !list[listItem].completed;
    setTodos(list);
  };
  const deleteInput = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <div className="App">
      <AddInput setTodos={setTodos} />
      <List todos={todos} toggleInput={toggleInput} deleteInput={deleteInput} />
    </div>
  );
}

export default App;
