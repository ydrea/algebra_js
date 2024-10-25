const dan = prompt("Koji je danas dan?");

switch (dan) {
  case "ponedjeljak": // ako je dan === ponedjeljak
    console.log("danas je ponedjeljak");
    console.log("Idemo na posao....");
    break; // break zaustavlja ispis, tj. ako ga nema ispisat će se i idući case (iliti dan)

  case "utorak":
    console.log("tek je utorak, daleko je vikend");
    break;

  case "srijeda":
  case "četvrtak":
    console.log("Ni danas nije počeo vikend");
    break;

  case "petak":
    console.log("Napokon petak, sutra je vikend");
    break;

  case "subota":
  case "nedjelja":
    console.log("VIKEEEEND");
    break;

  default:
    console.log("unijeli ste nešto što nije dan u tjednu");
}
