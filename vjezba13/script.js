"use strict";

const ivanLista = [
  "Ivan",
  "Ivić",
  2024 - 1997,
  "Ribar",
  ["Marko", "Marija", "Stjepan", "Ivica", "Magdalena"],
];

console.log(ivanLista);

/* 
Liste nam ne omogućavaju da zapišemo članove liste sa našim ključem, stoga možemo koristiti objekte.
Trenutno od razlika primjećujemo da je kod pozivanja člana objekta nebitan raspored unutar objekta.
Za pozivanje objektne vrijednosti to radimo pomoću ključa, dok kod liste pozivamo indexom (tj. mjestom u listi)
*/
const ivanObjekt = {
  firstName: "Ivan",
  secondName: "Ivić",
  godine: 2024 - 1997,
  zanimanje: "Ribar",
  prijatelji: ["Marko", "Marija", "Stjepan", "Ivica", "Magdalena"],
};

console.log(ivanObjekt);

/* Kada želimo dohvatiti određenu vrijednost to ćemo napraviti pomoću ključa, ne pomoću indexa kao kod liste. */

// 1. Dot notacija
console.log(ivanObjekt.firstName);

// kako bo doddali i ispisali člana podlisete

console.log(ivanObjekt.prijatelji[1]);

// 2. Bracket notacija
console.log(ivanObjekt["godine"]);

// DODAVANJE NOVIH ČLANOVA OBJEKTA

ivanObjekt.lokacija = "Hrvatska";
console.log(ivanObjekt);

// zadatak 1 - dodajte novog prijatelja na listu prijatelja u objektu
ivanObjekt.prijatelji.push("Jura");
console.log(ivanObjekt);

// zadatak 2 - promijenite zanimanje
// Recimo da hoću izmijeniti postojeći objekt, mogu sa dot metodom to napraviti
ivanObjekt.zanimanje = "kuhar";
console.log(ivanObjekt);

// Također mogu izmijeniti postojeći objekt sa bracket notacijama
const nameKey = "Name";
console.log(ivanObjekt["first" + nameKey]);
console.log(ivanObjekt["second" + nameKey]);

// Primjer zašto bi nam bracket notacija nekad bila bolja od dot notacije

const upitnik = prompt(
  "Što vas zanima o Ivanu? Izaberi između firstName, secondName, godine, zanimanje ili prijatelji"
);

/* Ako ovako napišem pomoću dot notacije, ovo će pokušati dohvatiti svojstvo upitnik iz objekta, koji ne
postoji. Znači u objektu ne postoji vrijednost upitnik. */
console.log(ivanObjekt.upitnik);

/* Bracket notacija može ovu vrijednost izvući jer izvlači dinamičnu vrijednost koja nije zapisana u objektu.
I onda pomoću te dinamične vrijednosti traži svojstvo iz objekta. */
console.log(ivanObjekt[upitnik]);

// npr. ako upišem godine u promptu, to će izgledati kao da sam napisao ovo:
console.log(ivanObjekt["godine"]);

// Napišite if-else upit koji će provjeriti da li je u promptu upisano svojstvo iz objekta i složi onda ispis
// tog svojstva. A ako nije, ispiši console.log koji će reći "Krivi upis"
if (ivanObjekt[upitnik]) {
  console.log(ivanObjekt[upitnik]);
} else {
  console.log("Krivi upis");
}
