import { useEffect, useState } from "react";

function Home() {
  const [name, setName] = useState("Jali");
  const [datas, setDatas] = useState(["fadhli", "samudra", "bayu"]);

  const gantiName = () => {
    setName("Rojak");
  };

  const renderList = () => {
    return datas.map((data, index) => {
      return (
        <tr>
          <td>{index}</td>
          <td>{data}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    setName("Aku bukan Jali");
  }, []);

  return (
    <div className=" font-bold text-center">
      <p>Home</p>
      <p>{name}</p>
      <table className="border-2 bg-red-400">
        <tr className="p-5">
          <th className="p-5">id</th>
          <th className="p-5">name</th>
        </tr>
        {renderList()}
      </table>
      <button
        onClick={() => {
          gantiName();
        }}
        className="bg-red-300 border-2 rounded-md px-5 py-2"
      >
        Ganti Nama
      </button>
    </div>
  );
}

export default Home;
