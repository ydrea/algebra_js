"use strict";

let osoba1 = {
  ime: "Ivo",
};

let osoba2 = osoba1;

console.log(osoba1, osoba2);

osoba2.ime = "Marko";
console.log(osoba1, osoba2);
/* Ovo se događa zato što smo samo prenesli adresu memorijske lokacije iz jednog objekta u drugi, stoga
povlačimo iste podatke iz HEAP memorije. */

// Izrada kopije objekta, u ovom slučaju deep copy objekta (novo mjesto u HEAP memoriji)

const josip = {
  ime: "Josip",
  god: 30,
  zanimanje: "Bolničar",
  prijatelji: ["Marko", "Luka", "Stjepan"],
};

console.log(josip);

const andrija = {
  ...josip,
  ime: "Andrija",
};

josip.prezime = "Josić";
josip.prijatelji.shift();

console.log(andrija);
console.log(josip);

// Još jedan jednostavniji primjer

const stariBrojevi = { a: { b: 10 }, c: 2 };
const noviBrojevi = { ...stariBrojevi };

stariBrojevi.c = 5;
stariBrojevi.a.b = 7;
console.log(stariBrojevi, noviBrojevi);

// STRUCTURED clone metoda koja rješava sve probleme - nova metoda koja radi potpuno duboku kopiju objekta

const stariBrojevi1 = { a: { b: 10 }, c: 2 };
const noviBrojevi1 = structuredClone(stariBrojevi1);

stariBrojevi1.c = 5;
stariBrojevi1.a.b = 7;

console.log(stariBrojevi1, noviBrojevi1);
