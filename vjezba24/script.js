"use strict";

// Možemo dohvatiti određeni element i po HTML tagu, ali to nije najsretnije rješenje...
console.log(document.getElementsByTagName("h1")[0].innerHTML);

// getElementsByClassName - dohvaćanje pomoću klase
const dijete = document.getElementsByClassName("dijete");
console.log(dijete);
console.log(dijete[2].innerText);

/* querySelector - s njim možemo dohvatiti što god hoćemo pomoću atributa. Ako imamo više od jednog 
elementa sa tim atributom, on će dohvatiti prvog na kojeg naiđe po HTML hijerarhiji. */

let naslov;

// dohvaćanje pomoću HTML taga
naslov = document.querySelector("h1");

// dohvaćanje pomoću ID-a
naslov = document.querySelector("#naslov");

// dohvaćanje pomoću klase
naslov = document.querySelector(".form-control");

// dohvaćanje pomoću atribute selektora
naslov = document.querySelector('input[type="text"]');

// dohvaćanje npr. drugog elementa liste (pomoću pseudoklasa npr...)
naslov = document.querySelector(".dijete:nth-child(2)");

console.log(naslov);

// querySelectorAll - ista priča kao querySelector, ali selektira sve elemente sa npr. istom klasom/tagom/atributom

const lista = document.querySelectorAll("ul li");
console.log(lista[2].innerHTML);

/* S obzirom da ne možemo mijenjati stilizaciju liste, možemo koristiti npr. forEach metodu za izmjenu
stilizacije liste */

lista.forEach((clan, kljuc) => {
  clan.style.color = "red";

  if (kljuc === 1) {
    clan.remove();
  }

  if (kljuc === 2) {
    clan.innerHTML = `promijenili smo ovaj <mark>ELEMENT</mark>`;
  }
});

/* ---------------------------------------------------------------------------------- */

// dodavanje novog atributa na postojeći element.

document.getElementById("naslov").setAttribute("class", "naslov_h1");
naslov = document.getElementById("naslov");

// možemo također mijenjati i CSS pomoću DOM manipulacije
naslov.style.color = "red";
naslov.style.border = "1px solid black";
naslov.style.padding = "1rem";
naslov.style.backgroundColor = "#eee";
naslov.style.borderRadius = "15px";
