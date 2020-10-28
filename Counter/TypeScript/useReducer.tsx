import * as React from "react";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "inc"; payload: number }
  | { type: "dec"; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "inc":
      return { count: state.count + action.payload };
    case "dec":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

function ReducerCounter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <div>Reducer Hook Counter</div>
      <button onClick={() => dispatch({ type: "dec", payload: 1 })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "inc", payload: 1 })}>+</button>
    </>
  );
}

export default ReducerCounter;
