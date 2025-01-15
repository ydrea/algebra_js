import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <>
      <div>Counter: {state.counter}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Uvećaj</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Smanji</button>
    </>
  );
};

export default Counter;
