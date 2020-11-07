import React from "react";
import { connect } from "react-redux";
import { delItem } from "./store";

const Todo = ({ todo }) => {
  return (
    <>
      <ul>
        {todo.text}
        <button className="btn btn-danger m-2" onClick={() => delItem(todo.id)}>
          Delete
        </button>
      </ul>
    </>
  );
};

export default connect(null, { delItem })(Todo);
