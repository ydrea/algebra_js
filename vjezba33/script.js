"use strict";

// dosadašnji način kako smo koristili callback funkciju
const izmjena = (e) => {
  e.target.classList.toggle("crvena");
};

document.querySelector("button").addEventListener("click", izmjena);

// simulacija API poziva

const imena = [
  { ime: "Ivan", prezime: "Ivić" },
  { ime: "Jura", prezime: "Jurić" },
];

const kreirajIme = (ime, getImena) => {
  setTimeout(() => {
    imena.push(ime);
    getImena();
  }, 2000);
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${osoba.ime} ${osoba.prezime}</strong>`;
      document.querySelector("#imena").appendChild(div);
    });
  }, 1000);
};

kreirajIme({ ime: "Ana", prezime: "Anić" }, getImena);
