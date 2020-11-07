import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos && todos.length
        ? todos.map((todo) => {
            return <Todo todo={todo} />;
          })
        : "No Todos"}
    </ul>
  );
};

export default TodoList;
