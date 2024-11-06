"use strict";

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Kako ispisati ovo isto sa while petljom?

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

/* Primjer zašto postoji while petlja u odnosu na for petlju.
Kada ne znamo kada ćemo prekinuti izvođenje, nego kada znamo samo uvjet koji se mora ispuniti da bi izvođenje
petlje završilo. */

let kocka = Math.floor(Math.random() * 6 + 1); // početna vrijednost varijable kocka

while (kocka !== 6) {
  // provjera vrijednosti varijable kocka
  console.log(`Dobio si broj ${kocka}`);

  kocka = Math.floor(Math.random() * 6 + 1); // izmjena vrijednosti varijable kocka nakon ispisa
  if (kocka === 6) {
    // kada vrijednost kocke bude 6, onda se izvršava ovaj if i završava izvođenje while petlje
    console.log(`Dobio si broj ${kocka}`);
  }
}
