import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  randomNumber,
} from "../features/counter/counterSlice";
import { Link } from "react-router-dom";

function Counter() {
  // UseSelector = untuk mengakses global state
  // UseDispatch = untuk mengakses action
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter {count}</p>
      <div className="flex flex-row gap-10">
        <button onClick={() => dispatch(increment())}>Tambah</button>
        <button onClick={() => dispatch(decrement())}>Kurang</button>
        <button onClick={() => dispatch(randomNumber())}>Random</button>
        <Link to={"/learn-storage"}>Go to learn redux</Link>
      </div>
    </div>
  );
}

export default Counter;
