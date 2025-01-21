import { useState, useEffect } from "react";

const HOC = (Komponenta, ekstenzija) => {
  return () => {
    const [podaci, setPodaci] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${ekstenzija}`)
        .then((res) => res.json())
        .then((data) => setPodaci(data));
    }, [ekstenzija]);

    const handleChange = (event) => {
      setQuery(event.target.value);
    };

    let filterData = podaci;

    filterData = filterData.filter((podatak) => {
      if (ekstenzija === "users") {
        const { name } = podatak;
        return name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
      }
      if (ekstenzija === "todos") {
        const { title } = podatak;
        return title.toLowerCase().indexOf(query.toLowerCase()) >= 0;
      }
      return true;
    });

    return (
      <>
        <input type="text" value={query} onChange={handleChange} />
        <Komponenta podaci={filterData}></Komponenta>
      </>
    );
  };
};

export default HOC;
