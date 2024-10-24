// STRING metode i vrijednosti (methods and properties)

const x = "Hello World";

// length je property/vrijednost
console.log(x.length);

console.log(x.toLowerCase());

console.log(x);

// MATEMATIČKE METODE sa brojevima i varijablama

let y;

// korijen
y = Math.sqrt(16);

// absolutne vrijednosti
y = Math.abs(-5);

// zaokruživanje vrijednosti
y = Math.round(4.5);

// prisilno zaokruživanje na gore
y = Math.ceil(4.1);

// prisilno zaokruživanje na dolje
y = Math.floor(4.9);

// uklanjanje decimalnih vrijednosti
y = Math.trunc(4.6);

// definiranje vrijednosti na npr. 2 decimale

let broj = 112.54285042542;
y = broj.toFixed(2);

// najmanji broj iz niza brojeva
y = Math.min(4, 6, 2, 7);

// najveći broj iz niza brojeva
y = Math.max(4, 6, 9, 10);

// random broj
y = Math.random();

y = Math.random() * 10 + 1;

y = Math.floor(Math.random() * 10 + 1);
y = Math.trunc(Math.random() * 10 + 1);

console.log(y);

// KONVERZIJA PODATAKA - TYPE CONVERSION

let inputGodina = "2000";

inputGodina = parseInt(inputGodina); // parseInt metoda nam služi za prebacivanje stringa u broj
inputGodina = Number(inputGodina); // pomoću Number objekta možemo ovo pretvoriti u broj
inputGodina = +inputGodina; // ovo će isto pretvoriti string u broj

inputGodina = String(inputGodina); // String objektom ćemo pretvoriti broj u string

console.log(typeof inputGodina, inputGodina + 18);

// Recimo da imamo decimalni broj u stringu
let decBroj = "10.5";
decBroj = parseInt(decBroj); // parseInt metoda će zaokružiti decimalni broj na niže
decBroj = parseFloat("11.2"); // parseFloat metoda će spremiti kompletan decimalni broj

console.log(decBroj);

console.log(Number("Igor"));
console.log(String(23));

// PRISILNA KONVERZIJA PODATAKA - TYPE COERCION

console.log("Ja imam " + 23 + " godina.");

/* Neki primjeri */
let z;

z = "23" - "10" - 3; // ovo funkcionira jer oduzimanje nije konkatenacija ali će JS pretvoriti ovo u brojeve
z = "23" + "10" + 3; // + znak konkatenacije će ove stringove spojiti, ali će i broj dodati na kraj stringa
z = 5 + true; // true se pretvara prisilnom konverzijom u 1
z = 5 + false; // false se pretvara prisilnom konverzijom u 0
z = 5 + undefined; // u ovoj veseloj varijanti tip podatka je broj, ali je vrijednost NaN...
z = 5 * "25";
z = "25" / 5;
console.log(typeof z, z);

let n = 2 + 3 + "4" + 5 + "6";
console.log(typeof n, n);

n = "10" - "4" - "3" + 2 + "5";
console.log(typeof n, n);
