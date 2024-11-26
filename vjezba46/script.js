"use strict";

/* Funkcija koja kao parametar dobija drugu funkcije je Funkcija višeg reda (HOF - Higher Order Function).
Funkcija koju smo proslijedili je callback funkcija. */

const funcA = (fn) => {
  fn();
};

const funcB = () => {
  console.log("Hello World");
};

funcA(funcB);

/* 
Idemo složiti 2 funkcije za množenje i zbrajanje...
*/

/* const brojevi = [10, 20, 30, 40];

const mnozenje = () => {
  const umnozak = brojevi.map((broj) => broj * 2);
  return umnozak;
};

const zbrajanje = () => {
  const suma = brojevi.map((broj) => broj + 1);
  return suma;
};

console.log(mnozenje(), zbrajanje()); */

/* ---------------------------------------------------------------------------- */

// Idemo izvući logiku koja NIJE ista u ove 2 funkcije i presložiti korak po korak da spriječimo dupliciranje koda
/* const brojevi = [10, 20, 30, 40];

function izracunMnozenje(x) {
  return x * 2;
}

function izracunZbrajanje(x) {
  return x + 1;
}

const mnozenje = () => {
  const umnozak = brojevi.map((broj) => izracunMnozenje(broj));
  return umnozak;
};

const zbrajanje = () => {
  const suma = brojevi.map((broj) => izracunZbrajanje(broj));
  return suma;
};

console.log(mnozenje(), zbrajanje()); */

/* ---------------------------------------------------------------------------------- */

// Idemo probati ovo složiti pomoću HOF-a tako da ćemo ove funkcije proslijediti pomoću parametra funkcije..

/* const brojevi = [10, 20, 30, 40];

function izracunMnozenje(x) {
  return x * 2;
}

function izracunZbrajanje(x) {
  return x + 1;
}

function izracunDijeljenje(x) {
  return x / 2;
}

function izracunOduzimanje(x) {
  return x - 1;
}

// Ova izracun funkcija će biti HOF...
const izracun = (fn) => {
  const rezultat = brojevi.map((broj) => fn(broj));
  return rezultat;
};

console.log(izracun(izracunMnozenje), izracun(izracunZbrajanje));
console.log(izracun(izracunDijeljenje), izracun(izracunOduzimanje)); */

/* ---------------------------------------------------------------------------- */

/* 
Idemo od ove naše HOF metode stvoriti novu custom metodu listi na browser Objektu kako bi nam bila dostupna
kao i svaka druga metoda listi putem browser Objekta.
To ćemo napraviti tako da ćemo na globalnom scopeu kreiramo od naše HOF funkcije novi prototip liste.
Naša funkcija više neće moći biti arrow funkcija jer ćemo morati koristiti this ključnu riječ, a arrow funkcije
je ne podržavaju...
*/

const brojevi = [10, 20, 30, 40];
const brojevi2 = [50, 100, 150, 200];

function izracunMnozenje(x) {
  return x * 2;
}

function izracunZbrajanje(x) {
  return x + 1;
}

// Ovu funkciju ćemo pomoću Array prototipa omogućiti da se poziva kao i druge metode listi
Array.prototype.izracun = function (fn) {
  const rezultat = this.map((broj) => fn(broj));
  return rezultat;
};

console.log(brojevi.izracun(izracunMnozenje), brojevi.izracun(izracunZbrajanje));
console.log(brojevi2.izracun(izracunMnozenje), brojevi2.izracun(izracunZbrajanje));
