"use strict";

/* function CreateUser(id, name) {
  const user = Object.create(CreateUserMethods);
  user.id = id;
  user.name = name;
  return user;
}

const CreateUserMethods = {
  increase() {
    this.id++;
  },
  login() {
    console.log(`${this.name} se logirao`);
  },
};

const user1 = CreateUser(1, "Davor");
const user2 = CreateUser(2, "Stjepan");
const user3 = CreateUser(3, "Josipa");

console.log(user1, user2, user3);

user1.login(); */

// --------------------------------------------------------------------------------------------

/* function CreateUser(id, name) {
  this.id = id;
  this.name = name;
}

CreateUser.prototype.increase = function () {
  this.id++;
};

CreateUser.prototype.login = function () {
  console.log(`${this.name} se logirao`);
};

const user1 = new CreateUser(1, "Davor");
const user2 = new CreateUser(2, "Stjepan");
const user3 = new CreateUser(3, "Josipa");

console.log(user1, user2, user3); */

// --------------------------------------------------------------------------------------------

class CreateUser {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  increase() {
    this.id++;
    return this;
  }
  login() {
    console.log(`${this.name} se logirao`);
    return this;
  }
}

const user1 = new CreateUser(1, "Davor");
const user2 = new CreateUser(2, "Stjepan");
const user3 = new CreateUser(3, "Josipa");

console.log(user1, user2, user3);

user1.increase().login();

// idemo kreirati listu usera koje smo kreirali pomoću klase
let users = [];
users.push(user1, user2, user3);
console.log(users);

// Nasljeđivanje u klasama

class Admin extends CreateUser {
  // kreiraj klasu Admin i preuzmi sve što ima klasa CreateUser
  removeUser(deleteUser) {
    users = users.filter((user) => {
      return user.name != deleteUser.name;
    });
  }
}

const admin = new Admin(4, "Admin");
console.log(admin);
admin.removeUser(user3);

console.log(users);
