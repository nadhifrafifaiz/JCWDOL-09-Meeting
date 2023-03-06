import React from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

function LearnStorage() {
  const count = useSelector((state) => state.counter.value);
  //LOCAL STORAGE
  const addLocalStorage = () => {
    alert("success add localstorage");
    localStorage.setItem("userToken", "Asdxcasq2sdacxeascx");
  };

  const removeLocalStorage = () => {
    alert("success remove localstorage");
    localStorage.removeItem("userToken");
  };

  //SESSION STORAGE
  const addSessionStorage = () => {
    sessionStorage.setItem("userToken", "asdacxqe12e12das");
  };

  const removeSessionStorage = () => {
    sessionStorage.removeItem("userToken");
  };

  //   COOKIES
  const addCookie = () => {
    Cookies.set("userToken", "ascafwqdasd1234", { expires: 7, path: "" });
  };
  const removeCookie = () => {
    Cookies.remove("userToken", { path: "" });
  };

  return (
    <div className="grid grid-cols-3 m-auto w-3/4">
      <div>
        <p>Local Storage {count}</p>
        <button
          onClick={addLocalStorage}
          className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-green-300 mr-2"
        >
          Add Local Storage
        </button>
        <button
          onClick={removeLocalStorage}
          className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-red-300 "
        >
          Remove Local Storage
        </button>
      </div>
      <div>
        <p>Session Storage</p>
        <button
          onClick={addSessionStorage}
          className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-green-300 mr-2"
        >
          Add Session Storage
        </button>
        <button
          onClick={removeSessionStorage}
          className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-red-300 "
        >
          Remove Session Storage
        </button>
      </div>
      <div>
        <p>Cookie</p>
        <button
          onClick={addCookie}
          className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-green-300 mr-2"
        >
          Add Cookie
        </button>
        <button
          onClick={removeCookie}
          className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-red-300 "
        >
          Remove Cookie
        </button>
      </div>
    </div>
  );
}

export default LearnStorage;
