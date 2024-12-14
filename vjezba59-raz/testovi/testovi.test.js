const funkcije = require("./testovi");

test("Zbroji 2 + 2 da dobiješ 4", () => {
  expect(funkcije.add(2, 2)).toBe(4);
});

test("Provjeri da li 2 + 2 ne daju 5", () => {
  expect(funkcije.add(2, 2)).not.toBe(5);
});

// to be null matcher koji provjerava da li funkcija vraća null
test("Ova funkcija mora vratiti null", () => {
  expect(funkcije.isNull()).toBeNull();
});

test("Ovo mora vraćat falsy value", () => {
  expect(funkcije.provjeri(undefined)).toBeFalsy();
});

test("Osoba se mora zvati Ana i prezivati Anić", () => {
  expect(funkcije.kreiraj(null)).toEqual({
    ime: "Ana",
    prezime: "Anić",
  });
});

test("Zbroj treba biti manji od 10", () => {
  const a = 4;
  const b = 5;
  expect(a + b).toBeLessThan(10);
});

test("Ana mora biti na listi prijatelja", () => {
  let listaImena = ["Marija", "Ana", "Stjepan"];
  expect(listaImena).toContain("Ana");
});

test("User mora biti Leanne Graham", async () => {
  expect.assertions(1);
  const data = await funkcije.fetchOsoba();
  expect(data.name).toEqual("Leanne Graham");
});
