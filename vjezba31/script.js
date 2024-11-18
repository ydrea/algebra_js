"use strict";

/* 
Napravili smo funkciju unutar druge funkcije i za return vratili instrukcije iz unutrašnje funkcije pomnozi, ali
ju nismo pokrenuli. Također smo kod unutarnje funkcije putem pokretanja vanjskaFunkcija spremili u varijablu pomnozi.
*/
/* function vanjskaFunkcija() {
  function pomnoziFunkcija(broj) {
    return broj * 2;
  }
  return pomnoziFunkcija;
}

const pomnozi = vanjskaFunkcija();
console.log(pomnozi);

const rezultat1 = pomnozi(4);
console.log(rezultat1); */

// Idemo definirati varijablu i njenu vrijednost mijenjati putem funkcije

/* function vanjskaFunkcija2() {
  let brojac = 0;
  function plus1() {
    brojac++;
    console.log(brojac);
  }
  return plus1;
} */

/* Ovisno o tome gdje smo definirali našu funkciju odlučujemo koje varijable su dostupne kada pozovete funkciju.
Koristeći closure, ova varijabla brojac i njena vrijednost su zapisani u definiciji varijable i vrijednost ove
varijable brojac će ostati memorirana u definiciji te funkcije. */

/* const brojacVarijabla = vanjskaFunkcija2();
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();
console.log(brojacVarijabla); */

/* ----------------------------------------------------------------------------------------------------- */

// Još jedan primjer closurea

/* function vanjski(vanjskiBroj) {
  function unutarnji(unutarnjiBroj) {
    return vanjskiBroj + unutarnjiBroj;
  }
  return unutarnji;
}

const dodaj5 = vanjski(5);

console.dir(dodaj5);

console.log(dodaj5(3)); */

/* ------------------------------------------------------------------------------------------------------ */

function updateKlik() {
  let klikovi = {};
  let button;

  function reportKlik(klik) {
    button = klik.id;
    klikovi[button] = klikovi[button] + 1 || 1;
    console.log(button, klikovi);
  }
  return reportKlik;
}

const report = updateKlik();

document.querySelectorAll(".klikovi").forEach((klik) => {
  klik.addEventListener("click", (event) => {
    report(event.target);
  });
});
