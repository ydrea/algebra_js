"use strict";

// Globalne varijable
const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// Funkcije

// Funkcija za kreiranje zadatka

const dodajZadatak = (e) => {
  e.preventDefault();
  // provjera da li je input polje prazno i ako je pokrenuti alert i zaustaviti sa returnom ovu funkciju
  if (zadatakInput.value === "") {
    alert("Ne možete spremiti prazan zadatak");
    return;
  }

  /* Da bi spremili novi zadatak, naravno da moramo kreirati sve elemente za taj novi zadatak... */

  // kreiranje list itema sa novim zadatkom iz input polja (i dodavanje klasa)
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));
  li.className = "pojedinacni-zadatak";

  // kreiranje buttona unutar list itema za brisanje zadatka (i dodavanje klasa)
  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";
  li.appendChild(delGumb);

  // kreiranje ikonice unutar buttona i dodavanje na button (i dodavanje klasa)
  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";
  delGumb.appendChild(ikona);

  // dodavanje novog list itema na listu zadataka
  listaZadataka.appendChild(li);

  // brisanje input polja
  zadatakInput.value = "";

  provjeriListu();
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
  /*   listaZadataka.innerHTML = ""; // možemo i ovako jednostavno, ako ne spremamo zadatke na neki server npr... */

  while (listaZadataka.firstChild) {
    listaZadataka.removeChild(listaZadataka.firstChild);
  }

  provjeriListu();
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
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
provjeriListu();
