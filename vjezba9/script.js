"use strict";

/* Ako return funkcije automatski zapišemo u varijablu prilikom definiranja, onda se sama funkcija i njeno
izvođenje ne može hoistat. S obzirom da Arrow funkcija ni ne može biti napisana drugačije, ona se nikako za 
razliku od anonimne funkcije koja se hoista... */

// primjer ANONIMNE funkcije

console.log(primjer(2015));

function primjer(godRodjenja) {
  return 2024 - godRodjenja;
}

// primjer DEKLARIRANE (NAMED) funkcije

const godRodjenja = function (godRodjenja) {
  return 2024 - godRodjenja;
};

console.log(godRodjenja(2014));

/* ARROW funkcija - to je i dalje izraz funkcije, ali možemo ju brže napisati.
Arrow funkcije se događaju implicitno za razliku od normalne funkcije gdje moramo
eksplicitno definirati return funkcije.
*/

// ime funkcije definirano const-om = () => return
const godRodjenja2 = (godRodjenja) => 2024 - godRodjenja;
console.log(godRodjenja2(2010));

// primjer složenije arrow funkcije

const godDoMirovine = (godRodjenja, imePrezime) => {
  const godine = 2024 - godRodjenja;
  const mirovina = 65 - godine;
  if (mirovina > 0) {
    console.log(`${imePrezime} će se umiroviti za ${mirovina} godina`);
    return mirovina;
  } else {
    return -1;
  }
};

godDoMirovine(1998, "Davor Horvat");
godDoMirovine(1950, "Ivan Ivić");

console.log(godDoMirovine(1950, "Ivan Ivić"));

// Lokalni i Funkcijski poziv varijable

const x = 50;

/* Varijablu koju tražimo unutar funkcije, sama funkcija će prvo pregledati funkcijski kod i ako nađe traženu
varijablu, upotrijebit će tu varijablu (njezinu vrijednost). Tek ako ne nađe traženu varijablu unutar funkcije
onda će potražiti tu varijablu na globalnom scopeu (van funkcije) */
function lokalna() {
  const y = 30;
  const x = 20;
  console.log(x, y);
}

lokalna();

// Primjer poziva funkcije unutar druge funkcije

function komadiVoca(voce) {
  return voce * 4;
}

function nutriBullet(jabuke, narance) {
  debugger;
  const kriskeJabuke = komadiVoca(jabuke);
  const kriskeNarance = komadiVoca(narance);
  const sok = `Sok od ${kriskeJabuke} kriški jabuka i ${kriskeNarance} kriški naranči...`;
  return sok;
}

console.log(nutriBullet(2, 4));
