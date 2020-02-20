import React, { useState } from "react";
import ToDoItem from "./ToDoItem.js";

const data = [
  { priority: 3, task: "Clean the bins", complete: false },
  { priority: 2, task: "Clean the fridge", complete: false },
  { priority: 1, task: "Do the hoover", complete: false },
  { priority: 2, task: "Wipe the tables", complete: true }
];

function TodoList() {
  const [todos, setTodos] = useState(data);

  function toggleComplete(index) {
    console.log("clicked ", index);
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];

    setTodos(newTodos);
  }

  return (
    <ul>
      {todos.map(function(item, i) {
        return (
          <ToDoItem
            todo={item}
            toggleComplete={function() {
              toggleComplete(i);
            }}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
