import { useEffect, useState } from "react";
import Axios from "axios";
import TodoItem from "../components/TodoItem";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchData = () => {
    Axios.get("http://localhost:2000/todo").then((response) => {
      console.log(response.data);
      setTodoList(response.data);
    });
  };

  const renderList = () => {
    return todoList.map((todo) => {
      return (
        <TodoItem
          activity={todo.activity}
          id={todo.id}
          deleteBtnHandler={deleteTodo}
          isFinished={todo.isFinished}
        />
      );
    });
  };

  //Delete todo
  const deleteTodo = (id) => {
    Axios.delete("http://localhost:2000/todo/" + id).then((response) => {
      fetchData();
    });
  };

  //   Input handler for new todo
  const inputHandler = (event) => {
    setNewTodo(event.target.value);
  };

  //Add new todo
  const addTodo = async () => {
    try {
      await Axios.post("http://localhost:2000/todo", {
        activity: newTodo,
        isFinished: false,
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  //   Component Did Mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-1/4 mx-auto">
      <h1 className="text-red-500 text-2xl font-bold ">Todo List</h1>
      {renderList()}
      <input type="text" onChange={inputHandler} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Todo;
