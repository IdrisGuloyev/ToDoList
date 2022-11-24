import "./App.css";
import React, { useState, useEffect } from "react";

import ToDoList from "./components/ToDoList";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((response) => setData(response.message));
  }, []);

  return (
    <div className="todo-app">
      <ToDoList />
      {!data ? "Loading..." : data}
    </div>
  );
}

export default App;
