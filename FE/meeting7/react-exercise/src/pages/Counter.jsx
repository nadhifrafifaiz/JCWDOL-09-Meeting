import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="w-1/4 h-24  bg-blue-200 flex flex-row justify-center items-center gap-10 mx-auto my-4">
      <div className="font-semibold text-4xl bg-red-300">
        <button onClick={decrement}>-</button>
      </div>
      <div className="font-semibold text-5xl">
        <p>{counter}</p>
      </div>
      <div className="font-semibold text-4xl bg-green-300">
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
