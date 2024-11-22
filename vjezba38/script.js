"use strict";

/* 
Idemo sada ovo ubaciti u naš prikaz DOM-a. 
Dohvati div element sa ID-em "ispisi" i u njemu ispiši sadržaj uzorak.txt-a umjesto console loga.
*/

document.getElementById("povuci").addEventListener("click", povuciTekst);

function povuciTekst() {
  fetch("./uzorak.txt")
    .then((res) => res.text())
    .then((data) => (document.getElementById("ispisi").innerText = data))
    .catch((error) => console.log(error));
}

/* 
Na button sa ID-em "lokalni_json" složi click event listener koji pokreće funkciju koja će ispisati
sve usere iz naše liste objekata na način da ispiše njihova imena, prezimena i ID. na istom "ispisi"
div elementu.
*/

document.getElementById("lokalni_json").addEventListener("click", listaJson);

function listaJson() {
  fetch("./users.json")
    .then((res) => res.json())
    .then((data) => {
      let ispis = `<h2>Lista korisnika</h2>`;

      data.forEach((user) => {
        ispis += `<ul>
        <li>ID: ${user.id}</li>
        <li>Ime: ${user.ime}</li>
        <li>Prezime: ${user.prezime}</li>
        </ul>`;
      });

      document.getElementById("ispisi").innerHTML = ispis;
    })
    .catch((error) => console.log(error));
}

/* 
Na button sa ID-em "vanjski_json" složi click event listener koji pokreće funkciju koja će ispisati
sve post titlove i body iz naše liste objekata sa jsonplaceholder stranice. Na istom "ispisi"
div elementu.   
*/

const vanjski_json = document.getElementById("vanjski_json");

vanjski_json.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("ispisi").innerHTML = data
        .map(
          (post) => `
        <ul>
        <li>Title: ${post.title}</li>
        <li>Body: ${post.body}</li>
        </ul>`
        )
        .join("");
    })
    .catch((err) => console.log(err));
});

/* 
Zadnji zadatak je da sa metodom post, spremite na submit forme sadržaj upisan u input poljima i pošaljete
na jsonplaceholder/posts API.
*/

document.getElementById("post").addEventListener("submit", kreirajObjavu);

function kreirajObjavu(e) {
  e.preventDefault();

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
