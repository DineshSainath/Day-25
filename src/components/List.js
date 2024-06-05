import React from "react";
import Item from "./Item";

const List = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="row">
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default List;
