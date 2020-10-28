import * as React from "react";

const HookCounter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
    <div>UseState Hook Counter</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default HookCounter;
