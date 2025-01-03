import { useState } from "react";
import Header from "./components/Header";
import ListaKartica from "./components/ListaKartica";
import karticaData from "./data/Data";

const App = () => {
  const [kartica, setKartica] = useState(karticaData);
  const handleDelete = (id) => {
    console.log("Dolazim iz App.jsx-a", id);
  };

  return (
    <div>
      <Header text="NOVI LOGO" />
      <ListaKartica kartica={kartica} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
