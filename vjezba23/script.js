console.log(window);
console.log(document);

// Kako dohvatiti unutarnji HTML putem DOM
console.log(document.body.innerHTML);

// Kako dohvatiti samo sadržaj unutar body-a
console.log(document.body.innerText);

/* Ovo naravno nije samo read-only, možemo mi i izmijeniti postojeći sadržaj */
/* document.body.innerHTML = "<h1>Hello World!</h1>"; */

// getElementById
const header = document.getElementById("header");
header.innerHTML = "<h1>Hello World!</h1>";

// ovo možemo napisati i bez spremanja u varijablu ako nam je tako draže, ali varijabilni pristup je uredniji
document.getElementById("header").innerHTML = "<h1>Hello World!!!!!!!</h1>";
