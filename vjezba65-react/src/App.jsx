import { useReducer } from "react";
import { postReducer, POCETNO_STANJE } from "./reducer/PostReducer";

const App = () => {
  const [state, dispatch] = useReducer(postReducer, POCETNO_STANJE);

  const handleFetch = () => {
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_USPJEH", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  return (
    <>
      <button onClick={handleFetch}>{state.loading ? "Dohvati usere" : "Učitavamo..."}</button>
      {/* <p>{post?.title}</p> */}
      <p>{state.post && state.post.title}</p>
      <p>{state.error && "Došlo je do pogreške"}</p>
    </>
  );
};

export default App;
