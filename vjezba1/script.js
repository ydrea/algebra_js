console.log("Hello World");

console.log(5 + 10 + 15);

/* Const način definiranja varijable zahtijeva deklaraciju i inicijalizaciju u istom trenutku. Ne dozvoljava promjenu deklaracije i nove
inicijalizacije varijable. */
const js = "Učimo varijable sa constom";
console.log(js);

/* Let način definiranja varijable dozvoljava deklaraciju bez inicijalizacije. Ali ne dozvoljava ponovnu deklaraciju varijable.
Dozvoljeno je naknadno mijenjanje vrijednosti varijable. */
let js2;
console.log(js2);

js2 = "Učimo varijable sa letom";
console.log(js2);

/* Var način definiranja varijable dozvoljava deklaraciju bez inicijalizacije, ali i dozvoljava ponovnu deklaraciju.
Dozvoljeno je naknadno mijenjanje vrijednosti varijable kao i kod let-a, no također sama deklaracija će biti "hoistana", što znači
"dignuta" na početak skripte, ali bez njezine vrijednosti. */
console.log(js3);
var js3;
var js3 = "Učimo varijable sa varom";
console.log(js3);

/* Imena varijabli ne smiju početi sa brojem, ali mogu u nastavku sadržavati broj. Imena varijabli mogu početi sa znakom, podcrtom i $. */

// Koristit ćemo tzv. CamelCase način definiranja imena varijable.
const imePrezime = "Davor Horvat";

// Vrste podataka u JS-i

// 1. Stringovi - tekstualna sekvenca koja koristi niz znakova, uvijek stavljate kvačice za otvaranje/zatvaranje stringa...

const _string = "Ovo je string";

// 2. Brojevi - koristimo naravno i decimale i cijele brojeve...

const _brojevi = 5;

// 3. Boolean - može biti samo true ili false...

const _boolean = true;

// 4. Undefined - obično označava vrijednost varijable koja još nije inicijalizirana

let _undefined;

// 5. Null - obično dodjeljujemo prilikom inicijalizacije varijable, kada ne želimo postaviti vrijednost varijable

// Pomoću specijalnog operatera typeof možemo provjeriti tip vrijednosti
console.log(typeof 5);
console.log(typeof "Ovo je string");
console.log(typeof imePrezime);

// MATEMATIČKI OPERATORI - npr. zbranjanje, oduzimanje, množenje, djeljenje itd...

const starost = 2024;

const godStarostiJosip = starost - 2001;
const godStarostiMaja = starost - 2013;

console.log(godStarostiJosip * 2, godStarostiMaja / 2);

console.log(godStarostiJosip, godStarostiMaja);

// Modulo - ostatak od djeljenja

console.log(8 % 3);

// Eksponent - ako želimo potencirati vrijednost

console.log(5 ** 2);

// Konkatenacija stringova koristi "+" matematički operater za spajanje stringova

const ime = "Marko";
const prezime = "Markić";

console.log(ime + " " + prezime);

// USPOREDNI OPERATORI - <, >, <=, >=

console.log(godStarostiJosip > godStarostiMaja);
console.log(godStarostiJosip >= 18);
console.log(godStarostiMaja >= 18);

/* Redoslijed izvođenja matematički i usporednih operatera */

console.log(starost - 2000 > starost - 1999);

let x, y;

/* Zbog koeficijenta važnosti izvođenja operatera, prvo će se izvesti oduzimanje, nakon toga sa desna na lijevo znakovi jednakosti.
Link na tablicu : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence */

x = y = 25 - 10 - 5;

console.log(x, y);

// Primjer konkatenacije

const naziv = "Ivan";
const posao = "Vatrogasac";
const godRodjenja = 2005;
const godina = 2024;

const ispis =
  "Ja sam " +
  naziv +
  ", " +
  posao +
  ", rođen " +
  godRodjenja +
  ". Trenutno je " +
  godina +
  " godina.";

console.log(ispis);

/* Template literal način pisanja (uveden sa ES6 verzijom) nam omogućavaju lakše ispise ovakvih konkatenacija.
Template literale otvaramo/zatvaramo tzv. backtikovima.
Znakom $ i vitičastim zagradama pozivamo vrijednost varijable unutar template literala. */

const ispis2 = `Ja sam ${naziv}, ${posao}, rođen ${godRodjenja}. Trenutno je ${godina} godina.`;

console.log(ispis2);
