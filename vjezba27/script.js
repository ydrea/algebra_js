"use strict";

/* Event listeneri (događaji) - funkcioniraju pomoću addEventListener metode koju postavljamo na element kojeg
dohvaćamo iz DOM-a i na njega postavljamo 2 parametra (2 koraka)...
Prvi je sami događaj kojeg čekamo da se dogodi i koji kada se dogodi pokreće drugi korak (funkciju)
Drugi je sama funkcija koja će se pokrenuti event akcijom koju smo definirali u prvom koraku... */
/*
const clearBtn = document.getElementById("clear");
 
clearBtn.addEventListener("click", function () {
  console.log("Pokrenuli smo event listener");
}); */

// kao arrow funkcija

/* clearBtn.addEventListener("click", () => console.log("Pokrenuli smo pomoću Arrow funkcije")); */

/* function pocisti() {
  console.log("pokrenuto pomoću imenovane funkcije");
} */

/* clearBtn.addEventListener("click", pocisti); */

// -------------------------------------------------------------

// probajte napisati funkciju koja briše sve zadatke i koju pokreće button za brisanje svih zadataka

const clearbtn = document.getElementById("clear");
const listaZadataka = document.getElementById("zadatak-list");
const zadaci = listaZadataka.querySelectorAll(".pojedinacni-zadatak");

clearbtn.addEventListener("click", () => {
  zadaci.forEach((zadatak) => {
    zadatak.remove();
  });
});

// ostale Mouse evente

const naslov = document.querySelector("h1");

naslov.addEventListener("click", () => console.log("Običan lijevi klik mišem.")); // lijevi (jedan) klik miša
naslov.addEventListener("dblclick", () => console.log("Dupli lijevi klik mišem")); // lijevi (dupli) klik miša
naslov.addEventListener("mousedown", () => console.log("Držim lijevi klik mišem")); // stisni i drži lijevi klik miša
naslov.addEventListener("mouseup", () => console.log("Pustio sam klik mišem")); // pusti lijevi klik miša
naslov.addEventListener("wheel", () => console.log("Kotačić miša")); // kotačić miša
naslov.addEventListener("mouseover", () => console.log("hover-in miša")); // hover in mišem iznad elementa
naslov.addEventListener("mouseout", () => console.log("hover-out miša")); // hover out mišem kada se napusti element

/* 
Pointer events - kada upotrijebimo poziv parametra kod addEventListener funkcije, to će automatski biti
parametar preko kojeg možemo dohvatiti pointer evente na elementu na kojeg je nakačen event listener.
*/

const pointerEvent = (e) => {
  console.log(e); // vidimo sve moguće pointer evente

  console.log(e.target); // daje element koji smo kliknuli (HTML element)
  console.log(e.type); // daje nam vrstu eventa koji ga je aktivirao (u ovom slučaju click event)
  console.log(e.clientX); // daje nam vrijednost po horizontali relativno prema prozoru browsera
  console.log(e.clientY); // daje nam vrijednost po vertikali relativno prema prozoru browsera
  console.log(e.offsetX); // daje nam vrijednost po horizontali relativno prema HTML elementu (njegovom okviru)
  console.log(e.offsetY); // daje nam vrijednost po vertikali relativno prema HTML elementu (njegovom okviru)
  console.log(e.pageX); // daje nam vrijednost po horizontali relativno prema stranici
  console.log(e.pageY); // daje nam vrijednost po vertikali relativno prema stranici
  console.log(e.screenX); // daje nam vrijednost po horizontali relativno prema ekranu monitora
  console.log(e.screenY); // daje nam vrijednost po vertikali relativno prema ekranu monitora
};

naslov.addEventListener("click", pointerEvent);

/* 
Prevent default metoda - spriječava defaultno ponašanje određenog HMTL elementa, najčešće ga koristimo 
da spriječimo refresh stranice prilikom klika na gumb...
*/

/* document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Spriječili smo refresh stranice koji bi se inače aktivirao na klik linka.");
}); */

// DRAG event metoda

const gumb = document.querySelector("a");

const onDrag = (e) => {
  document.querySelector("h1").textContent = `X ${e.clientX} y ${e.clientY}`;
};

gumb.addEventListener("drag", onDrag);

/* KEYBOARD eventi - uz keyDown imate još i keyPress i keyUp. keyUp logično reagira tek kada "pustimo" tipku, tj.
dignemo prst sa tipke koju smo stisli. keyPress je u suštini isto što i keyDown.
*/

const inputKey = document.getElementById("zadatak-input");

const keyDown = (e) => {
  if (e.key === "Enter") {
    alert("Stisnuli ste Enter tipku");
  }

  if (e.repeat) {
    alert(`Pusti tipku ${e.key}`);
  }
};

inputKey.addEventListener("keydown", keyDown);
