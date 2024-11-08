"use strict";

// idemo vidjet kako ćemo zamijeniti neki postojeći element - replaceWith metoda

function zamijeniZadatak() {
  // dohvaćamo prvi zadatak iz liste zadataka i spremamo u varijablu zadatak
  const zadatak = document.querySelector("li:first-child");

  // kreiramo novi li sa sadržajem
  const li = document.createElement("li");
  li.innerText = "Zamijenjeni zadatak";

  // zamjenjujemo postojeći sa novo-kreiranim zadatkom
  zadatak.replaceWith(li);
}

zamijeniZadatak();

// sa outerHTML metodom

function zamijeniZadatak2() {
  const zadatak = document.querySelector("li:last-child");

  zadatak.outerHTML = "<li>Zamijenili smo zadnji zadatak</li>";
}

zamijeniZadatak2();

// Brisanje elemenata remove i removeChild metodama

function ukloniButton() {
  // dohvati element i ukloni ga
  document.getElementById("clear").remove();
}

ukloniButton();

function ukloniZadatak() {
  // dohvaćanje parent i child elementa u listi zadataka
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  // brisanje child elementa pomoću parent elementa
  ul.removeChild(li);
}

ukloniZadatak();

// onclick metoda za pokretanje radnje na klik

const naslov = document.querySelector("h1");
const listaZadataka = document.querySelector("#zadatak-list");
const zadaci = listaZadataka.querySelectorAll("li");
const input = document.querySelector("#zadatak-input");
const btn = document.querySelector("#gumb");

function klik() {
  // na klik ispiši console log
  console.log(1);

  // naslovu ćemo dodati klasu
  naslov.className = "promjena";

  // classList - dodavanje nove klase na postojeću listu klasa
  listaZadataka.classList.add("promjena");

  // classList - uklanjanje određene klase sa liste klasa
  listaZadataka.classList.remove("zadatak");

  // classList - replace zamjenjuje jednu klasu sa drugom
  input.classList.replace("form-input", "promjena");

  // toggle metoda funkcionira kao prekidač za svjetlo on/off
  btn.classList.toggle("btn2");

  // direktno mjenjanje stilizacije
  btn.style.lineHeight = "5";
}

input.onclick = klik;
