import React from "react";
import TodoRedux from "./TodoRedux";
import { Provider } from "react-redux";
import { store } from "./store";

function TodoMain() {
  return (
    <div>
      <Provider store={store}>
        <TodoRedux />
      </Provider>
    </div>
  );
}

export default TodoMain;
