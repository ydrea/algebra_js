"use strict";

/* 
Zadatak 1

Izračunaj ITM (Indeks tjelesne mase) Marka i Josipa, ispiši ih i provjeri boolean vrijednost true/false 
da li je Markov ItM veći od Josipovog.
Ovo se može napraviti koristeći samo matematičke operatore i varijable.

  računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2)
  test podaci 1 Marko je težak 78 kg i visok 1.69, Josip 92 kg i 1.95
  test podaci 2 Marko je težak 95 kg i visok 1.88,  Josip 85 kg i 1.76
*/

const masaMarko = 78;
const visinaMarko = 1.69;

const masaJosip = 92;
const visinaJosip = 1.95;

const itmMarko = masaMarko / visinaMarko ** 2;
const itmJosip = masaJosip / visinaJosip ** 2;

console.log(itmMarko, itmJosip);

if (itmMarko >= itmJosip) {
  console.log(`Markov ITM od ${itmMarko} je veći od Josipovog ITM-a od ${itmJosip}`);
} else {
  console.log(`Josipov ITM od ${itmJosip} je veći od Markovog ITM-a od ${itmMarko}`);
}

/* 
Napraviti 2 varijable (1 sa random brojem 1-100, druga 1-50).
Napravi varijable koje će sadržavati sumu i razliku ta 2 broja
 i to zapiši putem template literala u varijable suma i razlika.
*/

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

console.log(x, y);

const a = x + y;
const b = x - y;

const suma = `${x} + ${y} = ${a}`;
const razlika = `${x} - ${y} = ${b}`;

console.log(suma, razlika);

/* 
Logical operators zadatak (koristi Boolean vrijednosti) - zamislimo da želimo živjeti u zemlji u 
kojoj se priča engleski, koja ima manje od 50 m stanovnika i koja nije otok.
Ideja je da napravimo provjeru da li Hrvatska ispunjava te uvjete i na temelju toga složimo ispis...
S obzirom da Hrvatska ne ispunjava te uvjete dodijeli false vrijednost i na temelju toga složi pozitivan i 
negativan ispis.
Za pozitivan ispiši : "Zemlja u kojoj želite živjeti je Hrvatska". Negativan : "Hrvatska nije za vas.".
Koristite logičke operatore i if else petlju za rješenje zadatka.
*/

const engleski = true;
const manjeOd50 = true;
const nijeOtok = true;
const hrvatska = false;

const uvjeti = engleski && manjeOd50 && nijeOtok;
const zelje = hrvatska && manjeOd50 && nijeOtok && engleski;

if (uvjeti === zelje) {
  console.log("Zemlja u kojoj želite živjeti je Hrvatska");
} else {
  console.log("Hrvatska nije za vas.");
}

/* 
Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi varijablu racun za
tu potrebu. Nije dozvoljeno koristiti if else, nego ternary (trojni) operator.

ispiši string u konzolu sa iznosom računa, i finalnim izračunom (račun + napojnica)

test data:

račun 275
račun 40
račun 430
*/

const racun = 275;

const tip = racun >= 50 && racun >= 300 ? `${racun * 0.15}` : `${racun * 0.2}`;

console.log(tip, typeof tip);

const ukupno = racun + Number(tip);
console.log(ukupno);

console.log(`Račun je ${racun}, napojnica je ${tip} i ukupno to iznosi ${ukupno}`);

/* 
Recimo da imamo 7900 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (3840 lovaca), 
koliko iz Istre (brojLovaca2 = 500 lovaca) i koliko iz Dalmacije (brojLovaca3 = 1440 lovaca)
*/

function postotak(brojLovaca) {
  return Math.round((brojLovaca / 7900) * 100);
}

const brojLovaca1 = postotak(3840);
const brojLovaca2 = postotak(500);
const brojLovaca3 = postotak(1440);

console.log(brojLovaca1, brojLovaca2, brojLovaca3);
