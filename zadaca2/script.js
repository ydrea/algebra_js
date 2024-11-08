"use strict";

/* Zadatak 1

Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10,
Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače
i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak
i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`* */

const postotakSvijeta = function (populacija) {
  return Math.floor((populacija / 10000) * 100);
};

const opisZemlje = function (zemlja, populacija) {
  const postotak = postotakSvijeta(populacija);
  const opis = `${zemlja} ima ${populacija} tenisača što je oko ${postotak} posto igrača u svijetu.`;
  console.log(opis);
};

opisZemlje("Hrvatska", 10);
opisZemlje("Kina", 3441);
opisZemlje("USA", 332);

/* 
Zadatak 2

Imamo 2 tima, koji su igrali međusobno 6 puta. 
Želimo izračunati prosjek golova u svih 6 utakmica za svaku ekipu koristeći arrow funkciju. 
Tim pobjeđuje jedino ako ima duplo više golova od drugog tima u odnosu prosječnih golova.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka. 
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa 
sa ispisom prosjeka golova obje ekipe npr. Real je u prosjeku zabio 4 gola, a Barcelona 1.
Možete iskoristi if-else petlju kako bi složili ispis.

primjer 1: 
Barca : 2, 3, 1, 3, 4, 7
Real : 1, 4, 1, 5, 0, 5
primjer 2: 
1, 2, 1, 1, 3, 5
Real : 1, 1, 3, 0, 2, 4

hint: kako bi provjerili da li je jedan tim pobijedio drugi sa barem duplo bodova, 
možete napraviti provjeru koristeći formulu A >= B * 2. Primjenite to na prosječni rezultat
*/

const prosjek = (golova) => {
  let tekmi = 6;
  let zbroj = golova.reduce((i, value) => i + value, 0);
  console.log(zbroj);
  return zbroj / tekmi;
};

let Barca1 = prosjek([1, 2, 1, 1, 3, 5]);
let Real1 = prosjek([1, 1, 1, 0, 2, 1]);
console.log(Real1, Barca1);

const winner = () => {
  if (Real1 >= Barca1 * 2) {
    return `real ${Real1}`;
  } else if (Barca1 >= Real1 * 2) {
    return `barca ${Barca1}`;
  } else {
    return "no winners";
  }
};
console.log(winner());

const barca = [1, 2, 1, 1, 3, 5];
const real = [1, 1, 1, 0, 2, 1];

const average = (rezultati) => {
  return Math.round(rezultati.reduce((sum, num) => sum + num, 0) / rezultati.length);
};

const barcaAverage = average(barca); // 3.333
const realAverage = average(real); //2.66

if (barcaAverage >= realAverage * 2) {
  console.log("barca is a winner");
} else if (realAverage >= barcaAverage * 2) {
  console.log("real is a winner");
} else {
  console.log("izjednaceno");
}

/* 
Zadatak 3

Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.

Napravite Listu koja će koristiti testne podatke dolje.

Napravite listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje ste
dobili koristeći funkciju za izračun napojnica (ona prva gore).

Napravi listu sa ukupnim iznosima, znači račun + napojnica (total).

Tip : svaka lista treba vrijednosti na svakom polju i svaka vrijednost može biti return vrijednost funkcije.
Ne možete samo nazvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti napojnice u posebne
varijable prvo nego direktno u novu listu

testni podaci:

račun 125
račun 555
račun 44
*/

const racuni = [125, 555, 44];

const napojnica = function (racun) {
  return racun >= 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;
};

let x = racuni.map((racun) => napojnica(racun));
console.log(x);

const napojnice = [napojnica(racuni[0]), napojnica(racuni[1]), napojnica(racuni[2])];
console.log(napojnice);

const total = [racuni[0] + napojnice[0], racuni[1] + napojnice[1], racuni[2] + napojnice[2]];
console.log(total);

/* 
Zadatak 4

Kreiraj objekt koji se zova moja zemlja i definiraj vrijednosti za ključeve - zemlja, glavniGrad, jezik, populacija i 
dodaj im vrijednosti koje želiš. Nakon toga ispiši u konzoli te podatke kao rečenicu : "X ima X stanovnika, glavni
grad je X, govori se X jezik"...

Nakon toga koristeći dot notaciju povećajte populaciju za 1 i onda koristeći bracket notaciju smanjite za 1.

Kreirajte kopiju objekta koristeći spread operator.

Kreirajte kopiju objekta koristeći structuredClone metodu.
*/

const mojaZemlja = {
  zemlja: "Hrvatska",
  glavniGrad: "Zagreb",
  populacija: 3.8,
  jezik: "Hrv",
};

// dekonstruiranje objekta u varijable radi lakšeg ispisa
const { zemlja, populacija, glavniGrad, jezik } = mojaZemlja;

console.log(
  `${zemlja} ima ${populacija} stanovika, glavni grad je ${glavniGrad}, govori se ${jezik} jezik.`
);

mojaZemlja.populacija += 1;
console.log(mojaZemlja.populacija);
mojaZemlja["populacija"] -= 1;
console.log(mojaZemlja.populacija);

const kopijaSpread = { ...mojaZemlja };
const kopijaStructured = structuredClone(mojaZemlja);

/* 
adatak 5

Imamo listu album koja sadrži objekt. Napravi novi objekt (vama po izboru kako će izgledati)
i dodaj ga na u listu album kao drugog člana liste (naravno isto kao objekt).

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];
*/

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];

const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,
  format: ["LP"],
};

album.push(noviAlbum);

console.log(album);
