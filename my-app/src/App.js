import React from "react";
import TodoList from "./ToDoList.js";
import "./App.css";

const data = [
  { priority: 3, task: "Clean the bins", complete: false },
  { priority: 2, task: "Clean the fridge", complete: false },
  { priority: 1, task: "Do the hoover", complete: false },
  { priority: 2, task: "Wipe the tables", complete: true }
];

function App() {
  return (
    <div className="App">
      <TodoList todos={data} />
    </div>
  );
}

export default App;
