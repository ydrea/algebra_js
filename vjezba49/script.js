"use strict";

class User {
  constructor(id, name, lastname) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
  }

  static check(x, y) {
    return x.name === y.name && x.lastname === y.lastname;
  }

  get fullName() {
    // definiranje gettera dozvoljava samo čitanje, ne i direktnu modifikaciju
    return `${this.name} ${this.lastname}`;
  }

  set fullName(input) {
    // definiranje settera nam omogućava modifikaciju pozvane instance klase
    const splitInput = input.split(" ");
    this.name = splitInput[0];
    this.lastname = splitInput[1];
  }
}

const user1 = new User(1, "Davor", "Horvat");
const user2 = new User(2, "Ivan", "Ivić");
const user3 = new User(3, "Maja", "Majić");

user1.fullName = "Ivan Ivić";

console.log(user1.fullName);

console.log(User.check(user1, user2));
console.log(User.check(user1, user3));
