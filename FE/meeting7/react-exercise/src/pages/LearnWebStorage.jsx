import React from "react";
import Cookies from "js-cookie";
function LearnWebStorage() {
  const addLocalStorage = () => {
    alert("test");
    localStorage.setItem("userToken", "123456");
  };
  const removeLocalStorage = () => {
    localStorage.removeItem("userToken");
  };
  const addSessionStorage = () => {
    alert("test");
    sessionStorage.setItem("userTokenSession", "123456");
  };
  const removeSessionStorage = () => {
    sessionStorage.removeItem("userTokenSession");
  };

  const addCookies = () => {
    Cookies.set("userTokenCookie", "123456", { expires: 7, path: "" });
  };

  const removeCookies = () => {
    Cookies.remove("userTokenCookie", { path: "" });
  };
  return (
    <div className="grid grid-cols-3 m-auto w-3/4 mt-10 gap-10">
      <div className="flex justify-start flex-col items-start">
        <p className="font-semibold text-xl">Local Storage</p>
        <div className="flex flex-col items-start justify-start">
          <button
            className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-green-300 "
            onClick={addLocalStorage}
          >
            Add{" "}
          </button>
          <button
            className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-red-300 "
            onClick={removeLocalStorage}
          >
            Remove{" "}
          </button>
        </div>
      </div>
      <div className="flex justify-start flex-col items-start">
        <p className="font-semibold text-xl">Session Storage</p>
        <div className="flex flex-col items-start justify-start">
          <button
            className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-green-300 "
            onClick={addSessionStorage}
          >
            Add{" "}
          </button>
          <button
            className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-red-300 "
            onClick={removeSessionStorage}
          >
            Remove{" "}
          </button>
        </div>
      </div>
      <div className="flex justify-start flex-col items-start">
        <p className="font-semibold text-xl">Cookies</p>
        <div className="flex flex-col items-start justify-start">
          <button
            className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-green-300 "
            onClick={addCookies}
          >
            Add{" "}
          </button>
          <button
            className="rounded-md  px-2 py-1 mb-1 text-xs font-semibold bg-red-300 "
            onClick={removeCookies}
          >
            Remove{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearnWebStorage;
