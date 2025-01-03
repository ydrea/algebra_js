import { useEffect, useState } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  // ovaj useEffect će se "okinuti" na svakom renderu (jer pokreće setter funkciju koja mijenja vrijednost statea)
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // ovaj useEffect će se pokrenuti nakon prvog rendera/učitavanja/mountanja komponente u browseru (componentDidMount)
  useEffect(() => {
    console.log("Učitao sam se nakon učitavanja stranice");
  }, []);

  // ovaj useEffect će se pokrenuti pirlikom prvog rendera i ponovo kada se "name" promijeni
  useEffect(() => {
    console.log(`Ime je ${name}`);
  }, [name]);

  // Ako returnamo cleanup funkciju iz useEffecta, ta cleanup funkcija će unmountati komponentu
  useEffect(() => {
    console.log(`Ime je sad:${name}`);
    return () => {
      console.log("Unmountali smo ovo prije novog rendera");
    };
  }, [name]);

  return (
    <div>
      <p>Širina prozora:{windowWidth}</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Unesite ime"
      />
    </div>
  );
};

export default App;
