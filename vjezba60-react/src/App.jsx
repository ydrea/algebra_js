import HelloFn from "./compontents/HelloFn";
import HelloCl from "./compontents/HelloCl";

const App = () => {
  return (
    <div>
      <HelloFn ime="Igor">Učimo React</HelloFn>
      <HelloFn ime="Ivana" />
      <HelloCl ime="Josip">Učimo React</HelloCl>
    </div>
  );
};

export default App;
