"use strict";

// OBJEKTNE METODE (objektne funkcije)

const user = {
  firstName: "Ivo",
  secondName: "Ivić",
  godRodjenja: 2000,
  zanimanje: "Pekar",
  prijatelji: ["Marko", "Stjepan", "Luka"],
  vozackaDozvola: true,
  starost: function () {
    /* Ne možemo starost naravno spremiti u varijablu, jer je ona vrijednost objekta, a svaka funkcija
    koja se veže uz objekt, se zove objektna metoda */
    this.dob = 2024 - this.godRodjenja;
    return this.dob;
  },
  login() {
    console.log(this);
    console.log(this.firstName, "je logiran");
  },
};

/* 
    Dok god ne pozovemo objektnu metodu, return funkcije starost ne postoji. Tek onda kada se odvrti, će se kreirati
    jer ona nije originalna vrijednost objekta.
*/
console.log(user);
console.log(user.starost());
console.log(user.starost());
console.log(user.starost());
console.log(user.starost());
console.log(user.starost());
console.log(user.starost());
console.log(user.starost());
console.log(user["starost"]());
user.login();
console.log(user);

// Još jedan primjer - idemo napraviti 2 objektne metode i pozvati prvu metodu u izvršavanju druge metode

const user1 = {
  firstName: "Ivo",
  secondName: "Ivić",
  godRodjenja: 2000,
  zanimanje: "Pekar",
  prijatelji: ["Marko", "Stjepan", "Luka"],
  vozackaDozvola: true,
  starost: function () {
    this.dob = 2024 - this.godRodjenja;
    return this.dob;
  },
  zadatak: function () {
    return `${this.firstName} je ${this.starost()}-godišnji ${this.zanimanje}. ${this.firstName} ${
      this.vozackaDozvola ? "ima" : "nema"
    } vozačku dozvolu.`;
  },
};

console.log(user1.zadatak());
