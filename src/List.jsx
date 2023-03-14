import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { Box, Button, Text } from "@chakra-ui/react";

const List = ({ todos, toggleInput, deleteInput }) => {
  const [filtered, setFiltered] = useState(todos);
  const filterList = (isCompleted) =>
    setFiltered(todos.filter((todo) => todo.completed === isCompleted));

  useEffect(() => setFiltered(todos), [todos]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      m="10"
      width="%50"
    >
      <br />
      <br />
      <Box listStyleType="none">
        {filtered.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            toggleInput={toggleInput}
            deleteInput={deleteInput}
          />
        ))}
      </Box>
      <Box mt="10" display="flex" justifyContent="space-between">
        <Box>
          <Text fontSize="16" fontWeight="bold" color="#F5EAEA">
            {todos.length} item
          </Text>
        </Box>
        <Box display="flex" gap={3}>
          <Button
            width="130px"
            size="sm"
            colorScheme="green"
            onClick={() => filterList(false)}
          >
            Active
          </Button>
          <Button
            width="130px"
            size="sm"
            colorScheme="green"
            onClick={() => filterList(true)}
          >
            Completed
          </Button>
          <Button
            width="130px"
            size="sm"
            colorScheme="green"
            onClick={() => setFiltered(todos)}
          >
            Clear Filter
          </Button>
          <Button
            width="130px"
            size="sm"
            colorScheme="green"
            onClick={() => deleteInput()}
          >
            Clear Completed
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default List;
