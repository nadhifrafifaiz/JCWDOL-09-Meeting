import Axios from "axios";
import { useState } from "react";

function About() {
  const [userList, setUserList] = useState([]);

  const fetchData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((hasil) => {
      console.log(hasil.status);
      console.log(hasil.data);

      setUserList(hasil.data);
    });
  };

  const renderList = () => {
    return userList.map((user, index) => {
      return <div key={index}>{user.name}</div>;
    });
  };

  return (
    <div>
      <p>About</p>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Get Data
      </button>
      {renderList()}
    </div>
  );
}

export default About;
