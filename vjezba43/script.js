import getUsers from "./gituser.js";
import * as cart from "./gituser.js";
/* 
Možemo za naše named import raditi i destrukturiranje prilikom importa.
import {dodajKosarica, kosarica} from "./gituser.js";
*/

getUsers();

// Ako radimo pomoću destrukturiranja, onda nema potrebe pozivati cart objekt prije poziva funkcije
cart.dodajKosarica("kruh", 1);
cart.dodajKosarica("pašteta", 5);

// Ako radimo pomoću destrukturiranja, onda nema potrebe pozivati cart objekt prije poziva liste kosarica
const sumaProizvoda = cart.kosarica.reduce((prije, sad) => prije + sad.kolicina, 0);
console.log(sumaProizvoda);
