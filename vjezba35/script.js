"use strict";

/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async zadatak je dovršen");
    resolve({ ime: "Ivan", dob: 30 });
  }, 1000);
});

promise.then((osoba) => {
  console.log("Promise dovršen...");
  console.log(`${osoba.ime} ima ${osoba.dob} godina`);
});

console.log("pozz iz globalnog scopea/sinkronog koda"); */

// Idemo ovo malo "uljepšat"...

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let greska = false;

    if (!greska) {
      resolve({ ime: "Ivan", dob: 30 });
    } else {
      reject("Nešto je pošlo po krivom...");
    }
  }, 1000);
})
  .then((osoba) => {
    console.log(`${osoba.ime} ima ${osoba.dob} godina`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() =>
    console.log("Finally će se odvriti bez obzira je li obećanje resolvano ili rejectano")
  );

console.log("pozz iz globalnog scopea/sinkronog koda");

/* Idemo napraviti primjer kao iz prošle vježbe, barem sličan... */

const imena = [
  { ime: "Ivan", prezime: "Ivić" },
  { ime: "Jura", prezime: "Jurić" },
];

const kreirajIme = (ime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let greska = false;

      if (!greska) {
        imena.push(ime);
        resolve();
      } else {
        reject("Nešto je pošlo po krivu");
      }
    }, 2000);
  });
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${osoba.ime} ${osoba.prezime}</strong>`;
      document.querySelector("#imena").appendChild(div);
    });
  }, 1000);
};

const getError = (error) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${error}</strong>`;
  document.querySelector("#imena").appendChild(p);
};

kreirajIme({ ime: "Ana", prezime: "Anić" }).then(getImena).catch(getError);

// Promise chaining - slaganje obećanja u lanac

const promiseChaining = new Promise((resolve, reject) => {
  setTimeout(() => {
    let greska = false;

    if (!greska) {
      resolve({ ime: "Marko", prezime: "Markić" });
    } else {
      reject("Greška..");
    }
  });
});

promiseChaining
  .then((osoba) => {
    console.log(osoba);
    return osoba.ime;
  })
  .then((ime) => {
    console.log(ime);
    return ime.length;
  })
  .then((duzinaImena) => {
    console.log(duzinaImena);
  })
  .catch((greska) => {
    console.log(greska);
  });
