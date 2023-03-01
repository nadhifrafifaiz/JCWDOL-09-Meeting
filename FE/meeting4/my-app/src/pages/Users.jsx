import { useEffect, useState } from "react";
import Axios from "axios";
import UserCard from "../components/UserCard";

function Users() {
  const [userList, setUserList] = useState([]);

  const fetchData = async () => {
    let response = await Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUserList(response.data);
  };

  const renderList = () => {
    return userList.map((user) => {
      return (
        <div>
          <UserCard user={user} />
        </div>
      );
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <p className="my-4 text-2xl font-semibold">Users</p>
      <div className="grid grid-cols-4 gap-4">{renderList()}</div>
    </div>
  );
}

export default Users;
