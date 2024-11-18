"use strict";

const post = {
  id: 1,
  naslov: "Prvi post",
  sadrzaj: "Ovo je sadržaj posta",
  autor: "Igor",
};

// sa JSON.stringify-em ćemo prebaciti objektni podatak u JSON format
const jsonfile = JSON.stringify(post);
console.log(jsonfile);

// sa JSON.parse metodom ćemo prebaciti JSON format u objekt
const objektfile = JSON.parse(jsonfile);
console.log(objektfile);

/* setTimeout je asinkrona funkcija, ona funkcionira na način da prvo definira što će napraviti a onda definira
timer kojim će odrediti za koliko će se ta funkcija odvrtiti. Asinkrone funkcije će se izvršiti kada se odvrte sve
sinkrone funkcije.
*/

setTimeout(() => {
  console.log("Pozz iz setTimeouta");
}, 0);

console.log("Pozz izvan setTimeouta");

// primjer 2 - definiramo funkciju koju će pokrenuti setTimeout i nakon koliko vremena

const promijeniText = () => {
  document.getElementById("naslov").textContent =
    "Pozz iz callback funkcije koju je pokrenuo setTimeout";
};

const promjena = setTimeout(promijeniText, 4000);
// clearTimeout će spriječiti izvršavanje setTimeouta ako ga na vrijeme pokrenemo
document.getElementById("stop").addEventListener("click", () => {
  clearTimeout(promjena);
  console.log("Otkazana promjena");
});

// setInterval - definiranje intervalnog koda koji će se izvršavati konstatno umjesto jednom
const interval = () => {
  console.log("interval");
};

const pokreniInterval = setInterval(interval, 1000);

document.getElementById("stop1").addEventListener("click", () => {
  clearInterval(pokreniInterval);
});
