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

  function deleteTodo(index) {
    console.log("clicked ", index);
    const removeTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];

    setTodos(removeTodos);
  }

  return (
    <ul>
      {todos.map(function(item, i) {
        return (
          <ToDoItem
            todo={item}
            deleteTodo={function() {
              deleteTodo(i);
            }}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
