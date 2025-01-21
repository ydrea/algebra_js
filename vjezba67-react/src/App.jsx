import SearchUsers from "./components/ListUser";
import SearchTodos from "./components/ListTodo";

const App = () => {
  return (
    <div className="flex">
      <div>
        <SearchUsers />
      </div>
      <div>
        <SearchTodos />
      </div>
    </div>
  );
};

export default App;
