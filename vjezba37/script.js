"use strict";

// const odgovor = fetch("url");

/* 
Ispod haube se skriva slijedeća logika (Fetch sprema u Response objekt Request objekt)

{Response} = fetch ({ Request })

const zahtjev = new Request("url", {
method: "GET"})
*/

const url = "https://jsonplaceholder.typicode.com/todos/1";

// Idemo dohvatiti podatke sa servera i title sadržaj zamijeniti sa h1 iz našeg html-a u DOM-u
function dohvatiPodatke() {
  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => (document.querySelector("h1").textContent = data.title));
}

dohvatiPodatke();

// Idemo dohvatiti podatke sa filmovi.json koji se nalazi lokalno

fetch("./filmovi.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Idemo dohvatiti podatke sa test.txt koji se nalazi lokalno
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

/* 
  Rekli smo da je GET metoda u fetch requestu po defaultu. Ali što ako želimo promijeniti metodu u POST npr.
  Definiraju se 3 stvari:
    1. method: HTTP metoda koju želimo koristiti (po defaultu GET)
    2. body: u bodiju se nalaze podaci koje želimo poslati
    3. headers: Bilo kakav HTTP header koji želimo koristiti, često tu stoje tzv. access tokeni
  */

/* 
    Možemo pomoću destrukturiranja poslati sadržaj novog posta na drugačiji način.
    Umjesto parametra post ubacit ćemo objekt i onda s obzirom da nam je title: title i body: body,
    možemo skraćeno samo napisati title i body. Definirat ćemo headers gdje obično definirate kakav
    Content-Type šaljete (u ovom slučaju application/json jer šaljem json tip podatka) i ako postoji
    potreba za pristupnim tokenom, šaljem nakon toga token i njegovu vrijednost.
    */
function kreirajPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

kreirajPost({ title: "Moj post", body: "Ovo je moj post" });
