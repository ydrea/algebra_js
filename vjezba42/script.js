"use strict";

const btn = document.querySelector("button");

/* 
Napravite pomoću .then metode dohvaćanje usera na klik buttona i ispis usera u konzoli
*/

/* const fetchUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        console.log("Ne možemo dohvatiti podatke");
        return;
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

btn.addEventListener("click", fetchUsers); */

/* 
Idemo ovo napraviti pomoću Async/Await metode. Idemo ovo još doraditi na način dodamo novog usera
*/

const newUser = {
  name: "Ana",
  email: "test@test.com",
};

const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await res.json();
    if (!res.ok) {
      console.log("Ne možemo dohvatiti podatke");
      return;
    } else {
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", fetchUsers);
