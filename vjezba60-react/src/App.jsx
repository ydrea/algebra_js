import HelloFn from "./compontents/HelloFn";
import HelloCl from "./compontents/HelloCl";
import Counter from "./compontents/Counter";
import Welcome from "./compontents/Welcome";

const App = () => {
  return (
    <div>
      <HelloFn ime="Igor">Učimo React</HelloFn>
      <HelloFn ime="Ivana" />
      <HelloCl ime="Josip">Učimo React</HelloCl>
      <br />
      <Counter />
      <br />
      <Welcome />
    </div>
  );
};

export default App;
