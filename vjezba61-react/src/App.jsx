import ListaKartica from "./components/ListaKartica";
import SearchPolje from "./components/SearchPolje";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [osobe, setOsobe] = useState([]);
  const [filter, setFilter] = useState(osobe);

  useEffect(() => {
    fetch("https://reqres.in/api/users/")
      .then((res) => res.json())
      .then((userData) => setOsobe(userData.data));
  }, []);

  useEffect(() => {
    const filterOsobe = osobe.filter((osoba) => {
      return osoba.first_name.toLowerCase().includes(searchField);
    });
    setFilter(filterOsobe);
  }, [osobe, searchField]);

  const onFilterChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="app">
      <SearchPolje onFilterChange={onFilterChange} />
      <ListaKartica osobe={filter} />
    </div>
  );
};

export default App;
