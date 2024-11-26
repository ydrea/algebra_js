"use strict";

/* 
Naš JS ima ugrađen Date objekt da definiramo vrijeme...
*/

let x;
let y;

x = new Date();
y = new Date();
console.log(x, typeof x);

// s obzirom da je ovo objekt, kako bi ovo koristili kao string?
x = x.toString();
console.log(x, typeof x);

// Ajmo sada složiti neki datum i vrijeme koje mi želimo (2 metode pisanja)
x = new Date("2024-01-12T12:00:00");
x = new Date("01/12/2024 12:00:00");

// Recimo da želim dohvatiti vrijeme iz datuma pomoću getTime metode
x = x.getTime();
console.log(x);
// Ovo će nam dati Timestamp koji se računa od Unix doba iliti postavljen je kao timer u sekundama od 1.1.1970.

// Idemo sada dohvatiti Timestamp pomoću valueOf metode

y = y.valueOf();
let z = y + 1000;
console.log(y, z);

// Ako želimo dohvatiti umjesto Timestampa godinu/mjesec/dan itd...

// dohvaćanje godine
z = new Date().getFullYear();
console.log(z, typeof z);

// dohvaćanje mjeseca
z = new Date().getMonth() + 1;
console.log(z, typeof z);

// dohvaćanje dana - nedjelja je 0, a subota je 6-i dan u tjednu
z = new Date().getDay();
console.log(z, typeof z);

// dohvaćanje sata
z = new Date().getHours();
console.log(z, typeof z);

// dohvaćanje minuta
z = new Date().getMinutes();
console.log(z, typeof z);

// dohvaćanje sekundi
z = new Date().getSeconds();
console.log(z, typeof z);

// date je po defaultu u engleskom formatu
z = new Date();

z = Intl.DateTimeFormat("hr-HR").format(z);
console.log(z);
