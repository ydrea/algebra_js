"use strict";

// kreiranje novog div elementa
/* const noviZadatak = document.createElement("li"); */

// dodavanje klase na taj novi element
/* noviZadatak.className = "novi-zadatak"; */

// dodavanje ID-a na novi zadatak
/* noviZadatak.id = "id-zadatak"; */

// možemo dodati i custom atribut kako nam volja
/* noviZadatak.setAttribute("naslov", "naslovZadatka"); */

// idemo dodati i sadržaj tom novom zadatku
/* noviZadatak.innerHTML = "Novi <mark>zadatak</mark>"; */

/* document.getElementById("zadatak-list").appendChild(noviZadatak); */

/* ----------------------------------------------------------------------- */

/* Umjesto ovakvog pristupa, možda bi bilo bolje za kreiranje zadatka složit funkciju pomoću koje bi mogli
kreirati nove zadatke, npr. na način da putem parametra funkcije proslijedimo samo tekst zadatka, a funkcija
kreirak kompletan list item (zadatak) */

// 1 brži način - fiksno smo ubacili button HTML, jedino je zadatak unesen putem parametra

function kreirajZadatak(zadatak) {
  const li = document.createElement("li");
  li.className = "pojedinacni-zadatak";

  li.innerHTML = `${zadatak}
  <button class="ukloni-zadatak btn-link">
  <i class="fa-solid fa-xmark"></i>
  </button>`;

  document.getElementById("zadatak-list").appendChild(li);
}

kreirajZadatak("Kupi novine");
kreirajZadatak("Odi na trening");

// 2 duži način - malo detaljniji jer ćemo kreirati sve elemente i onda ih pravilno posložiti

function kreirajZadatak2(zadatak) {
  const li = document.createElement("li");
  li.className = "pojedinacni-zadatak";
  li.innerText = zadatak;

  const button = napraviButton("ukloni-zadatak btn-link");

  li.appendChild(button);
  document.getElementById("zadatak-list").appendChild(li);
}

function napraviButton(klase) {
  const button = document.createElement("button");
  button.className = klase;

  const ikona = napraviIkonu("fa-solid fa-xmark");
  button.appendChild(ikona);

  return button;
}

function napraviIkonu(klase) {
  const ikona = document.createElement("i");
  ikona.className = klase;

  return ikona;
}

kreirajZadatak2("Kupi meso");

// insertAdjacentElement metoda - ubacuje HTML element sa sadržajem kojeg potavimo

function ubaciElement() {
  const filter = document.querySelector(".filter"); // dohvaćamo filter klasu iz HTML DOM-a

  const p = document.createElement("p");
  p.innerText = "Tekst koji ubacujemo";

  /* filter.insertAdjacentElement("beforebegin", p);  */
  // beforebegin metoda ubacuje kreirani element prije pozvanog elementa

  /* filter.insertAdjacentElement("afterbegin", p); */
  // afterbegin metoda ubacuje kreirani element na prvom mjestu unutar pozvanog elementa

  /* filter.insertAdjacentElement("beforeend", p); */
  // beforeend metoda ubacuje kreirani element na zadnjem mjestu unutar pozvanog elementa

  /* filter.insertAdjacentElement("afterend", p); */
  // afterend metoda ubacuje kreirani element nakon pozvanog elementa
}

ubaciElement();

// insertAdjacentText metoda ubacuje tekst umjesto elementa u HTML DOM
document.querySelector(".pojedinacni-zadatak").insertAdjacentText("beforeend", "Ubačeni tekst");

// insertAdjacentHTML metoda - ubacuje HTML
document.querySelector("#clear").insertAdjacentHTML("afterbegin", "<mark>Žuti tekst</mark>");
