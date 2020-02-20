import React from "react";

function ToDoItem({ task, priority, complete }) {
  return (
    <li>
      <h2>{task}</h2>
      <p>The priority level of this task is {priority}</p>
      <p>{complete ? `Task is done` : `Do the task!`}</p>
    </li>
  );
}

export default ToDoItem;
