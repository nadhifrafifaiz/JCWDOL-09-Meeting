import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  randomNumber,
} from "../features/counter/counterSlice";
import { postCard, fetchCard } from "../features/cart/cartSlice";

export function CounterRedux() {
  const count = useSelector((state) => state.counter.value);
  const carts = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  const renderCarts = () => {
    return carts.map((cart) => {
      return <p key={cart.id}>{cart.productName}</p>;
    });
  };

  useEffect(() => {
    dispatch(fetchCard());
  }, []);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(randomNumber())}
        >
          Random
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(postCard({ productName: "Sabun" }))}>
          Add Cart
        </button>
      </div>
      {renderCarts()}
    </div>
  );
}
