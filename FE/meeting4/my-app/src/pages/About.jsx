import React, { useState, useEffect } from "react";

function About() {
  const [counter, setCounter] = useState(20);
  const [name, setName] = useState("Nadhif");
  const [ids, setIds] = useState(["1", "2"]);

  // let counter = 10;

  const increment = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // Lifecycle Methods 3
  /**
   * Component Did Mount  : Dijalankan sebelum render
   * Component Did Update : Dijalankan ketika state atau props
   * Component Will UnMount : Dijalankan dihapus / ditutup
   */

  //Component Did Mount
  useEffect(() => {
    setCounter(9);
    //fetch data from API
  }, []);

  //Compenent Did Update
  useEffect(() => {
    if (counter > 10) {
      alert("stock is insufficient");
    }
  }, [counter]);

  // Component Will Unmount
  useEffect(() => {
    return () => {
      alert("Yakin mau keluar");
    };
  }, []);

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <button
          onClick={() => {
            increment();
          }}
        >
          Tambah
        </button>
        <button
          onClick={() => {
            decrement();
          }}
        >
          Kurang
        </button>
      </div>
      <p>About</p>
    </div>
  );
}

export default About;
