import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.cartList);

  return (
    <div className="flex flex-row gap-10 justify-center items-center bg-black text-white h-20">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="hover:font-semibold"
      >
        Products
      </button>
      <button
        onClick={() => {
          navigate("/cart");
        }}
        className="hover:font-semibold"
      >
        Cart {cartList.length}
      </button>
    </div>
  );
}
export default Navbar;
