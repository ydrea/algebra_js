/* Trojni operator - Ternary operator - drugačiji način pisanja if-else-a, u jednoj liniji. Možete gledati sintaksu
na način da je ? = if gdje ćemo prije upitnika upisati uvjet koji provjeravamo i onda ćemo ići u provjeru da li je
nešto istinito. Prva stvar koja dođe nakon ? će se prikazati ako je upit istinit, a ono što dolazi nakon dvotočke
će biti prikazano ako je upit neistinit. */

const godina = 23;

if (godina >= 18) {
  console.log("Možeš voziti");
} else {
  console.log("Ne možeš voziti");
}

godina >= 18 ? console.log("Možeš voziti") : console.log("Ne možeš voziti");

// KOD TERNARY OPERATORA REZULTAT PROVJERE MOŽEMO ODMAH DIREKTNO ZAPISATI U VARIJABLU!!!
const voznja = godina >= 18 ? "Možeš voziti" : "Ne možeš voziti";
console.log(voznja);

/* za razliku od if-else-a koji je deklaracija, ternary operator daje vrijednost
 stoga ga možemo ubaciti u template literal */
console.log(`Možeš li voziti? ${godina >= 18 ? "Mogu" : "Ne mogu"}`);

// Primjer - korisnička autorizacija

// Koristeći if-else

/* const auth = true;
let redirect;

if (auth) {
  alert("Autorizacija je prošla");
  redirect = "/dashboard";
} else {
  alert("Autorizacija nije prošla");
  redirect = "/login";
}

console.log(redirect); */

// Koristeći ternary operator

const auth = true;
const redirect = auth
  ? (alert("Autorizacija je prošla"), "/dashboard")
  : (alert("Autorizacija nije prošla"), "/login");

console.log(redirect);
