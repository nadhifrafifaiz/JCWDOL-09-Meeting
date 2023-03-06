import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const successEdit = () => {
    //logika edit data
    //kalo berhasil aku redirect
    navigate("/about");
  };
  return (
    <div className="flex flex-row gap-10 justify-center items-center bg-black text-white h-20">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="hover:font-semibold"
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/product");
        }}
        className="hover:font-semibold"
      >
        Products
      </button>
      {/* <button className="hover:font-semibold">About</button>
      <button className="hover:font-semibold">Counter</button>
      <button className="hover:font-semibold">Filter</button> */}
      {/* <button onClick={successEdit}> Edit Data</button> */}
      {/* <Link to="/"> Home Link </Link> */}
    </div>
  );
}
export default Navbar;
