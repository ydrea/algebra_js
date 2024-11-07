"use strict";

/* Problem : termometar nam svakih sat vremena zapisuje temperaturu u listu, s time da se može dogoditi da
umjesto brojke, imamo nekakav error na senzoru i ne dobijem broj. Nas zanima izračun amplitude temperatura (znači
razlika između najviše i najniže temperature u danu). */

// Pitanja na koja treba smisliti odgovor : kako izračunati min/max? kako izgleda error i što napraviti s njim?

const temperatura1 = ["error", -2, -1, 2, 4, "error", 6, 9, 12, 11, 10, 9, 7];
const temperatura2 = [3, 4, 7, "error", 9, 10, 15, 13, 12, 6];
const spojenaLista = temperatura1.concat(temperatura2);
spojenaLista.sort();
console.log(spojenaLista);

const calcAmplituda = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
    console.log(max);
    console.log(min);
  }
  console.log(max);
  console.log(min);
};

calcAmplituda(spojenaLista);
