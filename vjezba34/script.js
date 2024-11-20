"use strict";

/* 
HyperText Transfer Protocol je protokol za slanje i primanje podataka na webu. On je klijent/server protokol.
Zahtjev inicijalizirate vi (klijent), a server će reagirati sa odgovorom. Odgovor može biti bilo koji format file.

HTTP metode:
GET - traži podatke sa servera
POST - šalje podatke na server
PUT&PATCH (edit) - updatea podatke na serveru
DELETE - briše podatke sa servera

http status kodovi koji su nam bitni:

100 - continue

200 - uspjeh
201 - uspjeh (kreirao je nešto što smo htjeli kreirati na serveru)
204 - uspjeh ali nema sadržaja

300 - redirect
301 - trajni redirect
302 - privremeni redirect

400 - Error kod klijenta (Bad request)
401 - neautoriziran zahtjev
403 - zabranjeni zahtjev
404 - zahtjev za nečim što ne postoji (Not found)

500 - greške na serveru
*/

const xhr = new XMLHttpRequest(); // kreiramo novi objekt koji nam otvara novi zahtjev za podacima
const metoda = "GET"; // metoda nam ovdje definira HTTP metodu (u ovom slučaju dohvaćanje podataka)
const url = "./imena.json"; // url nam je definirao adresu sa koje povlačimo podatke

xhr.open(metoda, url);

/* Nakon što otvorimo/definiramo na našem xhr objektu metodom open novi poziv (gdje putem parametara definiramo
metodu i putanju) možemo pozvati event handler koji se zove onreadystatechange, kojim možemo upravljati
našim readystate i status svojstvom. ReadyState sadrži status u kojem se naš XMLHttprequest klijent nalazi.

Postoji 5 mogućih rješenja za xhr.readyState:
0: zahtjev nije inicijaliziran
1: server konekcija je uspostavljena
2: zahtjev je zaprimljen
3: procesuiranje zahtjeva
4: zahtjev je završio i odgovor je spreman

Postoji također 5 mogućih rješenja za xhr.status:
200 (OK): Zahtjev je uspješno obrađen
404 (Not found): Zatraženi resurs nije pronađen
500 (Internal server error): Došlo je do greške na serveru prilikom obrade zahtjeva
403 (Zabranjeno/Forbidden): pristup resursu na serveru je zabranjen
401 (Neautoriziran): nemate autorizacijska prava za pristup podacima na serveru 
*/

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    // kreirajte za svakog člana liste data jedan list item (li) i ispišite ih u ul sa #imena

    data.forEach((element) => {
      const imena = document.getElementById("imena");
      const li = document.createElement("li");
      li.innerText = element.ime;
      imena.append(li);
    });
  }
};

xhr.send();
