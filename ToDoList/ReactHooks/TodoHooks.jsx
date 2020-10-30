import React from "react";
import { useState } from "react";
import TodoHookItems from "./TodoHookItems";
import "./Todo.css";

const TodoHooks = () => {
  let list = [];
  const [input, setInput] = useState("");
  const [items, setItems] = useState(list);
  const addItem = (e, items, setItems, input, setInput) => {
    e.preventDefault();
    // const id = items.length ? items[items.length - 1].id + 1 : 1;
    const id = Date.now();
    const text = input;
    setItems([...items, { id: id, text: text }]);
    setInput("");
    console.log(items.length);
  };

  const deleteItem = (id, items, setItems) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <form>
        <input
          className="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="button">
          <button
            className="btn btn-primary"
            onClick={(e) => addItem(e, items, setItems, input, setInput)}
          >
            Add
          </button>
        </div>
      </form>
      {items.map((item) => (
        <li key={item.id}>
          <TodoHookItems
            text={item.text}
            id={item.id}
            onDelete={(id) => deleteItem(id, items, setItems)}
          />
        </li>
      ))}
    </>
  );
};

export default TodoHooks;
