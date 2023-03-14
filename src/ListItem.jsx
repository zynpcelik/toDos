import React, { useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";

const ListItem = ({ todo, toggleInput }) => {
  const [checked, setChecked] = useState(todo.completed);
  const toggleChange = (e) => {
    setChecked((prev) => !prev);
    toggleInput(todo.id);
  };

  return (
    <div>
      <Box
        mt="1"
        key={todo.id}
        display="flex"
        justifyContent="space-between"
        padding="3"
      >
        <input type="checkbox" checked={checked} onChange={toggleChange} />
        <Text width="400px" fontWeight="bold" color="#F5EAEA">
          {todo.text}
        </Text>
      </Box>
    </div>
  );
};

export default ListItem;
