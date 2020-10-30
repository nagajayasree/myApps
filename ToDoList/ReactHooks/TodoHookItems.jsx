import React from "react";

const TodoHookItems = ({ text, id, onDelete }) => {
  return (
    <>
      {text}
      <button className="btn btn-danger m-3" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default TodoHookItems;
