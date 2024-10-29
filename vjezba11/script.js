"use strict";

const frend1 = "Petar";
const frend2 = "Stjepan";
const frend3 = "Luka";

// Literalni način definiranja liste
const prijatelji = ["Petar", "Stjepan", "Luka"];

// Array objekt za kreiranje liste
const godine = new Array(2000, 2001, 2003);

console.log(prijatelji, godine);

// Kada želimo dohvatiti određenog člana liste, onda pozivamo listu i unutar uglatih zagrada pišemo index člana liste

console.log(prijatelji[1]);

// Kada želimo saznati koliko članova liste postoji

console.log(prijatelji.length);

// dohvatite i ispišite zadnjeg člana liste prijatelja (na način da npr. ne znate koliko članova liste ima)
console.log(prijatelji[prijatelji.length - 1]);

// Recimo da želimo zamijeniti jednog od prijatelja za nekog drugog
prijatelji[1] = "Nikola";
console.log(prijatelji);

// Jednostavne metode listi

prijatelji.unshift("Ana"); // unshift metoda dodaje novog člana liste na početak liste
prijatelji.push("Marijana"); // push metoda dodaje novog člana na kraj liste
console.log(prijatelji);
prijatelji.shift(); // shift metoda briše prvog člana liste
prijatelji.pop(); // pop metoda briše zadnjeg člana liste
console.log(prijatelji);

// Jednostavne metode za brojevne liste

let x;

x = godine.includes(2000); // Boolean provjera da li u listi imamo određenu vrijednost
x = godine.indexOf(2000); // indexOf provjera će nam reći na kojem mjestu u listi se nalazi traženi broj
x = godine.slice(1); // slice metoda će nam prikazati samo dio liste
x = godine.slice(0, 1); // slice metoda može odrezati od/do dio liste
/* x = godine.splice(1, 2); */ // splice metoda će podijeliti postojeću listu na 2 dijela

console.log(x, godine);

// Primjer - kako pomoću funkcije izračunati starost prijatelja?

const izracunGod = (godRodjenja) => 2024 - godRodjenja;

const dob = [izracunGod(godine[0]), izracunGod(godine[1]), izracunGod(godine[2])];

console.log(dob);
