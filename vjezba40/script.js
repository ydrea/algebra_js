"use strict";

/* 
Ovo će nam ispisati uspjeh i neće nam catch izbaciti error, jer je stranica uspješno dohvaćena. 
Catch će nam dati error samo kada se radi o network erroru. 
Možemo sa res.status, res.statusText i res.ok provjerom našeg responsea dobiti još informacija,
neovisno o network errorima.
*/

/* fetch("https://httpstat.us/404")
  .then((res) => {
    console.log(res.status);
    console.log(res.ok);
    console.log(res.statusText);
  })
  .then(() => {
    console.log("uspjeh");
  })
  .catch((error) => console.log(error)); */

/* ---------------------------------------------------------------------------------- */

/* 
  Ovo nam sada omogućava da možemo hvatati errore iz samog responsea i kreiramo novi error koji će
  catch uhvatiti i ispisati...
*/

fetch("https://httpstat.us/404")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Zahtjev je neuspješan");
    } else if (res.status === 404) {
      throw new Error("Error 404, stranica nije nađena");
    } else if (res.status === 500) {
      throw new Error("Server nije dostupan");
    }
  })
  .then(() => {
    console.log("uspjeh");
  })
  .catch((error) => console.log(error));
