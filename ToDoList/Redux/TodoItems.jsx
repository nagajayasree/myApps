import React from "react";
import { delItem } from "./store";

const TodoItems = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <button
            className="btn btn-danger m-3"
            onClick={() => delItem(item.id)}
          >
            Delete
          </button>
        ))}
      </ul>
    </>
  );
};

export default TodoItems;
