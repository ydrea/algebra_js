"use strict";

console.log("gol 1 ⚽");
console.log("gol 2 ⚽");
console.log("gol 3 ⚽");
console.log("gol 4 ⚽");
console.log("gol 5 ⚽");
console.log("gol 6 ⚽");
console.log("gol 7 ⚽");
console.log("gol 8 ⚽");
console.log("gol 9 ⚽");
console.log("gol 10 ⚽");

/* Rješavanje ovakvog problema možemo napraviti rekurzijom, tj. ponavljanjem dok se određeni uvjet ne ispuni.
Prvo definiramo uvjet kada se rekurzija završava, a onda definiramo operaciju koja će samu sebe pozivati iznova
dok se uvjet kojeg smo na početku definirali, ne ispuni... */

function golovi(gol) {
  // 1. uvjet
  if (gol > 10) {
    return;
  }
  // 2. rekurzivni poziv - operacija
  else {
    console.log(`gol ${gol} ⚽`);
    return golovi(gol + 1);
  }
}

golovi(1);

/* Ovo isto možemo napisati koristeći for petlju...

For petlja se sastoji od 4 dijela:
1) postavljamo inicijalnu vrijednost
2) postavljamo uvjet koji se mora ispuniti da bi petlja završila, tj. dok ne postane false
3) postavlja se način na koji ćemo mijenjati inicijalnu vrijednost kroz svaku iteraciju petlje dok ne ispunom uvjet
iz druge stavke.
4) kod koji će se izvrtiti prilikom svake iteracije petlje.*/

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++) {
  console.log(`gol ${ponavljanje} ⚽`);
}

// Primjer for petlje kod listi

// Stari način

const predmeti = ["stol", "stolica", "vaza", "stoljnjak"];

for (let i = 0; i < predmeti.length; i++) {
  console.log(predmeti[i]);
}

/* Novi, lijepi, elegantni način - na ovaj načn definiramo da je predmet jedan član liste predmeta i da
prođemo kroz listu predmeta i za svaki predmet napravimo određeni ispis. */

for (const predmet of predmeti) {
  console.log(predmet);
}

const rijec = "Algebra";

for (const slovo of rijec) {
  console.log(slovo);
}

const useri = [
  { id: 1, ime: "Maja" },
  { id: 2, ime: "Marina" },
  { id: 3, ime: "Sanja" },
];

// kako koristeći for petlju ispisati imena iz liste objekata
for (const user of useri) {
  console.log(user.ime);
}

for (const user of Object.values(useri)) {
  console.log(user.ime);
}

// for - in metoda koja nam je malo bolja kod objekata.

const listaBrojeva = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

for (const kljuc in listaBrojeva) {
  console.log(kljuc, listaBrojeva[kljuc]);
}

// in petlja kod liste

const boje = ["crvena", "plava", "žuta", "zelena", "smeđa"];

for (const boja in boje) {
  console.log(boja, boje[boja]);
}

// par praktičnih primjera

const userLista = ["Marko", "Markić", 30, "Kuhar", ["Luka", "Fran", "Stjepan", "Ivona", "Ivana"]];

// Kako bi složili novu listu u kojoj ćemo spremiti tipove podataka postojeće liste "userLista"?

const types = [];

for (let i = 0; i < userLista.length; i++) {
  types[i] = typeof userLista[i];
  // Na ovaj način iz postojeće liste userLista uzimamo samo vrste vrijednosti članova liste i spremamo u types listu
}

console.log(types);

// Ugniježđena for petlja - petlja unutar petlje

for (let i = 1; i <= 3; i++) {
  console.log(`broj ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

const godine = [1993, 2003, 2013, 2023];
const dob = [];

for (let i in godine) {
  dob.push(2024 - godine[i]);
}

console.log(dob);
// Probajte napraviti for petlju koja će koristeći 2024, izračunati starost i spremiti starost u "dob" listu
