import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    return todo.status === filter;
  });

  return (
    <>
      <div className="container">
        <h3 className="text-center heading my-4">My Todo</h3>
        <Form addTodo={addTodo} />
      </div>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="container list">
        <List
          todos={filteredTodos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};

export default App;
