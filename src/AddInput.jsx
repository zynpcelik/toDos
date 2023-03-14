import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

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
      <Text fontSize="2xl" fontWeight="bold" color="green.400" mb="5">
        To Do's List
      </Text>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="What needs to be done?"
          onChange={onChange}
          value={value}
          color="#F5EAEA"
          _placeholder={{ opacity: 0.4, color: "inherit" }}
          variant="unstyled"
          w="500"
          ml="50"
        />
      </form>
    </div>
  );
};

export default AddInput;
