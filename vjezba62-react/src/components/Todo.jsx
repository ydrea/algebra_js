import { FaCheck, FaTrash } from "react-icons/fa";

const Todo = ({ task, id, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((listElement) => listElement.id !== todo.id));
  };
  return (
    <div className="todo" key={id}>
      <li className="todo-item">{task}</li>
      <button className="complete-btn">
        <FaCheck />
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Todo;
