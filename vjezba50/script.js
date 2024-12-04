"use strict";

class Ptica {
  constructor(ime) {
    this.ime = ime;
  }

  kljun() {
    console.log("Ova ptica ima crni kljun");
  }
}

const ptica1 = new Ptica("Svraka");
ptica1.kljun();

// Idemo napraviti novu klasu koja nasljeđuje klasu Ptica

class Papiga extends Ptica {
  constructor(ime) {
    super(ime);
    /* U nasljeđivanju super() poziva konstruktor roditeljske klase (super = nadzorna funkcija).
    Bez super-a podređena klasa neće pravilno inicijalizirati naslijeđena svojstva i može doći do grešaka. */
  }

  kljun() {
    super.kljun();
    console.log("Ova ptica ima žuti kljun");
  }
}

const ptica2 = new Papiga("Nimfa");
ptica2.kljun();
