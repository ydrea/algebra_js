import { FaCheck, FaTrash } from "react-icons/fa";

const Todo = ({ task, id, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((listElement) => listElement.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo" key={id}>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{task}</li>
      <button className="complete-btn" onClick={completedHandler}>
        <FaCheck />
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Todo;
