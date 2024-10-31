"use strict";

// DEKONSTRUIRANJE

// Dekonstruiranje liste
const brojevi = [1, 2, 3, 4];

// Izvlačimo prve 2 vrijednosti iz liste u varijable num1 i num2 bez da mijenjamo listu brojeva
const [num1, num2] = brojevi;

console.log(num1, num2);

// Ovdje uz prve 2 vrijednosti od ostataka liste, kreiramo novu listu bez da mijenjamo listu brojeva
const [num3, num4, ...ostatakListe] = brojevi;
console.log(num3, num4, ostatakListe);

// Preskakanje određenih članova liste prilikom dekonstruiranja
const [num5, , num6] = brojevi;
console.log(num5, num6);

// Dekonstruiranje objekta

const todo = {
  id: 1,
  zadatak: "kupi kruh",
  adresa: {
    ulica: "Trg Davora Horvata",
    grad: "Zagreb",
  },
};

// Jednostavan način za izvući vrijednost iz objekta i zapisati u varijablu
/* const id = todo.id;
console.log(id); */

// Primjer sa dekonstruiranjem nam je dobar kada želimo više toga izvući iz objekta odjednom
/* const { id, zadatak, adresa } = todo;

console.log(id, zadatak, adresa); */

// Dohvaćanje vrijednosti iz podobjekta dekonstruiranjem
/* const {
  id,
  zadatak,
  adresa: { ulica },
} = todo;

console.log(id, zadatak, ulica); */

// Dohvaćanje vrijednosti iz podobjekta ali sa preimenovanjem prilikom dekonstrukcije
const {
  id: todoId,
  zadatak: todoZadatak,
  adresa: { ulica: todoUlica },
} = todo;

console.log(todoId, todoZadatak, todoUlica);
