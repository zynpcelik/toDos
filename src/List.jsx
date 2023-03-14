import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const List = ({ todos, toggleInput, deleteInput }) => {
  const [filtered, setFiltered] = useState(todos);
  const filterList = (isCompleted) =>
    setFiltered(todos.filter((todo) => todo.completed === isCompleted));

  /* const deleteState = () => {
      setFiltered(todos.filter((todo) => todo.completed===true ))
    }; */

  useEffect(() => setFiltered(todos), [todos]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <br />
      <br />
      <ul style={{ listStyle: "none" }}>
        {filtered.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            toggleInput={toggleInput}
            deleteInput={deleteInput}
          />
        ))}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <small>{todos.length} item</small>{" "}
          </div>
          <div>
            <button onClick={() => filterList(false)}>Active</button>
            <button onClick={() => filterList(true)}>Completed</button>
            <button onClick={() => setFiltered(todos)}>Clear Filter</button>
            <button onClick={() => deleteInput()}>Clear Completed</button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default List;
