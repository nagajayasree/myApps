import React from "react";
import { deleteItem } from "./store";

const TodoItems = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <button
            className="btn btn-danger m-3"
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
        ))}
      </ul>
    </>
  );
};

export default TodoItems;
