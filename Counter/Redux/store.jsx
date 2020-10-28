import React from "react";
import { Provider } from "react-redux";
import ReduxCounter from "./ReduxCounter";
import { createStore } from "redux";

const initialState = {
  count: 0,
};

function changeCounter(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + 1,
      };
    case "DEC":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(changeCounter);

store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });

function Main() {
  return (
    <div>
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    </div>
  );
}

export default Main;
