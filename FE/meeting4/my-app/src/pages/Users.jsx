import { useEffect } from "react";
import Axios from "axios";

function Users() {
  const fetchData = async () => {
    let response = await Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <p>Users</p>
    </div>
  );
}

export default Users;
