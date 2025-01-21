import HOC from "./HOCKlasa";

const ListTodo = ({ podaci }) => {
  let filterTodos = podaci.map((todo) => {
    return (
      <div key={todo.id}>
        <p>{todo.title}</p>
      </div>
    );
  });

  return (
    <>
      <div>{filterTodos}</div>
    </>
  );
};

const SearchTodos = HOC(ListTodo, "todos");
export default SearchTodos;
