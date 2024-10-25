const punoljetan = true;
const vozackaDozvola = true;
const dobarVid = false;

/* I operatori (&&) - će raditi provjeru na način da svi moraju biti true, kako bi zaključak provjere bio true.
Čim je jedan false, zaključak provjere je false. */
if (punoljetan && vozackaDozvola && dobarVid) {
  console.log("Možete voziti");
}

/* Ili operatori (||) - će raditi provjeru na način da je barem jedan true, kako bi zaključak provjere bio true.
Jedino ako su svi false, zaključak provjer će biti false. */
if (punoljetan || vozackaDozvola || dobarVid) {
  console.log("Možete voziti");
}

/* Not operator (!) - će promijeniti vrijednost varijable u suprotnu od postavljene. */
if (punoljetan && vozackaDozvola && !dobarVid) {
  console.log("Iako imaš loš vid, možeš voziti...");
}

/* Nulti operator spajanja (Nullish coalesing operator) (??) - logički operator koji će nam vratiti operanda sa desne
strane ako je sa lijeve strane operandq null ili undefined, inače će vratiti lijevog operanda (za razliku od
truthy i falsy koji će vratiti i 0 i prazan string) */

let nullish;

nullish = 10 ?? 20; // vratit će 10 jer je lijeva strana broj (truthy)
nullish = "lijeva" ?? "desna"; // vratit će "lijeva" jer sa lijeve strane string (truthy)
nullish = "" ?? "desna"; // vratit će lijevu stranu iako je prazan string u biti falsy vrijednost
nullish = 0 ?? "desna"; // vratit će lijevu stranu iako je lijevo nula što je falsy vrijednost
nullish = null ?? "desna";
nullish = undefined ?? "desna";

console.log(nullish);

/* I (&&) će vratiti lijevu stranu ako je sa lijeve strane falsy vrijednost ili desnu ako je sa desne strane
truthy vrijednost... */

let x;

x = 10 && 20; // ovo će vratiti 20 jer je sa desne strane truthy vrijednost
x = 10 && 20 && 30; // ovo će vratiti zadnjeg jer je zadnji sa desne strane truthy vrijednost
x = 10 && 0 && 20; // čim je naletio na falsy vrijednost a da nije zadnji element, to je vrijednost x-a
x = 10 && "" && 0 && 20; // čim je naletio na prvu falsy vrijednost (prazan string) to je zapisao kao vrijednost x-a
console.log(x);

let y = []; // definiramo praznu listu
console.log(y[0]); // ako pokušamo iz te prazne liste dohvatiti prvog člana i ispisati, dobit ćemo undefined

y.length > 0 && console.log(y[0]); // ovo neće pokrenuti clg jer je y.length > 0 sa lijeve strane falsy vrijednost

y = [1, 2];
y.length > 0 && console.log(y[0]); // ovo će ispisati jer su oboje truthy, i ispisat će se desna strana (clg)

/* Ili operator (||) će vratiti prvu truthy vrijednost ili ako su sve falsy, izbacit će zadnju vrijednost */

let z;

z = 10 || 20; // vraća 10 jer je 10 prva truthy vrijednost
z = 0 || 10 || 20; // vraća 10 jer je opet 10 prva truthy vrijednost (bez obzira što nije prva vrijednost)
z = 0 || null || "" || undefined; // vraća zadnju jer su sve falsy vrijednosti

console.log(z);

// par primjera korištenja ovakve sintakse

let a = false;

/* if (!a) {
  a = 10;
} */

a = a || 10;

// još skraćeno

a ||= 10;

console.log(a);

// primjer 2

let b = 20;

/* if (b) {
  b = 30;
} */

b = b && 30;

// još skraćeno

b &&= 30;

console.log(b);

// primjer 3

let c = null;
/* if (c === null || c === undefined) {
  c = 20;
} */

c = c ?? 20;

// još skraćeno

c ??= 20;

console.log(c);
