/* Ovakav pristup iako će mijenjati vrijednost varijable brojac (što i vidimo u konzoli), neće natjerati React da odradi novi render stoga
nećemo ni vidjeti promjenu brojac varijable na ekranu... */

/* const Counter = () => {
  let brojac = 0;

  const umanji = () => {
    brojac -= 1;
    console.log(brojac);
  };

  const uvecaj = () => {
    brojac += 1;
    console.log(brojac);
  };

  return (
    <div>
      <button onClick={umanji}>Umanji za 1</button>
      <p>{brojac}</p>
      <button onClick={uvecaj}>Uvećaj za 1</button>
    </div>
  );
};

export default Counter; */

import { useState, useEffect } from "react";

const Counter = () => {
  const [brojac, setBrojac] = useState(0);

  const umanji = () => {
    setBrojac((prevBrojac) => prevBrojac - 1);
  };

  const uvecaj = () => {
    setBrojac((prevBrojac) => prevBrojac + 1);
  };

  useEffect(() => {
    console.log(brojac);
  }, [brojac]);

  return (
    <div>
      <button onClick={umanji}>Umanji za 1</button>
      <p>{brojac}</p>
      <button onClick={uvecaj}>Uvećaj za 1</button>
    </div>
  );
};

export default Counter;
