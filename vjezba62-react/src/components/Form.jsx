import { FaPlusSquare } from "react-icons/fa";

const Form = ({ setInputText, setTodos, inputText, todos }) => {
  const inputTextHandler = (event) => {
    const inputText = event.target.value;
    setInputText(inputText);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    if (inputText.trim() === "") {
      alert("Polje ne smije biti prazno");
      return;
    }
    setTodos([...todos, { task: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText("");
  };

  return (
    <form>
      <input type="text" value={inputText} className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <FaPlusSquare />
      </button>
    </form>
  );
};

export default Form;
