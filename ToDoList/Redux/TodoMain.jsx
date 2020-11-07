import React from "react";
import ReduxTodo from "./ReduxTodo";
import { Provider } from "react-redux";
import { store } from "./store";

function TodoMain() {
  return (
    <div>
      <Provider store={store}>
        <ReduxTodo />
      </Provider>
    </div>
  );
}

export default TodoMain;
