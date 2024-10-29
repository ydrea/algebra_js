"use strict";

/* Prvo definiramo/deklariramo funkciju i njen kod */
function logger() {
  console.log("Hello World");
}

/* Nakon toga, moramo pozvati/pokrenuti funkciju, kako bi se njen kod izvršio */
logger();
logger();
logger();

// "NutriBullet" primjer funkcije

/* Možemo pokrenuti funkciju i prije nego smo ju definirali, jer se funkcije "hoistaju" na vrh skripte (početak) 
kako bi bilo dostupne bilo gdje u vašem globalnom scope pozivu..*/
nutriBullet(1, 3);

function nutriBullet(jabuke, narance) {
  console.log(jabuke, narance);
  const sok = `Sok čini ${jabuke} jabuka i ${narance} naranči.`;
  var primjer = 10;
  return sok; // return specificira vrijednost koju ova funkcija vraća i završava izvršavanje funkcije
  console.log("konzola neće ispisati ovaj console log jer se nalazi nakon returna");
}

/* Pomoću parametara funkcije prilikom pokretanja funkcije, definiramo vrijednosti argumenata u definiciji 
funkcije (jabuke i narance). Ovo nam omogućava pozivanje iste funkcije nebrojeno puta sa različitim parametrima.*/
nutriBullet(2, 4);
nutriBullet(4, 5);

/* Za razliku od definiranja funkcije, funkciju možemo također napraviti kao izraz funkcije, drugim riječima,
možemo joj spremiti rezultat izvođenja u varijablu.  */

const sok = nutriBullet(5, 10);
console.log(sok);

// Primjeri funkcija

function izracunGod(godRodjenja) {
  const dob = 2024 - godRodjenja;
  return dob;
}

const ivan = izracunGod(2004);
const marija = izracunGod(2001);

console.log(ivan, marija);
