"use strict";

const obecanje = new Promise((res, rej) => {
  setTimeout(() => {
    res({ ime: "Jura", godina: 30 });
  }, 1000);
});

// Do sada smo radili ovo sa .then metodom...
/* obecanje.then((data) => console.log(data)); */

/* 
Async/Await pristup koristi funkciju (async je uvijek funkcija), a odgovor koji je asnkroni se onda može
pomoću awaita sačekat i zapisat u varijablu.
*/
async function getPromise() {
  const odgovor = await obecanje;
  console.log(odgovor);
}

getPromise();

// Idemo vidjeti kako bi mogli dohvatiti podatke sa API-a pomoću Async/Await funkcije

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

getUsers();

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  console.log(data);
};

getPosts();

/* 
Kod .then metode smo koristili .catch da bi dohvatili errore. Kod Async/Await metode koristimo Try/Catch
*/

try {
  console.log(x);
} catch (error) {
  console.log(error);
}

function double(number) {
  if (isNaN(number)) {
    throw new Error(`${number} nije broj`);
  }
  return number * 2;
}

try {
  const y = double("string");
  console.log(y);
} catch (error) {
  console.log(error);
}

/* Ajmo ovaj pristup iskombinirati Async/Await metodom. */

const url = "https://jsonplaceholder.typicode.com/users";

const useri = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    let names = data.map((user) => user.name);
    console.log(names);
  } catch (error) {
    console.log(error);
  }
};

useri();
