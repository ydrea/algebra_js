"use strict";

// Globalne varijable
const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

/* // Sprema vrijednost sa ključem u naš localStorage
localStorage.setItem("kljuc po kojem dohvaćamo podatke", "vrijednost zapisana na tom ključu");
localStorage.getItem("kljuc po kojem dohvaćamo podatke"); // dohvaća vrijednost zapisanu na traženom ključu
localStorage.removeItem("kljuc po kojem dohvaćamo podatke"); // briše ključ i vrijednost na traženom ključu
localStorage.clear(); // briše sve zapisano u localStorageu */

// Funkcije

// Funkcija koja provjerava zadatke iz LS prilikom učitavanja aplikacije
const prikaziZadatkeLS = () => {
  const zadaciSpremiste = dohvatiStorage();
  zadaciSpremiste.forEach((zadatak) => kreirajZadatak(zadatak));
  provjeriListu();
};

// Funkcija za kreiranje zadatka
const dodajZadatak = (e) => {
  e.preventDefault();
  const noviZadatak = zadatakInput.value;
  if (noviZadatak === "") {
    alert("Ne možete spremiti prazan zadatak");
    return;
  } else {
    kreirajZadatak(noviZadatak);
    provjeriListu();
    // Ovdje pozivamo tu localStorage funkciju, a kao parametar stavljamo vrijednost iz inputa.
    dodajLocalStorage(noviZadatak);
    zadatakInput.value = "";
  }
};

// Funkcija za kreiranje list itema
const kreirajZadatak = (noviZadatak) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(noviZadatak));
  li.className = "pojedinacni-zadatak";
  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";
  li.appendChild(delGumb);
  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";
  delGumb.appendChild(ikona);
  listaZadataka.appendChild(li);
};

/* 
Prvo moram provjeriti imamo li štogod u localStorageu. Ako nemamo, onda ćemo složiti našu varijablu kao praznu listu.
S druge strane ako imamo nešto u localStorageu, onda ćemo prvo spremiti ono što se nalazi unutra u našu varijablu 
zadacispremiste. S obzirom da u localStorageu imamo spremljene stringove, moramo to odmah prilikom prebacivanja u
našu skriptu pretvoriti parse metodom u objektni podatak.
*/
const dodajLocalStorage = (zadatakInput) => {
  const zadaciSpremiste = dohvatiStorage();
  // nakon provjere možemo na tu listu zadataka, push metodom dodati novo-kreirani zadatak
  zadaciSpremiste.push(zadatakInput);

  // Nakon toga tu updateanu listu spremamo nazad u localStorage, ali naravno kao listu stringova
  localStorage.setItem("kljuc", JSON.stringify(zadaciSpremiste));
};

// Funkcija za dohvaćanje localStorage (jer nam treba na više mjesta)
const dohvatiStorage = () => {
  let zadaciSpremiste;

  if (localStorage.getItem("kljuc") === null) {
    zadaciSpremiste = [];
  } else {
    zadaciSpremiste = JSON.parse(localStorage.getItem("kljuc"));
  }

  return zadaciSpremiste;
};

// Funkcija za brisanje pojedinačnog zadatka
const obrisiZadatak = (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
    provjeriListu();
  }
};

// Funkcija za brisanje svih zadataka
const obrisiZadatke = () => {
  while (listaZadataka.firstChild) {
    listaZadataka.removeChild(listaZadataka.firstChild);
  }

  provjeriListu();
};

const filtrirajZadatke = (e) => {
  const zadaci = listaZadataka.querySelectorAll("li");
  const tekst = e.target.value.toLowerCase();

  zadaci.forEach((zadatak) => {
    const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
    if (imeZadatka.indexOf(tekst) != -1) {
      zadatak.style.display = "flex";
    } else {
      zadatak.style.display = "none";
    }
  });
};

// Funkcija za provjeru ima li zadataka u našoj listi zadataka
const provjeriListu = () => {
  const zadaci = listaZadataka.querySelectorAll("li");
  if (zadaci.length === 0) {
    filter.style.display = "none";
    brisiSve.style.display = "none";
  } else {
    filter.style.display = "block";
    brisiSve.style.display = "block";
  }
};

// Event listeneri
document.addEventListener("DOMContentLoaded", prikaziZadatkeLS);
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);
provjeriListu();
