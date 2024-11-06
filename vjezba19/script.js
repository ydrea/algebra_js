"use strict";

const godine = [2002, 2001, 2006, 2012];
const starost = [];

// koristeći for petlju, izračunajte i spremite starost (2024) iz liste godina u listu starost

for (let i = 0; i < godine.length; i++) {
  starost[i] = 2024 - godine[i];
}

console.log(starost);

// CONTINUE i BREAK petlje

/* Break petlju ćemo ovdje iskoristiti da bi napravili prekid izvršenja petlje ako dođe do toga da se neki uvjet
ispuni. U ovoj varijanti ćemo biti jednostavni pa ćemo napraviti provjeru kada je i === 10. Ako se taj uvjet
ispuni, ispisat ćemo poruku sa breakom završiti prisilno izvođenje petlje. */

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("Petlja je završila jer smo naletili na broj 10!");
    break;
  }
  console.log(i);
}

/* Continue petlja će prekinuti trenutnu iteraciju petlje na način da će automatski nakon što naletimo na continue
naredbu, krenuti sa izvođenjem iduće iteracije petlje. Kod koji dolazi nakon continue naredbe iz trenutne
iteracije se neće izvršiti. (kod koji dolazi nakon continue;)*/
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("umjesto 10, ispiši deset");
    continue;
  }
  console.log(i);
}

const userLista = ["Ana", "Anić", 2020, "Dizajnerica", ["Ivana", "Luka", "Marija"]];

/* napravite for petlju gdje ćemo sa if provjerom gledati da li je trenutni član liste nešto što nije string
i sa continue preskočiti ispis tog polja u listi. Ispišite na kraju člana liste i vrstu podatka koji se krije
na tom mjestu u listi.
*/

for (let obj of userLista) {
  if (typeof obj !== "string") {
    continue;
  }
  console.log(`${obj} ${typeof obj}`);
}

/* Napravite for petlju gdje ćemo sa if provjerom (break) zaustaviti izvođenje for petlje ako naletimo na broj. */
for (let obj of userLista) {
  if (typeof obj === "number") {
    break;
  }
  console.log(`${obj} ${typeof obj}`);
}

/* Koristeći for petlju ispišite sve članove liste userLista ali krećući od zadnjeg prema prvom članu liste. */
for (let i = userLista.length - 1; i >= 0; i--) {
  console.log(userLista[i]);
}
