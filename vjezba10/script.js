"use strict";

/* IIFE - Immediately Invoked Function Expression.
Ovo je primjer funkcije koja će se odmah i izvršiti
nakon što se definira (nije ju potrebno pozivati).
*/

(function () {
  const user = "Ivan";
  console.log(user);
})();

// Primjer - možemo također ubaciti funkciju unutar "ifi" funkcije

(function () {
  const user = "Matija";
  console.log(user);
  const ifi = () => console.log("Ovo je ifi funkcija");
  ifi();
})();

// Primjer - ifi funkcija sa parametrom

(function (user) {
  console.log(user);
})("Sanja");
