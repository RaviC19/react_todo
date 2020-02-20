import React from "react";
import ToDoItem from "./ToDoItem.js";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(({ task, priority, complete }) => (
        <ToDoItem task={task} priority={priority} complete={complete} />
      ))}
    </ul>
  );
}

export default TodoList;
