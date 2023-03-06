import React, { useEffect, useState } from "react";

function Filter() {
  const [fruits, setFruits] = useState(["Pisang", "Apel", "Jambu", "Anggur"]);
  //   const [filteredFruits, setFilteredFruits] = useState([
  //     "Pisang",
  //     "Apel",
  //     "Jambu",
  //     "Anggur",
  //   ]);
  const [searchString, setSearchString] = useState("");

  const renderList = () => {
    // Mas Rifqi

    // let filterFruits = fruits.filter((fruit) => {
    //   return fruit.toLowerCase().includes(searchString.toLowerCase());
    // });

    // return filterFruits.map((fruit) => {
    //   return (
    //     <div className="bg-black px-4 py-6 my-2 w-1/4 text-white m-auto">
    //       <p>{fruit}</p>
    //     </div>
    //   );
    // });

    return fruits
      .filter((fruit) => {
        return fruit.toLowerCase().includes(searchString.toLowerCase());
      })
      .map((fruit) => {
        return (
          <div className="bg-black px-4 py-6 my-2 w-1/4 text-white m-auto">
            <p>{fruit}</p>
          </div>
        );
      });

    // return filteredFruits.map((fruit) => {
    //   return (
    //     <div className="bg-black px-4 py-6 my-2 w-1/4 text-white m-auto">
    //       <p>{fruit}</p>
    //     </div>
    //   );
    // });
  };

  const inputHandler = (event) => {
    setSearchString(event.target.value);
  };

  //   useEffect(() => {
  //     if (searchString === "") {
  //       setFilteredFruits(fruits);
  //     } else {
  //       setFilteredFruits(
  //         fruits.filter((fruit) => {
  //           return fruit.toLowerCase().includes(searchString.toLowerCase());
  //         })
  //       );
  //     }
  //   }, [searchString]);

  return (
    <div className="text-center mt-4">
      <input
        type="text"
        className="border-2 border-slate-700 w-1/4 h-10 px-2"
        onChange={inputHandler}
        value={searchString}
        placeholder="Search..."
      />
      {renderList()}
    </div>
  );
}

export default Filter;
