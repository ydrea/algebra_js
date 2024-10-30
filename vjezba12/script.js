"use strict";

// Napravite nekakvu listu prijatelja (barem 3 prijatelja)
const prijatelji = ["petar", "matej", "nino"];

// dodajte novog člana liste na početku i na kraju

prijatelji.unshift("sanja");
prijatelji.push("franka");

console.log(prijatelji);

// uklonite prvog i zadnjeg člana liste prijatelja
prijatelji.shift();
prijatelji.pop();

console.log(prijatelji);

// indexOf metoda nam kaže na kojem mjestu u listi se nalazi traženi član
console.log(prijatelji.indexOf("matej"));
console.log(prijatelji.indexOf("sonja"));

// includes metoda će nam napraviti Boolean provjeru da li traženi član liste uopće postoji
console.log(prijatelji.includes("matej"));
console.log(prijatelji.includes("sonja"));

// često služe za testiranja listi
if (prijatelji.includes("petar")) {
  console.log("Imate prijatelja po imenu petar");
}

// NAČINI SPAJANJA 2 LISTE

const voce = ["jabuke", "banane", "trešnje"];
const bobice = ["borovnice", "kupine", "maline"];

/* voce.push(bobice);
console.log(voce);
// način kako dohvatiti člana podliste iz liste
console.log(voce[3][1]); */

// Konkateniranje listi je prvi način spajanja liste. Kreiranjem nove varijable i spremanje obje liste u tu novu listu
let x = voce.concat(bobice);
console.log(x);

// Spread operator služi za expandiranje listi/objekata/stringova u jednu varijablu

let y = [...voce, ...bobice];
console.log(y);

// Metoda koja nam služi za uklanjanje podlisti, tj. slaganje svih podlisti u listu istog ranga - FLAT metoda

const lista = [1, 2, [3, 4], 5, [6, 7]];

const flet = lista.flat();
console.log(flet);

// Statične metode za liste

// provjera da li je nešto lista

let z;

z = Array.isArray(voce);
console.log(z);

// slaganje liste pojedinačnih članova od stringa
z = Array.from("12345");

console.log(z);

// slaganje liste od varijabli
const a = 1;
const b = 2;
const c = 3;

z = Array.of(a, b, c);
console.log(z);
