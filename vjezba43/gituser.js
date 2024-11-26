"use strict";

/* 
Ideja je da napravimo više manjih "legića" od našeg JS koda i da raščlanimo naš kod tematski 
po podmodulima (JS fileovima). Ovaj modul će dohvaćati fetchom usera sa GitHuba i rezultat te
funkcije ćemo exportat glavnom script.js fileu...
*/

// defaultni export, koji exporta sve iz ove skripte
const getUsers = async () => {
  const res = await fetch("https://api.github.com/users/Igor-sam-svoj-rob");
  const data = await res.json();
  console.log(data);
};

export default getUsers;

// named export, koji exporta točno ono što definiramo u exportu iz ove skripte

export let kosarica = [];

export const dodajKosarica = function (proizvod, kolicina) {
  kosarica.push({ proizvod, kolicina });
  console.log(`${kolicina} ${proizvod} je dodano u košaricu`);
};
