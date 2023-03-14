import { nanoid } from "nanoid";
import React, { useState } from "react";

const AddInput = ({ setTodos }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      setTodos((prev) => [
        ...prev,
        { text: value, completed: false, id: nanoid() },
      ]);
      setValue("");
    }
  };

  return (
    <div>
      <h1>To Do's List</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="What have be done?"
          onChange={onChange}
          value={value}
        />
      </form>
    </div>
  );
};

export default AddInput;
