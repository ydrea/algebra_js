"use strict";

// Podsjetimo se kako se sve može definirati Objekt...

// 1. Literalni način

const igor1 = {
  id: 1,
  name: "Igor",
  increase() {
    this.id++;
  },
};

// 2. Literalni ali naknadno definirani...

const igor2 = {};

igor2.id = 2;
igor2.name = "Igor";
igor2.increase = () => {
  this.id++;
};

// 3. Koristeći Object.create metodu
const igor3 = Object.create(null);

igor3.id = 3;
igor3.name = "Igor";
igor3.increase = () => {
  this.id++;
};

console.log(igor1);
console.log(igor1.__proto__); // double underscore prototype = dunder proto
console.log(igor1.__proto__ === Object.prototype);

/* Idemo definirati konstrukcijsku funkciju - pomoću konstrukcije funkcije kreiramo instance objekta.
 */

/* function Person(name) {
  this.name = name;
  this.login = function () {
    console.log(`${this.name} se logirao`);
  };
}

const user1 = new Person("Marija");
const user2 = new Person("Ivana");

user1.login();
user2.login();

console.log(user1, user2); */

//------------------------------------------------------------------------------------------------

function Person(name) {
  this.name = name;
}

Person.prototype.login = function () {
  console.log(`${this.name} se logirao`);
};

const user1 = new Person("Marija");
const user2 = new Person("Ivana");

user1.login();
user2.login();

console.log(user1, user2);

console.log(user1.__proto__ === user2.__proto__);

// Idemo vidjet još jedan primjer konstruktora

function Auto() {
  this.model = [];
}

Auto.prototype.getModel = function () {
  return this.model;
};

function Bmw() {
  this.model = ["M5", "X1", "X3", "X5"];
}

Bmw.prototype = Object.create(Auto.prototype);
Bmw.prototype.consumption = function () {
  console.log("Potrošnja je 11/100 km");
};

const bmwM5 = new Bmw();
bmwM5.consumption();

console.log(bmwM5.getModel()[1]);
