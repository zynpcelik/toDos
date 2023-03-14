import React, { useState } from "react";

const ListItem = ({ todo, toggleInput }) => {
  const [checked, setChecked] = useState(todo.completed);
  const toggleChange = (e) => {
    setChecked((prev) => !prev);
    toggleInput(todo.id);
  };

  return (
    <div>
      <li key={todo.id}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input type="checkbox" checked={checked} onChange={toggleChange} />
          <div style={{ width: "400px" }}>{todo.text}</div>
        </div>
      </li>
    </div>
  );
};

export default ListItem;
