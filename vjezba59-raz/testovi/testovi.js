const axios = require("axios");

const funkcije = {
  add: (broj1, broj2) => broj1 + broj2,
  isNull: () => null,
  provjeri: (x) => x,
  kreiraj: () => {
    const osoba = { ime: "Ana", prezime: "Anić" };
    return osoba;
  },
  fetchOsoba: async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      return res.data;
    } catch (error) {
      return "Greška";
    }
  },
};

module.exports = funkcije;
