import React from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  return (
    <div id="main">
      {/* <h1>To-Do List</h1> */}
      <h1 className="heading">To-Do List</h1>
      <Todo />
    </div>
  );
};

export default App;
