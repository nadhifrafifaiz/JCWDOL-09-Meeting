import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

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
    </div>
  );
}
export default Navbar;
