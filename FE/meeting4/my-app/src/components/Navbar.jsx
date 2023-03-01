import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between items-center bg-black px-20 text-white h-16">
      <p
        onClick={() => navigate("/")}
        className="font-extrabold uppercase text-lg hover:cursor-pointer hover:text-slate-500"
      >
        Navbar
      </p>

      <div className="flex flex-row gap-16">
        <button onClick={() => navigate("/home")} className="text-white">
          Home
        </button>
        <button onClick={() => navigate("/about")} className="text-white">
          About
        </button>
        <button onClick={() => navigate("/chakra")} className="text-white">
          Chakra
        </button>
        <button onClick={() => navigate("/users")} className="text-white">
          Users
        </button>
      </div>
    </div>
  );
}

export default Navbar;
