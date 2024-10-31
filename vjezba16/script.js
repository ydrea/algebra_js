"use strict";

const todo = {};

// jednostavan način dodavanja novih ključeva i vrijednosti uz te ključeve
todo.id = 1;

console.log(todo);

// primjer spread operatora

const objekt1 = { a: 1, b: 2 };
const objekt2 = { c: 3, d: 4 };

const objekt3 = { ...objekt1, ...objekt2 };
console.log(objekt3);

// Assign metoda za objekte

const objekt4 = Object.assign({}, objekt1, objekt2);

console.log(objekt4);

// Idemo vidjeti kako izgleda lista objekata

const todos = [
  { id: 1, zadatak: "Kupi kruh" },
  { id: 2, zadatak: "Kupi mlijeko" },
  { id: 3, zadatak: "Kupi paštetu" },
];

// kako bi ispisali zadatak koji se nalazi unutar objekta sa id-em 3?

console.log(todos[2].zadatak);

let x;

// Metoda kojom možete provjeriti vrijednosti ključeva u objektu
x = Object.keys(todos[0]);

console.log(x);

// Metoda kojom možemo dohvatiti vrijednosti unutar objekta
x = Object.values(todos[0]);
console.log(x);

// Provjera imamo li određenu vrijednost unutar objekta
x = todos[0].hasOwnProperty("zadatak");
console.log(x);

// Kreiranje novog objekta od varijabli
const ime = "Ivan";
const prezime = "Ivić";
const godina = 30;

const osoba = {
  ime: ime,
  prezime: prezime,
  godina: godina,
};

// shorthand način pisanja

const osoba1 = {
  ime,
  prezime,
  godina,
};

console.log(osoba);
console.log(osoba1);
