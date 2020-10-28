import React from "react";
import { useState } from "react";

const HooksCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Hooks Counter</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default HooksCounter;
