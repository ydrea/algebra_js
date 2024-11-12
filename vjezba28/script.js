"use strict";

/* 
INPUT eventi - radit će isto što i keydown, ali ga je bolje upotrijebiti kada se radi sa input poljima, za to je 
zamišljen. Može se koristiti i change event umjesto inputa, ali to je stariji selektor i ima širu upotrebu.
Kada imate checkbox unutar forme, njegovu vrijednost možete umjesto sa e.target.value saznati pomoću
e.target.checked što će dati true/false ovisno jel checkbox označen ili nije.
*/

const inputForma = document.getElementById("zadatak-input");
const naslov = document.querySelector("h1");

const naInput = (e) => {
  console.log(e.target.value); // e.target.value (pointer event) nam daje sve ono što je korisnik upisao u input polje
  naslov.textContent = e.target.value; // s ovim npr. mijenjamo sadržaj h1 sa onim što je korisnik upisao u input polje
};

const inFocus = (e) => {
  console.log("Input je u fokusu");
};

const onBlur = (e) => {
  console.log("Input nije u fokusu");
};

inputForma.addEventListener("focus", inFocus); // provjerava jesmo li kliknuli na input polje
inputForma.addEventListener("blur", onBlur); // provjerava jesmo li kliknuli van input polja
inputForma.addEventListener("input", naInput);

// SUBMIT forme

const forma = document.getElementById("zadatak-forma");
const zadatak = document.getElementById("zadatak-input");

const onSubmit = (e) => {
  e.preventDefault(); // preventDefault metoda će spriječiti prirodni refresh stranice kada se pokrene submit forme
  console.log(zadatak.value);
};

forma.addEventListener("submit", onSubmit);
