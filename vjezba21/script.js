"use strict";

/* 
FOREACH metoda.
forEach metoda prolazi listu član po član (s time da svaki član ulazi kao parametar) i na njemu radi određenu izmjenu.
Može adaptirati listu i spremiti izmjenjen članove u neku novu listu koju složimo za input tih adaptiranih članova.
*/

let brojevi = [10, 20, 30, 40, 50];

brojevi.forEach(function (vrijednost_clana_liste, index_clana_liste) {
  console.log(vrijednost_clana_liste, index_clana_liste);
});

// Idemo ovo napisati pomoću arrow funkcije

brojevi.forEach((broj, index, lista) => {
  console.log(broj, index, lista);
});

function popisBrojeva(broj) {
  console.log(broj);
}

brojevi.forEach(popisBrojeva);

// konrektan primjer

const useri = [
  {
    ime: "Marko",
    prezime: "Markić",
    godine: 40,
  },
  {
    ime: "Ivana",
    prezime: "Ivić",
    godine: 30,
  },
  {
    ime: "Ana",
    prezime: "Anić",
    godine: 20,
  },
];

// Kako bi koristeći forEach metodu ispisali imena iz naše liste usera?

const rez = useri.forEach((user) => {
  console.log(user.ime);
});

/* FILTER metoda
Za razliku od forEach metode, filter metoda nam vraća određenu vrijednost. Ta vrijednost bude kopija (lista) dijela
liste filtrirana na način da uključuje u tu novu listu samo one elemente koji zadovolje određene tražene parametre
filtera... */

const rijeci = ["prozor", "apartman", "autocesta", "skijalište", "obala", "stol", "harmonika"];

// koristeći filter metodu htjeli bi iz ove liste spremiti u novu listu samo one koji imaju više od 6 slova

const rezultat = rijeci.filter((rijec) => rijec.length > 6);

console.log(rijeci);
console.log(rezultat);

// praktični primjer

brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// koristeći filter metodu provjerite da li je član liste djeljiv sa 2, ako je spremite ga u listu parniBrojevi
// hint : možete koristiti modulo operator za ovo...

const parniBrojevi = brojevi.filter((br) => br % 2 === 0);
console.log(parniBrojevi);

// Kako bi ovo isto napravili forEach metodom?

let parniBrojevi2 = [];

brojevi.forEach((br) => {
  if (br % 2 === 0) parniBrojevi2.push(br);
});

console.log(parniBrojevi2);

let parniBrojevi3 = [];

// for petlja

for (let br of brojevi) {
  if (br % 2 === 0) parniBrojevi3.push(br);
}

console.log(parniBrojevi3);

// iz liste objekata auta koristeći filter ili forEach metodu spremite limuzine u novu listu objekata

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", god: 2014 },
  { ime: "Audi", kategorija: "karavan", god: 2020 },
  { ime: "Ford", kategorija: "SUV", god: 2016 },
  { ime: "Mazda", kategorija: "coupe", god: 2019 },
  { ime: "Peugeot", kategorija: "limuzina", god: 2012 },
  { ime: "RangeRover", kategorija: "Jeep", god: 2009 },
];

const filterAuti = auti.filter((auto) => auto.kategorija === "limuzina");

console.log(filterAuti);

/* MAP metoda
Map metoda kreira novu listu populiranu rezultatima koje nam proizvede funkcija na svakom elementu liste.
Drugim riječima na postojećoj listi ćemo odraditi određene operacije i kao rezultat ćemo dobiti novu listu. */

brojevi = [1, 5, 9, 16];

// želim koristeći map metodu napraviti novu listu, koja će uzeti članove liste brojeva i pomnožiti svakog sa 2

const umnozak = brojevi.map((broj, index) => `Broj ${broj * 2} na mjestu ${index + 1}`);
console.log(umnozak);

/* idemo iz postojeće liste objekata auti, izvući samo imena i kategorije auta koristeći map metodu.
Probajte ovo doraditi na način da za treću vrijednost umjesto godProizvodnje, ubacite starost auta.
*/

const markaKategorija = auti.map((auto) => {
  return {
    ime: auto.ime,
    kategorija: auto.kategorija,
    starost: 2024 - auto.god,
  };
});

console.log(markaKategorija);

// POVEZIVANJE METODA LISTI (Chaining methods)

// primjer - proći ćemo listu brojeva i prvo ćemo napravit korijen od broja a onda ćemo ga pomnožiti sa 2

const duplo = brojevi.map((broj) => Math.sqrt(broj)).map((broj) => broj * 2);
console.log(duplo);

// primjer - kombiniranje različitih metoda u lanac - izvući ćemo sve parne brojeve i pomnožiti ih sa 2

brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parni = brojevi.filter((broj) => broj % 2 === 0).map((broj) => broj * 2);

// koristeći obične funkcije (radi lakšeg shvaćanja)

const parni2 = brojevi
  .filter(function (broj) {
    return broj % 2 === 0;
  })
  .map(function (broj) {
    return broj * 2;
  });
console.log(parni);

/* 
REDUCER metoda
Reduce metoda izvršava tzv. "reducer" callback funkciju kojoj je svrha da sve članove liste svede i zapiše
u jednu vrijednost. Kako bi to lakše shvatili možemo uzeti za primjer izračun košarice proizvoda u web shopu.
*/

let kosarica = [20, 40, 60, 5, 15];

/* Osim vrijednosti listi brojeva, moramo definirati i početnu vrijednost.
 Krećemo sa definiranjem reduce metode na način da za parametre uzima prijašnju vrijednost i vrijednost člana
 liste na kojem se nalazimo u tom trenutku. 
 Prilikom pokretanja i kada se nalazimo na prvom članu liste, prijašnja vrijednost parametra će biti početna
 vrijednost koju definiramo na kraju same metode a sadašnja vrijednost je vrijednost člana liste na prvom mjestu.
 Sa svakim idućim članom liste prijašnja vrijednost je rezultat zbrajanja a sadašnja vrijednost je vrijednost
 trenutno odabranog člana liste...*/

const pocetnaVrijednost = 0;

const suma = kosarica.reduce(function (prijasnjaVrijednost, sadasnjaVrijednost) {
  return prijasnjaVrijednost + sadasnjaVrijednost;
}, pocetnaVrijednost);

console.log(suma);

// kao arrow funkciju
const suma2 = kosarica.reduce((prije, sad) => prije + sad, 0);

// još jedan primjer sa kosaricom

kosarica = [
  { id: 1, proizvod: "kruh", cijena: 1.8 },
  { id: 2, proizvod: "mlijeko", cijena: 2 },
  { id: 3, proizvod: "salama", cijena: 9 },
  { id: 4, proizvod: "sapun", cijena: 7 },
  { id: 5, proizvod: "čips", cijena: 3 },
];

// Koristeći reduce metodu, izračunajte ukupni iznos košarice (zbrojite cijene)
const suma1 = kosarica.reduce((prije, sad) => prije + sad.cijena, 0);
console.log(suma1);
