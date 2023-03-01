import "../style.css";

function TodoItem(props) {
  const { id, activity, deleteBtnHandler, isFinished } = props;

  return (
    <div className="todo-item">
      <p>{id}</p>
      <p>{activity}</p>
      <p>{isFinished ? "Finished" : "Not Finished"}</p>
      <button onClick={() => deleteBtnHandler(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
