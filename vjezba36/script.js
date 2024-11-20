"use strict";

/* function getData(putanja, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", putanja);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.response);
      cb(data);
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 2000) + 100);
}

getData("./filmovi.json", (filmovi) => {
  console.log(filmovi);
  getData("./glumci.json", (glumci) => {
    console.log(glumci);
    getData("./redatelji.json", (redatelji) => {
      console.log(redatelji);
    });
  });
}); */

// Idemo ovo napraviti pomoću Promise pristupa

/* function getData(putanja) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", putanja);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const data = JSON.parse(this.response);
          resolve(data);
        } else {
          reject("Dogodila se greška u statusu");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 2000) + 100);
  });
}

getData("./filmovi.json")
  .then((filmovi) => {
    console.log(filmovi);
    return getData("./glumci.json");
  })
  .then((glumci) => {
    console.log(glumci);
    return getData("./redatelji.json");
  })
  .then((redatelji) => {
    console.log(redatelji);
  })
  .catch((error) => {
    console.log(error);
  }); */

// Idemo još ovo napisati uz pomoć PromiseAll metode

function getData(putanja) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", putanja);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const data = JSON.parse(this.response);
          resolve(data);
        } else {
          reject("Dogodila se greška u statusu");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 2000) + 100);
  });
}

const noviIzvor = new Promise((resolve, reject) => {
  resolve("Hello World");
});

const filmovi = getData("./filmovi.json");
const glumci = getData("./glumci.json");
const redatelji = getData("./redatelji.json");

Promise.all([filmovi, glumci, redatelji, noviIzvor])
  .then((podaci) => {
    console.log(podaci);
  })
  .catch((error) => {
    console.log(error);
  });
