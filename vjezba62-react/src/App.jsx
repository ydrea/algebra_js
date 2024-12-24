import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Form setInputText={setInputText} setTodos={setTodos} inputText={inputText} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
