/* IF izjave (statement) - provjerava istinitost neke tvrdnje i u slučaju da je tvrdnja istinita ispisuje blok
koji dolazi nakon zagrade sa provjerom istinitosti... */

if (true) {
  console.log("Funkcioniram na istinitu tvrdnju");
}

if (false) {
  console.log("Ja se neću ispisati jer je tvrdnja neistina");
}

// Primjer

const godina = 19;
const godina2 = 15;
const punoljetan = godina >= 18;

if (punoljetan) {
  console.log("Možete glasati");
}

if (19 >= 18) {
  console.log("Možete glasati");
}

if (godina >= 18) {
  console.log("Možete glasati");
}

if (godina2 >= 18) {
  console.log("Možete glasati");
} else {
  console.log("Ne možete glasati");
}

// Primjer 2

/* 
const i let su block scoped varijable (u prijevodu ograničene su unutar bloka) i neće biti dostupne van bloka (
na globalnom scopeu). var nije block scoped varijabla i ona će biti dostupna svuda.
*/

/* const godRodjenja = 1999;

if (godRodjenja >= 2000) {
  var stoljece = 21;
} else {
  var stoljece = 20;
}

console.log(stoljece); */

// Rješenje kako koristiti const i let umjesto var načina definiranja varijable za primjer 2

const godRodjenja = 1999;
let stoljece;

if (godRodjenja >= 2000) {
  stoljece = 21;
} else {
  stoljece = 20;
}

console.log(stoljece);

// Strict i Loose provjera

/* Strict provjera će gledati da li je vrijednost varijable ista, ali također i da li je vrsta varijable ista.
(Strict provjera se piše sa === jednakosti)
Loose provjera će gledati samo da li je vrijednost varijable ista (Loose provjera se piše sa == znaka jednakosti()... */

if ("19" === 19) {
  console.log("Ako je ovo ispisano, onda je loose provjera točna");
} else {
  console.log("Strict provjera je rekla da ovo nije točno.");
}

// Primjer čemu sve mogu biti korisni operatori jednakosti

const broj = Number(prompt("Koji ti je najdraži broj?"));
console.log(typeof broj, broj);

if (broj === 7) {
  console.log(`broj ${broj} je baš super`);
} else if (broj === 14) {
  console.log(`broj ${broj} je isto super`);
} else if (broj === 21) {
  console.log(`nije ni ${broj} loš broj`);
} else {
  console.log("nista odabrali dobar broj");
}

// ovo je znak različitosti, čitamo ga kao usporedbu ako je broj različit od 23 onda je ovo istina i ispisat će clg
if (broj !== 23) {
  console.log("Zašto nisi upisao 23");
}
