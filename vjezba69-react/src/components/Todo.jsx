import { useState } from "react";

const Todo = ({ store }) => {
  const [zadatak, setZadatak] = useState("");

  const inputZadatak = (e) => {
    setZadatak(e.target.value);
  };

  const dodajZadatak = (e) => {
    e.preventDefault();
    store.dodaj(zadatak);
    setZadatak("");
  };

  return (
    <>
      <form>
        <input type="text" onChange={inputZadatak} placeholder="Unesite nešto" value={zadatak} />
        <button type="submit" onClick={dodajZadatak}>
          Dodaj zadatak
        </button>
      </form>

      {store.lista.map((zadatak) => (
        <li key={zadatak.id}>{zadatak.text}</li>
      ))}
    </>
  );
};

export default Todo;
