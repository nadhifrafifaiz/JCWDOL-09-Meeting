import { useEffect, useState } from "react";
import Axios from "axios";

function UserEditDelete() {
  const [userList, setUserList] = useState([]);
  const [isEdit, setIsEdit] = useState(0);
  const [userEdit, setUserEdit] = useState({
    name: "",
    username: "",
    email: "",
  });

  const fetchData = async () => {
    let response = await Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUserList(response.data);
  };

  const renderList = () => {
    return userList.map((user) => {
      if (user.id === isEdit) {
        return (
          <tr className="text-left">
            <td className="p-2">{user.id}</td>
            <td className="p-2">
              <input
                type="text"
                value={userEdit.name}
                onChange={(event) => {
                  setUserEdit({ ...userEdit, name: event.target.value });
                }}
                className="border-2 border-slate-700 px-1 rounded-md w-full h-8"
              />
            </td>
            <td className="p-2">
              <input
                type="text"
                value={userEdit.username}
                onChange={(event) => {
                  setUserEdit({ ...userEdit, username: event.target.value });
                }}
                className="border-2 border-slate-700 px-1 rounded-md w-full h-8"
              />
            </td>
            <td className="p-2">
              <input
                type="text"
                value={userEdit.email}
                onChange={(event) => {
                  setUserEdit({ ...userEdit, email: event.target.value });
                }}
                className="border-2 border-slate-700 px-1 rounded-md w-full h-8"
              />
            </td>
            <td className="p-2">
              <div className="flex gap-2">
                <button
                  onClick={() => saveEdit()}
                  className="p-1 bg-red-300 rounded-md w-16 text-xs hover:bg-red-500 hover:text-white"
                >
                  Save
                </button>
                <button
                  onClick={() => cancelEdit()}
                  className="p-1 bg-slate-300 rounded-md w-16 text-xs hover:bg-slate-600 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </td>
          </tr>
        );
      } else {
        return (
          <tr className="text-left">
            <td className="p-2">{user.id}</td>
            <td className="p-2">{user.name}</td>
            <td className="p-2">{user.username}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">
              <div className="flex gap-2">
                <button
                  onClick={() => deleteData(user.id)}
                  className="p-1 bg-red-300 rounded-md w-16 text-xs hover:bg-red-500 hover:text-white"
                >
                  Delete
                </button>
                <button
                  onClick={() => editData(user.id, user)}
                  className="p-1 bg-slate-300 rounded-md w-16 text-xs hover:bg-slate-600 hover:text-white"
                >
                  Edit
                </button>
              </div>
            </td>
          </tr>
        );
      }
    });
  };

  const deleteData = (id) => {
    let tempUser = userList.filter((user) => {
      return user.id !== id;
    });
    setUserList(tempUser);
  };
  const editData = (id, user) => {
    setIsEdit(id);
    setUserEdit({
      email: user.email,
      name: user.name,
      username: user.username,
    });
  };
  const cancelEdit = () => {
    setIsEdit(0);
  };
  const saveEdit = () => {
    let tempList = userList;
    tempList.forEach((user, index) => {
      if (user.id === isEdit) {
        tempList[index] = { ...user, ...userEdit };
      }
    });
    setUserList(tempList);
    setIsEdit(0);
    setUserEdit({
      email: "",
      name: "",
      username: "",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <p className="my-4 text-2xl font-semibold">Users</p>
      <table className="w-full">
        <tr className="text-left bg-red-400">
          <th className="p-2">ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Username</th>
          <th className="p-2">Email</th>
          <th className="p-2">Action</th>
        </tr>
        {renderList()}
      </table>
    </div>
  );
}

export default UserEditDelete;
